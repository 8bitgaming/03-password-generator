// Assignment code here

const lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const specialCharacters = ["!","$", "%", "?", "*", "@"]
const numbersList = ["0", "1","2","3","4","5","6","7","8","9"]
let approvedList = []
let password = ''


//establish desired length of password
const length = () => {
  let userInput = 0
  while (userInput < 8 || userInput > 128 ) {
  userInput = window.prompt("Enter a password length between 8 and 128 characters.")
  }
  return userInput
}

//confirm numbers are part of password
const numbers = () => {
  let userInput = window.prompt("Yes/No - include numbers?").toLowerCase()
  switch (userInput) {
    case "yes":
    case "y":
      //adding at least one random number
      password = password + numbersList[randomNum(numbersList.length)]
      //creating the list of all potential characters
      approvedList = approvedList.concat(numbersList)
      break;
    case "no":
    case "n":
      break;
    default:
      window.alert("Enter \"Yes\" or \"No\".")
      numbers()
  }
}

//confirm lower case letters are included
const lowerCase = () => {
  let userInput = window.prompt("Yes/No - include lower case letters?").toLowerCase()
  switch (userInput) {
    case "yes":
    case "y":
      //adding at least one random lower case letter
      password = password + lowerCharacters[randomNum(lowerCharacters.length)]
      //creating the list of all potential characters
      approvedList = approvedList.concat(lowerCharacters)
      break;
    case "no":
    case "n":
      break;
    default:
      window.alert("Enter \"Yes\" or \"No\".")
      lowerCase()
  }
}

// confirm upper case letters are included
const upperCase = () => {
  let userInput = window.prompt("Yes/No - include upper case letters?").toLowerCase()
  switch (userInput) {
    case "yes":
    case "y":
      //adding at least one random upper case letter
      password = password + upperCharacters[randomNum(upperCharacters.length)]
      //creating the list of all potential characters
      approvedList = approvedList.concat(upperCharacters)
      break;
    case "no":
    case "n":
      break;
    default:
      window.alert("Enter \"Yes\" or \"No\".")
      upperCase()
  }
}

//confirm special characters are included
const special = () => {
  let userInput = window.prompt("Yes/No - include special characters?").toLowerCase()
  switch (userInput) {
    case "yes":
    case "y":
      //adding at least one random special character
      password = password + specialCharacters[randomNum(specialCharacters.length)]
      //creating the list of all potential characters
      approvedList = approvedList.concat(specialCharacters)
      break;
    case "no":
    case "n":
      break;
    default:
      window.alert("Enter \"Yes\" or \"No\".")
      special()
  }
}

//utility function to generate random numbers
const randomNum = (num) => {
  return Math.floor(Math.random() * num)
}

const generatePassword = () => {
  
  //get password length
  const pwLength = length()
  console.log(pwLength)
 
  //include numbers?
  numbers()
  console.log(approvedList)

  //include lower case?
  lowerCase()
  console.log(approvedList)

  //include upper case?
  upperCase()
  console.log(approvedList)

  //include special characters?
  special()
  console.log(approvedList)

  //check if approvedList array is empty - if yes alert and restart

  //generate string based on input values
  
   for (let i = password.length; i < pwLength; i++){
    //select random from approvedList array
    password = password + approvedList[randomNum(approvedList.length)]
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
