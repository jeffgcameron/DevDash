const mongoose = require("mongoose");
const db = require("../models");

//need to update "mongodb://localhost/reactcms"
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const userSeed = [
    {
        thumbnail: "",
        name: "Micheal Scott",
        email: "micheal@paper.com",
        bio: "Regional Manager of the Scranton branch of Dunder Miflin. Comedic genious. World's best boss",
        goals: "My goal as a developer is to create an app to store all the dundy winners",
        languages: ["html"],
        strengths: ["Frontend Development", "Frontend Styling"],
        weaknesses: "Holly"
    },
    {
        thumbnail: "",
        name: "Dwight Schrute",
        email: "dwight@paper.com",
        bio: "Assistant to Regional Manager. Beet farmer. Volunteer firefighter. Martial arts expert",
        goals: "Become the best paper salesman in the state of Pennsylvania ",
        languages: ["node", "mongoose", "mySQL"],
        strengths: ["Backend Development", "Data/Databases"],
        weaknesses: "Nothing"
    },
    {
        thumbnail: "",
        name: "Jim Halpert",
        email: "jim@paper.com",
        bio: "Father of Cece and wife to Pam. Big Tuna",
        goals: "Balance of work and family time, while able to live comfortably",
        languages: ["html", "css", "javascript", "react"],
        strengths: ["Cloud Computing"],
        weaknesses: "Easily distracted by the receptionist"
    },
    {
        thumbnail: "",
        name: "Andy Bernard",
        email: "andy@paper.com",
        bio: "Cornell grad. Acapella member. Anger management graduate",
        goals: "Impress my father by creating an app that make me a lot of money so i can focus on my passion for singing",
        languages: ["html", "css", "javascript"],
        strengths: ["Data/Databases", "Cloud Computing"],
        weaknesses: "Living up to expectations"
    },
    {
        thumbnail: "",
        name: "Kevin Malone",
        email: "kevin@paper.com",
        bio: "I am Kevin. Chili champion",
        goals: "learn teh basicas of coding",
        languages: ["html"],
        strengths: ["Frontend Development"],
        weaknesses: "Althletics"
    },
    {
        thumbnail: "",
        name: "Toby Flederson",
        email: "toby@paper.com",
        bio: "Head of HR. Love speding time with my daughter. Divorced",
        goals: "move to Costa Rica to live out my dreams",
        languages: ["javascript"],
        strengths: ["Frontend Development", "Data/Databases"],
        weaknesses: "Standing up for myself"
    },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });