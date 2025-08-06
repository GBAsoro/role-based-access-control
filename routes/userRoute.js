const express = require("express");

const authorizeRole = require("../middlewears/roleMiddlewear");
const verifyToken = require("../middlewears/authMiddlewear");

const router = express.Router();

// Only admin can access this route
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
  res.json({
    message: "Welcome Admin",
  });
});

// Both admin and manager can access this route
router.get(
  "/manager",
  verifyToken,
  authorizeRole("admin", "manager"),
  (req, res) => {
    res.json({
      message: "Welcome Manager",
    });
  }
);

// All can access this route
router.get(
  "/user",
  verifyToken,
  authorizeRole("admin", "manager", "user"),
  (req, res) => {
    res.json({
      message: "Welcome User",
    });
  }
);

module.exports = router;
