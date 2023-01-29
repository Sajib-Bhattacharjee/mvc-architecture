const express = require("express");
const { getAdmin, newAdmin } = require("../controllers/admin.controller");
const router = express.Router();

router.get("/admin", getAdmin);
router.post("/admin", newAdmin);

module.exports = router;
