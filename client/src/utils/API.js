import axios from "axios";

export default
{
	//function 1
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

	// Saves a book to the database
  	saveUser: function(userData) 
  	{
    	return axios.post("/api/users", userData);
  	},


  	//Sets user online(updates fiedld online: true)
  	userOnline: function(id)
  	{

  		return axios.get("/api/users/" + id);
    },
    
    // For Filestack API

    uploadPhoto: function()
    {

    }


}