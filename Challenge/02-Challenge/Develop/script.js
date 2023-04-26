// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

let numbers = ['0123456789'];
let special = ['!@#$%^&*()_+<>?'];
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

   let Upper = confirm("Would you like UPPERCASE letters in your password?");
   let Lower = confirm("Would you like lowercase letters in your password?");
   let Numbers = confirm("Would you like numbers in your password?");
   let Special = confirm("Would you like special characters in your password?");

  let selection = [];
  let result = '';

  if (Numbers === true) {
    selection = selection.concat(numbers)
  } if (Special === true) {
    selection = selection.concat(special)
  } if (Lower === true) {
    selection = selection.concat(lowerCase)
  } if (Upper === true) {
    selection = selection.concat(upperCase)
  }
   
  for (let i = 0; i < passwordLength; i++) {
       randomIn = (Math.floor(Math.random() * selection.length));
    randomChar = selection[randomIn] 
    result = result + randomChar
      }
 console.log(Lower, Numbers, Special, Upper, length);
  return result;  
}
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
