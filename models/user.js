const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // checkPassword(loginPw) {
    //   return bcrypt.compareSync(loginPw, this.password);
    // },
    thumbnail: {
      type: String,
      default: "",
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    goals: {
      type: String,
      required: false,
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
    },
  },
  {
    // hooks: {
    //   beforeCreate: async (newUserData) => {
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },
    //   beforeUpdate: async (updatedUserData) => {
    //     updatedUserData.password = await bcrypt.hash(
    //       updatedUserData.password,
    //       10
    //     );
    //     return updatedUserData;
    //   },
    // },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
