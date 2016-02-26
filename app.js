var CryptoJS = require("crypto-js");
var KEY = process.env.FITMAKER_SERVER_KEY;

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', KEY);

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), KEY);
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

console.log(plaintext);