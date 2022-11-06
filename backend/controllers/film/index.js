const Validator = require('fastest-validator');
const { Film, Rating, Genre } = require('../../models');

const v = new Validator();

module.exports = {
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

        console.log(req.id);

        const durasi = req.body.duration + ' minutes';

        try {
            const film = await Film.create({
                title,
                price,
                description,
                duration: durasi,
                genre_id,
                image: req.file.path,
                showtimes,
                release_date,
                expire_date,
                user_id: req.id,
            });
            console.log(film);
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
    }
}