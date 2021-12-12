// Assignment code here

const lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const specialCharacters = ["!","$", "%", "?", "*", "@"]

const length = () => {
  let userInput = 0
  while (userInput < 8 || userInput > 128 ) {
  userInput = window.prompt("Enter a password length between 8 and 128 characters.")
  }
  return userInput
}

const lowerCase = () => {
  let userInput = window.prompt("Yes/No - include lower case letters?").toLowerCase()
  // userInput = userInput.toLowerCase()
  if (userInput === "yes") {
    return true
  } else if 
  (userInput === "no") { 
    return false
  } else { 
    window.alert("Enter \"Yes\" or \"No\".")
    lowerCase()
  }
}

const generatePassword = () => {
  
  //get password length
  const pwLength = length()
  console.log(pwLength)

  //include lower case?
  const pwLowerCase = lowerCase()
  console.log(pwLowerCase)

  return "Here is your password"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
