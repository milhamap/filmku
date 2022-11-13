const { v4: uuidv4 } = require('uuid');
const { Film, Room, Chair } = require('../../models');

module.exports = {
    getChairs: async (req, res) => {
        try {
            const chairs = await Chair.findAll();
            if(chairs.length) {
                res.status(200).json({
                    message: 'Chairs successfully retrieved',
                    data: chairs
                });
            } else {
                res.status(404).json({
                    message: 'Chairs not found'
                });
            }
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
            console.log(error);
        }
    },
    createChair: async (req, res) => {
        const { name, room_id } = req.body;
        try {
            const chair = await Chair.create({
                name,
                random: uuidv4(),
                room_id
            });
            if(chair) {
                res.status(200).json({
                    message: 'Chair successfully created',
                    data: chair
                });
            } else {
                res.status(404).json({
                    message: 'Chair not found'
                });
            }
        } catch (error) {
            res.status(404).json({
                message: error.message,
            });
        }
    }
}