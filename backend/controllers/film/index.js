const Validator = require('fastest-validator');
const { Op } = require('sequelize');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { Film, User, Genre, Actor, Showtime, Rating, Default_Chair, Default_Room, Room } = require('../../models');

const v = new Validator();

module.exports = {
    getFilm: async (req, res) => {
        try {
            const { random } = req.params;
            let film;
            const films = await Film.findOne({
                where: {
                    random: random
                },
            });
            // console.log(films);
            const rating = await Rating.findOne({
                where: {
                    film_id: films.id
                },
                attributes: [
                    [Rating.sequelize.fn('AVG', Rating.sequelize.col('rate')), 'rating']
                ]
            });
            // console.log(rating.dataValues.rating);
            if(rating.dataValues.rating === null) {
                film = await Film.findOne({
                    where: {
                        id: films.id,
                    },
                    include: [
                        {
                            model: Genre,
                            as: 'genres',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt'],
                            },
                        },
                        {
                            model: User,
                            as: 'users',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'id', 'password', 'email', 'role_id', 'refreshToken', 'phone'],
                            },
                        },
                        {
                            model: Actor,
                            as: 'actors',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'id'],
                            },
                        },
                        {
                            model: Showtime,
                            as: 'showtimes',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'id', 'film_id'],
                            },
                        }
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'genre_id', 'user_id'],
                    },
                });
                if (!film) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'film not found',
                    });
                }
    
                res.send({
                    status: 'success',
                    data: {
                        film,
                        rating: 0,
                    }
                });
            } else {
                film = await Film.findOne({
                    where: {
                        id: films.id,
                    },
                    include: [
                        {
                            model: Genre,
                            as: 'genres',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt'],
                            },
                        },
                        {
                            model: User,
                            as: 'users',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'id', 'password', 'email', 'role_id', 'refreshToken', 'phone'],
                            },
                        },
                        {
                            model: Actor,
                            as: 'actors',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'id', 'film_id'],
                            },
                        },
                        {
                            model: Rating,
                            as: 'ratings',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'id', 'film_id'],
                            },
                        },
                        {
                            model: Showtime,
                            as: 'showtimes',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'id', 'film_id'],
                            },
                        }
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'genre_id', 'user_id'],
                    },
                });
                if (!film) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'film not found',
                    });
                }
    
                res.send({
                    status: 'success',
                    data: {
                        film,
                        rating: rating.dataValues.rating,
                    }
                });
            }

        } catch (error) {
            console.log(error);
            res.status(500).send({
                status: 'error',
                message: 'server error',
            });
        }
    },
    getFilmByRating: async (req, res) => {
        try {
            const films = await Film.findAll({
                limit: 2,
                order: [
                    ['rating', 'DESC']
                ],
                group: ['id']
            })
            // console.log(films);
            res.json({
                status: 'success',
                data: films
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                status: 'error',
                message: 'server error',
            });
        }
    },
    getFilmsComingSoon: async (req, res) => {
        try {
            const {title} = req.query;
            if(title) {
                const films = await Film.findAll({
                    where: {
                        title: {
                            [Op.like]: `%${title}%`
                        },
                        release_date: {
                            [Op.gte]: new Date()
                        }
                    },
                    include: [
                        {
                            model: Genre,
                            as: 'genres',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt'],
                            },
                        },
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                });
                if(!films) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'film not found',
                    });
                }
                res.send({
                    status: 'success',
                    data: films
                });
            }
            const data = await Film.findAll({
                where: {
                    release_date: {
                        [Op.gte]: new Date()
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
    getFilms: async (req, res) => {
        try {
            const {title} = req.query;
            if(title) {
                const films = await Film.findAll({
                    where: {
                        title: {
                            [Op.like]: `%${title}%`
                        }
                    },
                    include: [
                        {
                            model: Genre,
                            as: 'genres',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt'],
                            },
                        },
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                });
                if(!films) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'film not found',
                    });
                }
                res.send({
                    status: 'success',
                    data: films
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
    getFilmsOnGoing: async (req, res) => {
        try {
            const {title} = req.query;
            console.log(new Date());
            if(title) {
                const films = await Film.findAll({
                    where: {
                        title: {
                            [Op.like]: `%${title}%`
                        },
                        // release_date sedang berlangsung
                        release_date: {
                            [Op.lte]: new Date()
                        }
                    },
                    include: [
                        {
                            model: Genre,
                            as: 'genres',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt'],
                            },
                        },
                    ],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                });
                if(!films) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'film not found',
                    });
                }
                res.send({
                    status: 'success',
                    data: films
                });
            }
            const data = await Film.findAll({
                where: {
                    release_date: {
                        [Op.lte]: new Date()
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
        const { title, price, description, duration, genre_id, address, showtimes, rooms, release_date, expire_date, actors } = req.body;
        // const schema = {
        //     title: 'string|empty:false',
        //     price: 'number|empty:false',
        //     description: 'string|empty:false',
        //     duration: 'number|empty:false',
        //     genre_id: 'number|empty:false',
        //     // showtimes: 'array|items:time|empty:false',
        //     actors: 'array|items:string|empty:false',
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
        const durasi = duration + ' Minutes';
        try {
            const film = await Film.create({
                title,
                price,
                description,
                duration: durasi,
                genre_id,
                address,
                image: req.file.filename,
                release_date,
                expire_date,
                user_id: userId,
                random: uuidv4(),
            });
            // let find;
            // actors.forEach(async actor => {
            //     find = await Actor.findOne({
            //         where: {
            //             [Op.lte]: `%${actor}%`
            //         }
            //     });
            //     console.log(find);
                // if(find == null) {
                //     find = await Actor.create({
                //         name: actor,
                //     });
                // }
                // console.log(find);
                // await Default_Actor.create({
                //     film_id: film.id,
                //     actor_id: find.id,
                //     random: uuidv4()
                // });
            // });
            // console.log(result);
            // result = await Promise.all(search);
            // console.log(result);
            // akses nilai search
            // let findRoom;
            // rooms.forEach(async room => {
            //     findRoom = await Room.findOne({
            //         where: {
            //             [Op.lte]: `%${room}%`
            //         }
            //     });
            //     await Default_Room.create(search.map(item => ({
            //         film_id: film.id,
            //         room_id: findRoom.id,
            //         showtime_id: item.id,
            //         random: uuidv4()
            //     })));
            // });
            let result_actor, result_showtime;
            if(actors.length >= 0 || showtimes.length >= 0) {
                result_actor = await Actor.bulkCreate(actors.map((actor) => ({
                    name: actor,
                    film_id: film.id,
                    random: uuidv4(),
                })));
                result_showtime = await Showtime.bulkCreate(showtimes.map((showtime) => ({
                    showtimes: showtime,
                    film_id: film.id,
                    random: uuidv4(),
                })));
            }
            const res_time = await Showtime.findAll({
                where: {
                    film_id: film.id
                }
            });
            console.log(res_time);
            rooms.forEach(async room => {
                const res = await Room.findOne({
                    where: {
                        name: room
                    }
                });
                let res_chair = await Default_Chair.findAll({
                    where: {
                        room_id: res.id
                    }
                });
                for(let i = 0; i < res_chair.length; i++) {
                    for(let j = 0; j < res_time.length; j++) {
                        await Default_Room.create({
                            film_id: film.id,
                            // room_id: res.id,
                            showtime_id: res_time[j].id,
                            def_chair_id: res_chair[i].id,
                            random: uuidv4()
                        });
                    }
                } 
                // await Default_Room.bulkCreate(res_time.map(item => ({
                //     film_id: film.id,
                //     room_id: res.id,
                //     showtime_id: item.id,
                //     random: uuidv4()
                // })));
            }); 
            // const data = await Film.findOne({
            //     where: {
            //         id: film.dataValues.id,
            //     },
            //     include: {
            //         model: Genre,
            //         as: 'genres',
            //         attributes: {
            //             exclude: ['createdAt', 'updatedAt'],
            //         },
            //     },
            //     attributes: {
            //         exclude: ['createdAt', 'updatedAt'],
            //     },
            // });

            // console.log(data);

            res.status(201).json({
                status: 'success',
                data: {
                    film,
                    result_actor,
                    result_showtime,
                }
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