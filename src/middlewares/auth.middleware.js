const session = require("express-session");
const mysql_query = require("../models/mysql");

function authView(req, res, next) {
    mysql_query("SELECT * FROM users")
        .then((results) => {
            console.log(results);
        })
        .catch((res) => {
            console.log(res);
        });

    res.send("authView");
    // next();
}

module.exports = {
    authView,
};
