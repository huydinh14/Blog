const Course = require('../models/Course');

class SiteController {
    //
    home(req, res, next) {
        // Course.find({}, function (err, course) {
        //     if (!err) {
        //         res.json(course);
        //         return;
        //     }
        //     next(err);
        // });

        Course.find({})
            .lean()
            .then((courses) => res.render('home', { courses }))
            .catch(next);

        //res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
