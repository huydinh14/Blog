const Course = require('../models/Course');

class SiteController {
    //
    home(req, res) {
        Course.find({}, function (err, course) {
            if (!err) {
                res.json(course);
                return;
            }
            res.status(404).json({ error: 'Not Found' });
        });

        //res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
