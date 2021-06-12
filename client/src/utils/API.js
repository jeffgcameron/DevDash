import axios from "axios";

//The getRecipes method retrieves recipes from the server
 //It accepts a "query" or term to search the recipe api for
 export default {
  getUsers: function(query) {
    return axios.get("/api/user", { params: { q: query } });
  },
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
};


