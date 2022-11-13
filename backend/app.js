require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var morgan = require('morgan');
const multer = require('multer');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var genresRouter = require('./routes/genres');
var rolesRouter = require('./routes/roles');
var filmsRouter = require('./routes/films');
var ratingsRouter = require('./routes/ratings');
var roomsRouter = require('./routes/rooms');
var chairsRouter = require('./routes/chairs');
var showtimesRouter = require('./routes/showtimes');
var transactionsRouter = require('./routes/transactions');

var app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/public/images/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' 
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

// const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(morgan('dev'));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', usersRouter);
app.use('/genres', genresRouter);
app.use('/roles', rolesRouter);
app.use('/films', filmsRouter);
app.use('/ratings', ratingsRouter);
app.use('/rooms', roomsRouter);
app.use('/chairs', chairsRouter);
app.use('/showtimes', showtimesRouter);
app.use('/transactions', transactionsRouter);

// app.listen(9000, () => console.log(`Server is running on http://localhost:${PORT}`));

module.exports = app;
