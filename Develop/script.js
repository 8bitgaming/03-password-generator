// Assignment code here

const lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const specialCharacters = ["!","$", "%", "?", "*", "@"]
const numbersList = ["0", "1","2","3","4","5","6","7","8","9"]
let approvedList = []

const length = () => {
  let userInput = 0
  while (userInput < 8 || userInput > 128 ) {
  userInput = window.prompt("Enter a password length between 8 and 128 characters.")
  }
  return userInput
}

const numbers = () => {
  let userInput = window.prompt("Yes/No - include numbers?").toLowerCase()

  switch (userInput) {
    case "yes":
    case "y":
      approvedList = approvedList.concat(numbersList)
      break;
    case "no":
    case "n":
      break;
    default:
      window.alert("Enter \"Yes\" or \"No\".")
      numbers()
  }

  // if (userInput === "yes" || userInput === "y" ) {
  //   approvedList = approvedList.concat(numbersList)
  //   return
  // } else if 
  // (userInput === "no" || userInput === "n") { 
  //   return
  // } else { 
  //   window.alert("Enter \"Yes\" or \"No\".")
  //   numbers()
  // }
}

const lowerCase = () => {
  let userInput = window.prompt("Yes/No - include lower case letters?").toLowerCase()
  if (userInput === "yes" || userInput === "y") {
    return true
  } else if 
  (userInput === "no" || userInput === "n") { 
    return false
  } else { 
    window.alert("Enter \"Yes\" or \"No\".")
    lowerCase()
  }
}

//utility function to generate random number between 0-9

const randomNum = () => {
  return Math.floor(Math.random() * 10)
}

const generatePassword = () => {
  
  //get password length
  const pwLength = length()
  console.log(pwLength)
 
  //include numbers?
  numbers()
  console.log(approvedList)

  //include lower case?
  const pwLowerCase = lowerCase()
  
  //include special characters?

  //check if approvedList array is empty - if yes alert and restart

  //generate string based on input values
  let password = ''
   for (let i = 0; i < pwLength; i++){
    //select random from approvedList array
    //how to make sure get at least one of each?
  }
  
  return password
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
