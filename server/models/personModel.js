const mongoose = require("mongoose");
const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  titre: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    enum: ["Submitted", "Processed", "Accepted", "Rejected"],
    default: "Submitted",
  },
  fichier: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("person", personSchema);
