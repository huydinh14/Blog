const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-Override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/public')));

// Connect to DB
db.connect();
// HTTP logger
app.use(morgan('combined'));
app.use(methodOverride('_method')); // Override POST TO PUT
app.use(express.urlencoded({ extended: true })); // import file JSON to courses.store
// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
