const Person = require("../models/personModel");

// @desc get personList (Find all in Database(Find))
// @path GET/api/usersList
// @access ADMIN
exports.getUsersList = async (req, res) => {
    try {
      const UsersList = await Person.find();
      res.status(201).json(UsersList);
    } catch (error) {
      res.status(500).json({ msg: "something went wrong" });
    }
  };
  
  // @desc get user by ID
  // @path GET/api/user
  // @access ADMIN
  
  exports.getUserById = async (req, res) => {
    try {
      const User = await Person.findById(req.params.userId);
      res.json(User);
    } catch (error) {
      res.status(500).json({ msg: "something went wrong" });
    }
  };
  
  //@desc update a User by ID
  //@path PUT /api/user/:userId
  //@access PRIVATE-admin
  exports.updateUser = async (req, res) => {
    try {
      await Person.findByIdAndUpdate(
        req.params.userId,
        { ...req.body },
        { new: true }
      );
      res.status(200).json({ msg: "User updated" });
    } catch (error) {
      res.status(500).json({ msg: "something went wrong" });
    }
  };