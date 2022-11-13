const { Op } = require('sequelize');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { Film, Room, Showtime } = require('../../models');

module.exports = {
    getDetail: async (req, res) => {
        const { random } = req.params;
        try {
            const film = await Film.findOne({
                where: {
                    random
                },
            });
            const showtimes = await Showtime.findAll({
                where: {
                    film_id: film.id
                },
            });
            const rooms = await Room.findAll({
                where: {
                    film_id: {
                        [Op.in]: showtimes.map(showtime => showtime.film_id)
                    }
                }
            });
            res.json({
                message: 'Film successfully retrieved',
                data: {
                    film,
                    showtimes,
                    rooms
                }
            })
        }catch (error) {
            res.status(404).json({
                message: error.message
            });
            console.log(error);
        }
    },
    createTransaction: async (req, res) => {
        const { showtime_id, chair_id, room_id } = req.body;
    }
}