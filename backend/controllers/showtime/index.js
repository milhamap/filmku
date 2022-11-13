const { Op } = require('sequelize');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { Film, Room, Showtime } = require('../../models');

module.exports = {
    getShowtimeByFilm: async (req, res) => {
        const { random } = req.params;
        try {
            const film = await Film.findOne({
                where: {
                    random: random
                }
            })
            if(film) {
                const showtime = await Showtime.findAll({
                    where: {
                        film_id: film.id
                    }
                });
                res.status(200).json({
                    message: 'Success get showtime',
                    data: showtime
                });
            }
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
            console.log(error);
        }
    }
}