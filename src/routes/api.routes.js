const router = require("express").Router();
const { apiPanelLoginController, apiPanelLogoutController } = require("../controllers/api.controller");
const { authApiLogin } = require("../middlewares/auth.middleware");

router.post("/api/panelLogin", apiPanelLoginController);
router.post("/api/panelLogout", apiPanelLogoutController);
// module.exports = function (app) {
//     // POST
// };

module.exports = router;
