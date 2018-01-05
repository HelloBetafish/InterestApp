import axios from "axios";

export default
{
	//Login: function 1
	getUsers: function()
	{
		return axios.get("/api/users");
	},

	getUser: function(id) 
  	{
    	return axios.get("/api/users/" + id);
    },

    getPUser: function(id) 
  	{
    	return axios.get("/profile/" + id);
  	},

	// Saves a user to the database
  	saveUser: function(userData) 
  	{
    	return axios.post("/api/users", userData);
  	},


  	//Sets user online(updates fiedld online: true)
  	userOnline: function(id)
  	{

  		return axios.put("/api/users/" + id);

  	},

  	addSignUserId: function(id)
  	{
  		return axios.post("/api/users/", id);
  	

    },

    //Profile: Get id that stored in (signins) collection
    getIdOfLoggedInUser: function()
    {
    	return axios.get("/api/signin");
    },
    
    // For Filestack API

    uploadPhoto: function()
    {

    }



}