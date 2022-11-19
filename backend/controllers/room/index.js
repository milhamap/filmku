const { Op } = require('sequelize');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { Film, Room, Default_Room, Chair, Default_Chair } = require('../../models');

module.exports = {
    getRooms: async (req, res) => {
        try {
            const room = await Room.findAll({
                include: [
                    {
                        model: Default_Chair,
                        as: 'default_chairs',
                        include: [
                            {
                                model: Chair,
                                as: 'chair'
                            }
                        ]
                    }
                ]
            })
            if(room.length) {
                res.status(200).json({
                    message: 'Room successfully retrieved',
                    data: room
                });
            } else {
                res.status(404).json({
                    message: 'Room not found'
                });
            }
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
            console.log(error);
        }
    },
    createRoom: async (req, res) => {
        const { name, chairs } = req.body;
        // console.log(name);
        try {
            let seat = chairs.split(', ');
            let room;
            room = await Room.findOne({
                where: {
                    name
                }
            });
            if(room == null) {
                room = await Room.create({
                    name,
                    random: uuidv4(),
                });
            }
            // console.log(room);
            seat.forEach(async chair => {
                // let name = chair;
                // console.log(chair)
                let search;
                search = await Chair.findOne({
                    where: {
                        name: chair
                    }
                });
                // console.log(search);
                // let chaire;
                if(search == null) {
                    search = await Chair.create({
                        name: chair,
                        random: uuidv4(),
                    });
                }
                // console.log(search);
                await Default_Chair.create({
                    room_id: room.id,
                    random: uuidv4(),
                    chair_id: search.id
                })
            });
            res.status(200).json({
                message: 'Room and Chair successfully created',
                data: room
            });
        } catch (error) {
            res.status(404).json({
                message: error.message,
            });
        }
    },
    updateRoom: async (req, res) => {
        const { name, chairs } = req.body;
        const { random } = req.params;
        try {
            let room;
            room = await Room.findOne({
                where: {
                    random
                }
            });
            if(room == null) {
                res.status(404).json({
                    message: 'Room not found'
                });
            } else {
                await Room.update({
                    name
                }, {
                    where: {
                        random
                    }
                });
                let seat = chairs.split(', ');
                seat.forEach(async chair => {
                    let search;
                    search = await Chair.findOne({
                        where: {
                            name: chair
                        }
                    });
                    if(search == null) {
                        search = await Chair.create({
                            name: chair,
                            random: uuidv4(),
                        });
                    }
                    const hasil = await Default_Chair.findOne({
                        where: {
                            room_id: room.id,
                            chair_id: search.id
                        }
                    });
                    if(hasil == null) {
                        await Default_Chair.create({
                            room_id: room.id,
                            random: uuidv4(),
                            chair_id: search.id
                        })
                    }
                });
                res.status(200).json({
                    message: 'Room successfully updated',
                    data: room
                });
            }
        } catch (error) {
            res.status(404).json({
                message: error.message,
            });
        }
    },
    getRoom: async (req, res) => {
        const { random } = req.params;
        try {
            const room = await Room.findOne({
                where: {
                    random
                },
                include: [
                    {
                        model: Default_Chair,
                        as: 'default_chairs',
                        include: [
                            {
                                model: Chair,
                                as: 'chair'
                            }
                        ]
                    }
                ]
            })
            if(room) {
                res.status(200).json({
                    message: 'Room successfully retrieved',
                    data: room
                });
            } else {
                res.status(404).json({
                    message: 'Room not found'
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