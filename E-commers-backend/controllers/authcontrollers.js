const bcrypt = require("bcryptjs");
const User = require("../models/Users");

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      user.isloggedIn = true;
      await user.save();
      res.json({ user, isuser: "true" });
    }
  } catch (err) {
    next(err);
  }
};

exports.postLogout = async (req, res, next) => {
  const { userid } = req.body;
  try {
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.isloggedIn = false;
    await user.save();
    res.json({ message: "User logged out successfully" });
  } catch (err) {
    next(err);
  }
};

exports.postSignup = async (req, res, next) => {
  const { name, email, password, address, phone, profileImage } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ iscreated: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      profileImage,
    });
    await user.save();
    res.status(201).json({ iscreated: true });
  } catch (err) {
    next(err);
  }
};
