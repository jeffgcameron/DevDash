const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        default: ""
      },
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    goals: {
        type: String,
        required: true
    },
    languages: {
        type: Array,
        required: true,
    },
    strengths: {
        type: Array,
        required: true,
    },
    weaknesses: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;