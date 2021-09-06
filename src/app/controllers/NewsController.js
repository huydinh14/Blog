class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('Kim Bitch');
    }
}

module.exports = new NewsController();
