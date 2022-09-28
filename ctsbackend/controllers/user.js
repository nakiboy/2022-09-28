const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Product = require("../models/product");

exports.createUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  const isNewUser = await User.isThisEmailInUse(email);
  if (!isNewUser)
    return res.json({
      success: false,
      message: "This email is already in use, try sign-in",
    });
  const user = await User({
    fullname,
    email,
    password,
  });
  await user.save();
  res.json(user);
};

exports.userSignIn = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  const user = await User.findOne({ email });

  if (!user)
    return res.json({
      success: false,
      message: "user not found, with the given email!",
    });

  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    return res.json({
      success: false,
      message: "email / password does not match!",
    });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ success: true, user, token });
};

exports.createProduct = async (req, res) => {
  const { name, code, quantity, price, date, register, account, owner } =
    req.body;
  product = await Product({
    name,
    code,
    quantity,
    price,
    date,
    register,
    account,
    owner,
  });
  await product.save();
  res.json(product);
};
