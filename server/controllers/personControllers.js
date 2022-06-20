const Person = require("../models/personModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a new Person (def role: user)
//@params POST/api/person/Register
//@access PUBLIC
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, address, titre, fichier } = req.body;
    const existEmail = await Person.findOne({ email });
    if (existEmail)
      return res.status(400).json({ msg: "Email already exist." });
    const hashedPw = await bcrypt.hash(password, 10);
    console.log(hashedPw);
    const newUser = await Person.create({
      name,
      email,
      password: hashedPw,
      phone,
      address,
      titre,
      fichier,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log(token);
    res.json({ newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing went wrong!" });
  }
};
//@desc Person Login
//@params POST/api/person/login
//@access PRIVATE
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await Person.findOne({ email });
    if (!existUser)
      return res.status(400).json({ msg: "You should register first." });
    const checkPw = await bcrypt.compare(password, existUser.password);
    if (!checkPw)
      return res.status(400).json({ msg: "Wrong password,Try again." });
    const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ existUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing went wrong!" });
  }
};

exports.getPersonData = async (req, res) => {
  try {
    const personInfo = await Person.findById(req.personId);
    res.json(personInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing went wrong!" });
  }
};
