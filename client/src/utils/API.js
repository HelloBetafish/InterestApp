import axios from "axios";

export default
{
	//function 1
	getUsers: function()
	{
		return axios.get("/api/users");
	}





}