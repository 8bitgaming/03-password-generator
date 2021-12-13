// Assignment code here

const lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const specialCharacters = ["!","$", "%", "?", "*", "@"]
const numbersList = ["0", "1","2","3","4","5","6","7","8","9"]
let approvedList = []
let globalPassword = ''


//establish desired length of password
const length = () => {
  let userInput = 0
  while (userInput < 8 || userInput > 128 ) {
  userInput = window.prompt("Enter a password length between 8 and 128 characters.")
  }
  return userInput
}

//build the array with selected character type and add at least of of that character to the password string
const arrayBuilder = (type, array) => {
  let userInput = window.prompt(`Yes/No - include ${type}?`).toLowerCase()
  switch (userInput) {
    case "yes":
    case "y":
      //adding at least one of the character type selected
      globalPassword = globalPassword + array[randomNum(array.length)]
      //creating the list of all potential characters
      approvedList = approvedList.concat(array)
      break;
    case "no":
    case "n":
      break;
    default:
      window.alert("Enter \"Yes\" or \"No\".")
      arrayBuilder(type, array)
  }
}

//utility function to generate random numbers
const randomNum = (num) => {
  return Math.floor(Math.random() * num)
}

const generatePassword = () => {
  
  //get password length
  const pwLength = length()
  
  //include lower case?
  arrayBuilder("lower case characters", lowerCharacters)
 
  //include upper case?
  arrayBuilder("upper case characters", upperCharacters)
 
  //include numbers?
  arrayBuilder("numbers", numbersList)

  //include special characters?
  arrayBuilder("special characters", specialCharacters)

  //confirm approved list is not empty - if empty - alert and restart
 if (approvedList.length > 0) {
  //generate string based on input values
     for (let i = globalPassword.length; i < pwLength; i++){
    //select random from approvedList array
    globalPassword = globalPassword + approvedList[randomNum(approvedList.length)]
  }
} else {
  window.alert("You need to select at least one character type!")
  generatePassword()
}
  
  return globalPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  //clear password and array so another can be generated without refreshing the page
  globalPassword = ''
  approvedList = []
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
