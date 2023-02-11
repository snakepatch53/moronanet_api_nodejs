const router = require("express").Router();
const { viewHomeController, viewLoginController } = require("../controllers/views.controller");
const { authPanelLogin, authPanel } = require("../middlewares/auth.middleware");

router.get("/", authPanelLogin, viewLoginController);
router.get("/panel", authPanelLogin, viewLoginController);
router.get("/panel/login", authPanelLogin, viewLoginController);
router.get("/panel/home", authPanel, viewHomeController);

// module.exports = function (app) {
// };

module.exports = router;
