const Validator = require('fastest-validator');
const { Role } = require('../../models');

const v = new Validator();

module.exports = {
    getRoles: async (req, res) => {
        try {
            const roles = await Role.findAll();
            res.json({
                message: 'Data roles found',
                data: roles || {}
            });
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    },
    createRole: async (req, res) => {
        const { name } = req.body;
        try {
            const schema = {
                name: 'string',
            };
            const validate = v.validate({
                name
            }, schema);
            if (validate.length) return res.status(400).json(validate);
            const role = await Role.create({
                name: name,
            });
            res.json({
                message: 'Role created',
                data: role
            });
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    }
}