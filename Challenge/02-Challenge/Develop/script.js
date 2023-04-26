// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

let numbers = ['0123456789'];
let spec = ['!@#$%^&*()_+<>?'];
let lowerCase = ['abcdefghijklmnopqurstuvwxyz',];
let upperCase = ['ABCDEFGHIJKLMNOPQURSTUVWXYZ',];
function generatePassword() {
  let passwordLength = parseInt(prompt("How many character values between 8 and 128"));
  if (passwordLength > 7 && passwordLength < 129) {
    console.log('Great!')
    } else {
      alert('please select a number between 8 and 128')
      return ''      
    }

   let hasUp = confirm("Would you like UPPERCASE letters in your password?");
   let hasLow = confirm("Would you like lowercase letters in your password?");
   let hasNum = confirm("Would you like numbers in your password?");
   let hasSpec = confirm("Would you like special characters in your password?");

  let selection = [];
  let result = '';

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
 console.log(hasLow, hasNum, hasSpec, hasUp, length);
  return result;  
}
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
