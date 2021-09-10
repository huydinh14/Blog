const newsRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const courseRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;
