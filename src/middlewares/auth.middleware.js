const session = require("express-session");
const mysql_query = require("../models/mysql");

function authPanel(req, res, next) {
    const SESSION = req.session;
    if (!SESSION.type) return res.redirect("/panel/login");
    if (SESSION.type != "panel") return res.redirect("/panel/login");
    next();
}

function authPanelLogin(req, res, next) {
    const SESSION = req.session;
    if (SESSION.type) return res.redirect("/panel/home");
    next();
}

function authApi(req, res, next) {
    const SESSION = req.session;
    if (!SESSION.type) {
        if (SESSION.type != "api") {
            res.json({
                state: "error",
                error: "Not logged in",
            });
        }
    }
    next();
}

function authApiLogin(req, res, next) {
    const SESSION = req.session;
    if (SESSION.user == "api") {
        if (SESSION.type == "api") {
            res.json({
                state: "error",
                error: "Already logged in",
            });
        }
    }
    next();
}

module.exports = {
    authPanel,
    authPanelLogin,
    authApi,
    authApiLogin,
};
