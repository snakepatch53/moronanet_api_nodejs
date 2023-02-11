function getHome(req, res) {
    res.render("login", {
        title: "Login",
        user: req.user,
    });
}

module.exports = {
    getHome,
};
