const { Op } = require('sequelize');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { Film, User, Genre, Actor, Showtime, Rating } = require('../../models');

module.exports = {
    createRating: async (req, res) => {
        const { rate } = req.body;
        const { random } = req.params;
        try {
            const film = await Film.findOne({
                where: {
                    random: random
                }
            });
            await Rating.create({
                rate,
                film_id: film.id,
                user_id: userId,
                random: uuidv4()
            });
            const res_rating = await Rating.findAll({
                where: {
                    film_id: film.id
                }
            })
            const avg = res_rating.reduce((acc, cur) => acc + cur.rate, 0) / res_rating.length;
            await Film.update({
                rating: avg
            }, {
                where: {
                    id: film.id
                }
            });
            // console.log(avg);
            res.status(200).json({
                message: 'Rating successfully created',
                data: {
                    id: film.id,
                    rating: avg
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}