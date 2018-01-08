import axios from "axios";

export default
{
	//Login: function 1
	getUsers: function()
	{
		return axios.get("/api/users");
	},

	//Find user inside user DB by passing in (id) parameter.
	getUser: function(id) 
  	{
    	return axios.get("/api/signin/" + id);
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


    //Profile: Get id that stored in collection (signins)'s field IdOfSignUser 
    getIdOfLoggedInUser: function()
    {
    	return axios.get("/api/signin");
    },

    //adds the idea field inside (user) collection
    addField: function(id)
    {
    	return axios.get("/api/idea/" + id);
    },

    // Saves a user to the database
  	saveIdea: function(id, ideaData) 
  	{

    	return axios.post("/api/idea/" + id, ideaData);
  	},


    
    // For Filestack API
    uploadPhoto: function()
    {

    }



}