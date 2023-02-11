const router = require("express").Router();
const { getHome } = require("../controllers/views.controller");
const { authView } = require("../middlewares/auth.middleware");

router.get("/", authView, getHome);

module.exports = router;
