const Validator = require('fastest-validator');
const { Genre } = require('../../models');

const v = new Validator();

module.exports = {
    getGenre: async (req, res) => {
        try {
            const { id } = req.params;
            const genre = await Genre.findOne({
                where: {
                    id: id
                }
            });
            res.json({
                message: 'Data genre found',
                data: genre || {}
            });
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    },
    getGenres: async (req, res) => {
        try {
            const { name } = req.body;
            if(name) {
                const genre = await Genre.findOne({
                    where: {
                        name: req.body.name
                    }
                });
                if(genre) {
                    res.json({
                        message: 'Genre found',
                        data: genre
                    });
                } else {
                    res.json({
                        message: 'Genre not found',
                        data: {}
                    });
                }
            }
            const genre = await Genre.findAll();
            res.json(genre || {});
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    },
    createGenre: async (req, res) => {
        try {
            const schema = {
                name: 'string',
            };
            const validate = v.validate(req.body, schema);
            if (validate.length) {
                return res.status(400).json(validate);
            }
            const genre = await Genre.create(req.body);
            return res.json(genre);
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    },
    updateGenre: async (req, res) => {
        try{
            const { id } = req.params;
            // res.send(id);
            let genre = await Genre.findByPk(id);
    
            const schema = {
                name: 'string|optional',
            };
    
            const validate = v.validate(req.body, schema);
            
            if (validate.length) {
                return res.status(400).json(validate);
            }
        
            if(!genre) {
                return res.json({
                    message: 'Genre not found',
                })
            }
        
            genre = await genre.update(req.body);
            res.json(genre);
        } catch (error){
            res.json({
                message: error.message
            });
        }
    },
    deleteGenre: async (req, res) => {
        try {
            const { id } = req.params;
    
            let genre = await Genre.findByPk(id);
    
            if(!genre) {
                return res.json({
                    message: 'Genre not found',
                })
            }
    
            await genre.destroy();
    
            res.json({
                message: 'Genre deleted',
            })
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    }
}