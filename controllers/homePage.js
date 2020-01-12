const request = require('request');

module.exports = (req, res) => {

    request('http://google.com', function (err, res, body) {
        console.log(body);
    });
    res.render('index');
}