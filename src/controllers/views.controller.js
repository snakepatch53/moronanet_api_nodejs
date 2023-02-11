function viewHomeController(req, res) {
    console.log(req.session);
    res.render("home", {
        title: "Home",
        user: req.user,
    });
}

function viewLoginController(req, res) {
    res.render("login", {
        title: "Login",
    });
}

module.exports = {
    viewHomeController,
    viewLoginController,
};
