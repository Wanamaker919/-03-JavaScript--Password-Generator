// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// all potential variable options
var numbers = ['0123456789'];
var spec = ['!@#$%^&*()_+<>?'];
var lowerCase = ['abcdefghijklmnopqurstuvwxyz',];
var upperCase = ['ABCDEFGHIJKLMNOPQURSTUVWXYZ',];
// We have to prompt the user with questions about which variables they want to include in their password.
function generatePassword() {
  var passwordLength = parseInt(prompt("How many character values between 8 and 128"));
  if (passwordLength > 7 && passwordLength < 129) {
    console.log('Great!')
    } else {
      alert('please select a number between 8 and 128')
      return ''      // needed this to return a string instead of undefined when the if statement was false
    }

// puts variables into the for loop

 var hasNum = confirm("Would you like numbers in your password?");
 var hasSpec = confirm("Would you like special characters in your password?");
 var hasLow = confirm("Would you like lowercase letters in your password?");
 var hasUp = confirm("Would you like UPPERCASE letters in your password?");
// selection will be all the arrays
  var selection = [];
  var result = '';
 //confirmation questions to concat with variables
  if (hasNum === true) {
    selection = selection.concat(numbers)
  } if (hasSpec === true) {
    selection = selection.concat(spec)
  } if (hasLow === true) {
    selection = selection.concat(lowerCase)
  } if (hasUp === true) {
    selection = selection.concat(upperCase)
  }
   
  for (let i = 0; i < passwordLength; i++) {
       randomIn = (Math.floor(Math.random() * selection.length));
    randomChar = selection[randomIn] 
    result = result + randomChar
      }
// create a for loop for the length of the password. 
 console.log(hasLow, hasNum, hasSpec, hasUp, length);
  return result;  
}
// need to make if statements telling me whether or not to use certain arrays- if true selections go into the selection array to be selected
// the math.floor(math.random) has to be run after all variables are selected.
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
