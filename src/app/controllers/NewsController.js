class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('Kim Bich');
    }
}

module.exports = new NewsController();
