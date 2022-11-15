const { Op, where } = require('sequelize');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { Film, Room, Showtime, Default_Room, Chair, Default_Chair, Transaction } = require('../../models');

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
            const default_rooms = await Default_Room.findAll({
                where: {
                    film_id: {
                        [Op.in]: showtimes.map(showtime => showtime.film_id)
                    }
                },
                include: [
                    {
                        model: Film,
                        as: 'film',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: Showtime,
                        as: 'showtime',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: Default_Chair,
                        as: 'default_chair',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    }
                ],
            });
            // const default_chairs = await Default_Chair.findAll({
            //     where: {
            //         id: {
            //             [Op.in]: default_rooms.map(default_room => default_room.def_chair_id)
            //         }
            //     }
            // });
            const rooms = await Room.findAll({
                where: {
                    id: {
                        [Op.in]: default_rooms.map(default_room => default_room.default_chair.room_id)
                    }
                }
            });
            const default_chair = await Default_Chair.findAll({
                where: {
                    id: {
                        [Op.in]: default_rooms.map(default_room => default_room.def_chair_id)
                    }
                }
            });
            const chairs = await Chair.findAll({
                where: {
                    id: {
                        [Op.in]: default_rooms.map(default_room => default_room.default_chair.chair_id)
                    }
                }
            });
            res.json({
                message: 'Film successfully retrieved',
                data: {
                    showtimes,
                    rooms,
                    chairs,
                    default_rooms
                }
            })
        }catch (error) {
            res.status(404).json({
                message: error.message
            });
            console.log(error);
        }
    },
    getDetailByShowtimeAndRoomId: async (req, res) => {
        const { showtime_id, room_id, random } = req.params;
        try {
            const film = await Film.findOne({
                where: {
                    random
                },
            });
            const default_chairs = await Default_Chair.findAll({
                where: {
                    room_id
                },
            });
            // console.log(default_chairs);
            // default_chairs.forEach(async default_chair => {
            //     const chair = await Chair.findOne({
            //         where: {
            //             id: default_chair.chair_id
            //         }
            //     });
            //     const default_room = await Default_Room.findOne({
            //         where: {
            //             def_chair_id: default_chair.id,
            //             film_id: film.id,
            //             showtime_id
            //         }
            //     });
            //     console.log(default_room); 
            // });
            const default_room = await Default_Room.findAll({
                where: {
                    def_chair_id: {
                        [Op.in]: default_chairs.map(default_chair => default_chair.id)
                    },
                    film_id: film.id,
                    showtime_id
                },
                include: [
                    {
                        model: Showtime,
                        as: 'showtime',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: Default_Chair,
                        as: 'default_chair',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        include: [
                            {
                                model: Chair,
                                as: 'chair',
                                attributes: {
                                    exclude: ['createdAt', 'updatedAt']
                                }
                            },
                            {
                                model: Room,
                                as: 'room',
                                attributes: {
                                    exclude: ['createdAt', 'updatedAt']
                                }
                            }
                        ]
                    }
                ],
            });
            // console.log(default_room);
            // console.log(res);
            // const default_chairs = await Default_Chair.findAll({
            //     where: {
            //         room_id: rooms.id
            //     }
            // });
            // const chairs = await Chair.findAll({
            //     where: {
            //         id: {
            //             [Op.in]: default_chairs.map(default_chair => default_chair.chair_id)
            //         }
            //     }
            // });
            res.json({
                message: 'Film successfully retrieved',
                data: {
                    // chairs,
                    default_room
                }
            })
        }catch(error) {
            res.status(404).json({
                message: error.message
            });
            console.log(error);
        }
    },
    createTransaction: async (req, res) => {
        const { showtime_id, chair_id, room_id } = req.body;
        const { random } = req.params;
        try {
            const film = await Film.findOne({
                where: {
                    random
                },
            });
            // console.log(film);
            // console.log(chair_id);
            // chair_id.map((chair) => {
            //     console.log(chair);
            // })

            const default_chair = await Default_Chair.findAll({
                where: {
                    chair_id: {
                        [Op.in]: chair_id.map(chair => chair)
                    },
                    room_id: room_id
                }
            });
            // console.log(default_chair);
            const default_room = await Default_Room.findAll({
                where: {
                    film_id: film.id,
                    showtime_id,
                    def_chair_id: {
                        [Op.in]: default_chair.map(default_chair => default_chair.id)
                    },
                    booking: false
                }
            });
            if (default_room.length !== 0) {
                default_room.map(async (def_room) => {
                    await Default_Room.update(
                        { booking: true },
                        { where: { id: def_room.id } }
                    );
                });
                // const equity = default_room.length;
                // const total = equity * film.price;
                // console.log(default_room.length);
                // console.log(chair_id.length * film.price);
                const transaction = await Transaction.bulkCreate(default_room.map((def_room) => ({
                    random: uuidv4(),
                    user_id: userId,
                    def_room_id: def_room.id,
                    equity: default_room.length,
                    total: film.price
                })))
                res.json({
                    message: 'Transaction successfully created',
                    data: transaction,
                    total: film.price * default_room.length
                })
            } else {
                res.status(400).json({
                    message: 'Chair already booked'
                })
            }
        }catch(error) {
            res.status(404).json({
                message: error.message
            });
            console.log(error);
        }
    }
}