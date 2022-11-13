const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken: async (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            roleId = user.roleId;
            userId = user.id;
            next();
        })
    },
    // isCustomer: async (req, res, next) => {
    //     const authHeader = req.headers['authorization'];
    //     const token = authHeader && authHeader.split(' ')[1];
    //     if (token == null) return res.sendStatus(401);
    //     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //         if (err) return res.sendStatus(403);
    //         if (user.roleId === 3)
    //             next();
    //         else
    //             return res.sendStatus(403);
    //     })
    // },
    // isSaler: async (req, res, next) => {
    //     const authHeader = req.headers['authorization'];
    //     const token = authHeader && authHeader.split(' ')[1];
    //     if (token == null) return res.sendStatus(401);
    //     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //         if (err) return res.sendStatus(403);
    //         if (user.roleId === 2)
    //             next();
    //         else
    //             return res.sendStatus(403);
    //     })
    // }
}