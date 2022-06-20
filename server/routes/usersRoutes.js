const express = require("express");
const {
  getUsersList,
  getUserById,
  updateUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getUsersList);
router.get("/:userId", getUserById);
router.put("/:userId", updateUser);

module.exports = router;
