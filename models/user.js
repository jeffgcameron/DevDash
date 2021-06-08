const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        default: "",
        required: false
      },
    name: { 
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    goals: {
        type: String,
        required: false
    },
    languages: {
        type: Array,
        required: false,
    },
    strengths: {
        type: Array,
        required: true,
    },
    weaknesses: {
        type: Array,
        required: false,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;