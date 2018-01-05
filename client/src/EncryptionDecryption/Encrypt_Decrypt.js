import CryptoJS from "crypto-js";

export default
{
	//function 1
	encrypt: function(plaintext)
	{
		   // Encrypt 
		   var ciphertext = CryptoJS.AES.encrypt(plaintext, 'secret key 123');
		   return ciphertext.toString();
	},

	decrypt: function(encryptedPass)
	{
		// Decrypt 
		var bytes  = CryptoJS.AES.decrypt(encryptedPass.toString(), 'secret key 123');
		var plaintext = bytes.toString(CryptoJS.enc.Utf8);

		return plaintext;
	}


}