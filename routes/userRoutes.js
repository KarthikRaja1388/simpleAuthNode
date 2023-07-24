const express = require("express");

const {
  home,
  registerUser,
  updateUser,
  loginUser,
} = require("../controllers/userController.js");

const router = express.Router();

router.get("/", home);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
