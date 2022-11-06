const Validator = require('fastest-validator');
const { User } = require('../../models');
const { Role } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const v = new Validator();

module.exports = {
    register: async (req, res) => {
        const { name, email, password, confirmPassword, phone, role_id } = req.body;
        try {
            const schema = {
                email: 'email|empty:false',
                password: 'string|min:6|same:confirmPassword',
                confirmPassword: 'string|min:6|same:password',
                name: 'string|empty:false',
                phone: 'string|empty:false',
                role_id: 'number|empty:false',
            };
            const validate = v.validate({
                name,
                email,
                password,
                confirmPassword,
                phone,
                role_id
            }, schema);
            if (validate.length) return res.status(400).json(validate);
            if (password !== confirmPassword) res.status(400).json({ message: 'Password or email not match' });
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await User.create({
                name: name,
                email: email,
                password: hashedPassword,
                phone: phone,
                role_id: role_id
            });
            // get user data dan role data
            const users = await User.findOne({
                where: {
                    id: user.id
                },
                include: {
                    model: Role,
                    as: 'roles'
                }
            });
            const { id, name: userName, email: userMail, password: userPassword, phone: userPhone } = users.dataValues;
            let { id: roleId, name: roleName } = users.roles.dataValues;
            // console.log(users.dataValues);
            // console.log(users.roles.dataValues)
            return res.json({
                message: 'Register success',
                data: {
                    id: id,
                    name: userName,
                    email: userMail,
                    phone: userPhone,
                    role: {
                        id: roleId,
                        name: roleName
                    }
                }
            });
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const schema = {
                email: 'email|empty:false',
                password: 'string|min:6|empty:false'
            };
            const validate = v.validate({
                email,
                password
            }, schema);
            if (validate.length) return res.status(400).json(validate);
            const user = await User.findOne({
                where: {
                    email: email
                },
                include: {
                    model: Role,
                    as: 'roles'
                }
            });
            if (!user) return res.status(400).json({ message: 'User not found' });
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) return res.status(400).json({ message: 'Password not match' });
            const { id, name, email: userMail, password: userPassword, phone, role_id } = user.dataValues;
            let { id: roleId, name: roleName } = user.roles.dataValues;
            const accessToken = jwt.sign({id, email, roleId}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '3h'
            });
            const refreshToken = jwt.sign({id, email, roleId}, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '3d'
            });
            await User.update({
                refreshToken: refreshToken
            }, {
                where: {
                    id: id
                }
            })
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })
            return res.json({
                message: 'Login success',
                data: {
                    id: id,
                    name: name,
                    email: userMail,
                    phone: phone,
                    token: accessToken,
                    role: {
                        id: roleId,
                        name: roleName
                    }
                }
            });
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    },
    refreshToken: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
            if (err) return res.sendStatus(403);
            const { id, email, roleId } = user;
            const accessToken = jwt.sign({id, email, roleId}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '3h'
            });
            return res.json({
                accessToken: accessToken
            });
        })
    }, 
    logout: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const user = await User.findOne({
            where: {
                refreshToken: refreshToken
            }
        });
        if (!user) return res.sendStatus(204);
        await User.update({
            refreshToken: null
        }, {
            where: {
                id: user.id
            }
        });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    }
}