const { check, validationResult } = require("express-validator");

exports.validateUserSignUp = [
  check("fullname")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString()
    .withMessage("Must be a valid name!")
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be wthin 3 to 20 character!"),
  check("email").normalizeEmail().isEmail().withMessage("Invalid email!"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password is empty!")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 3 to 20 characters long!"),
  check("confirmPassword")
    .trim()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Both password must be same!");
      }
      return true;
    }),
];

exports.userVlidation = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result[0].msg;
  res.json({ success: false, message: error });
};

exports.validateUserSignIn = [
  check("email").trim().isEmail().withMessage("email / password is required"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("email / password is required!"),
];

exports.validateProductCreate = [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString(),

  check("code")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString(),

  check("quantity")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString(),

  check("price")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString(),

  check("date")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString(),

  check("register")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString(),

  check("account")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString(),

  check("owner")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString(),
];
