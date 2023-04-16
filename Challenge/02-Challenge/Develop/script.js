// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
const characters = (alpha, numbers, symbols);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    var length = 8,
        retVal = "";
    for (var i = 0, n = characters.length; i < length; ++i) {
        retVal += characters.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


 return passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
