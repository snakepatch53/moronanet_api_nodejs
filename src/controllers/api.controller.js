const mysql_query = require("../models/mysql");

function apiPanelLoginController(req, res) {
    // console.log(req.body);
    if (req.body.user && req.body.pass) {
        const user = req.body.user;
        const pass = req.body.pass;
        mysql_query(`SELECT * FROM users WHERE user_email = '${user}' AND user_pass = '${pass}'`)
            .then((result) => {
                if (result.length > 0) {
                    // req.session = result[0];
                    req.session.user_id = result[0].user_id;
                    req.session.user_name = result[0].user_name;
                    req.session.user_email = result[0].user_email;
                    req.session.type = "panel";
                    res.json({
                        state: "success",
                        message: "Logged in",
                        code: 200,
                        logged: true,
                    });
                } else {
                    res.json({
                        state: "error",
                        message: "Invalid credentials",
                        code: 401,
                        logged: false,
                    });
                }
            })
            .catch((err) => console.log(err));
    } else {
        res.json({
            state: "error",
            message: "Missing credentials",
            code: 400,
            logged: false,
        });
    }
}

function apiPanelLogoutController(req, res) {
    console.log("hola");
    req.session.destroy();
    res.json({
        state: "success",
        message: "Logged out",
        code: 200,
        logged: false,
    });
}

module.exports = {
    apiPanelLoginController,
    apiPanelLogoutController,
};
