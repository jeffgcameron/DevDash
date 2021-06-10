const express = require("express");
const session = require('express-session');
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const routes = require("./routes");
// const app = express();
const PORT = process.env.PORT || 3001;

const Store = require('express-session').Store;
// const MongooseStore = require('mongoose-express-session')(Store);

//app = express()

// app.use(require('express-session')({
//   secret: 'keyboard cat',
//   resave: false,
//   rolling: false,
//   saveUninitialized: true,
//   store: new MongooseStore({
//       /* configuration */
//   })
// }));

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
 
};

app.use(session(sess))




// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//app.use(routes);
app.use("/api", apiRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/devdashDB",
{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
