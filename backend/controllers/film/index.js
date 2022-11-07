const Validator = require('fastest-validator');
const { Op } = require('sequelize');
const fs = require('fs');
const { Film, Rating, Genre } = require('../../models');

const v = new Validator();

module.exports = {
    getFilms: async (req, res) => {
        try {
            if (req.body.title) {
                const films = await Film.findAll({
                    where: {
                        title: {
                            [Op.like]: `%${req.body.title}%`
                        }
                    },
                    include: [
                        {
                            model: Genre,
                            as: 'genres',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }
                        }
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']

                    }
                });
                console.log(films);
                res.send({
                    status: 'success',
                    message: 'List of films',
                    data: {
                        films
                    }
                });
            }
            const data = await Film.findAll({
                include: [
                    {
                        model: Genre,
                        as: 'genres',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    }
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
            console.log(data);

            res.status(200).send({
                status: 'success',
                data: data
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                status: 'error',
                message: 'Server Error'
            });
        }
    },
    createFilm: async (req, res) => {
        const { title, price, description, duration, genre_id, image, showtimes, release_date, expire_date } = req.body;
        // const schema = {
        //     title: 'string|empty:false',
        //     price: 'number|empty:false',
        //     description: 'string|empty:false',
        //     duration: 'number|empty:false',
        //     genre_id: 'number|empty:false',
        //     showtimes: 'string|empty:false',
        //     release_date: 'date|empty:false',
        //     expire_date: 'date|empty:false',
        // };

        // console.log(req.file);

        // const validate = v.validate(req.body, schema);

        // if (validate.length) {
        //     return res.status(400).json({
        //         status: 'error',
        //         message: validate,
        //     });
        // }

        const durasi = req.body.duration + ' minutes';

        // console.log(req.file);

        try {
            const film = await Film.create({
                title,
                price,
                description,
                duration: durasi,
                genre_id,
                image: req.file.filename,
                showtimes,
                release_date,
                expire_date,
                user_id: req.id,
            });
            // console.log(film);
            // get data film dan genre data
            const data = await Film.findOne({
                where: {
                    id: film.dataValues.id,
                },
                include: {
                    model: Genre,
                    as: 'genres',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            });

            console.log(data);

            res.status(201).json({
                status: 'success',
                data: {
                    film,
                },
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    },
    readImage: async (req, res) => {
        const { id } = req.params;
        try {
            const film = await Film.findOne({
                where: {
                    id: id,
                },
            });

            if (!film) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Film not found',
                });
            }

            let path = film.image;
            path = path.split('\\').join('/');

            fs.readFile(path, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        status: 'error',
                        message: err.message,
                    });
                }
                
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
}