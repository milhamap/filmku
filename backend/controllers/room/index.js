const { Op } = require('sequelize');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { Film, Room, Default_Room, Chair, Default_Chair } = require('../../models');

module.exports = {
    getRooms: async (req, res) => {
        const { name } = req.query;
        try {
            if(name) {
                const rooms = await Room.findAll({
                    where: {
                        name: {
                            [Op.like]: `%${name}%`
                        }
                    }
                });
                if(rooms.length > 0) {
                    return res.status(200).json({
                        message: 'Success get rooms',
                        data: rooms
                    });
                }
            }
            const room = await Room.findAll();
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
            chairs.forEach(async chair => {
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
    }
}