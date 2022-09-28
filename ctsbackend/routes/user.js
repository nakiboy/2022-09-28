const express = require("express");

const router = express.Router();
const {
  createUser,
  userSignIn,
  createProduct,
} = require("../controllers/user");
const { isAuth } = require("../middlewares/auth");
const {
  validateUserSignUp,
  userVlidation,
  validateUserSignIn,
  validateProductCreate,
} = require("../middlewares/validation/user");

router.post("/create-user", validateUserSignUp, userVlidation, createUser);
router.post("/sign-in", validateUserSignIn, userVlidation, userSignIn);
router.post("/create-post", isAuth, (req, res) => {
  // create our post
  res.send("welcome you are in secret route");
});
router.post("/create-product", validateProductCreate, createProduct);
module.exports = router;
