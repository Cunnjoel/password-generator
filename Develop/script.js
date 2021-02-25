// array variables to be used in password
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
​
// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = Number(prompt("How many characters will your password be? Enter number between 8 and 128"));
  var inclLow = confirm("Do you want to include lowercase characters?");
  var inclUpp = confirm("Do you want to include uppercase characters?");
  var inclNum = confirm("Do you want to include numbers?");
  var inclSpe = confirm("Do you want to include special characters?");
}

  // Variable to store length of password from user input
  var passLength = console.log(passwordLength);
​
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(passLength) === true) {
    alert('Password length must be provided as a number');
    return;
  }
​
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passLength <8){
    alert("Password length must be at least 8 characters long.");
    passwordLength();
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
​   else if (passLength >128){
  alert("Password length cannot be longer than 128 characters long.")
}

  // Variable to store boolean regarding the inclusion of special characters
  var specialCharactersConfirm = console.log(inclSpe);
​
  // Variable to store boolean regarding the inclusion of numeric characters
  var numericCharactersConfirm = console.log(inclNum);
​
  // Variable to store boolean regarding the inclusion of lowercase characters
  var lowerCasedCharactersConfirm = console.log(inclLow);
​
  // Variable to store boolean regarding the inclusion of uppercase characters
  var upperCasedCharactersConfirm = console.log(inclUpp);
​
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (!specialCharactersConfirm && !numericCharactersConfirm && !lowerCasedCharactersConfirm && !upperCasedCharactersConfirm) {
    alert('Must select at least one character type');
    return;
  }
​
  // Object to store user input variables
  var passwordOptions = [];
  console.log(passwordOptions)
    
  // Return the options object as the exported value of this function
  return passwordOptions;
​




















// Assignment Code
var generateBtn = document.querySelector("#generate");



var lowcas = function(){
  Math.floor(Math.random * lowercase.length);
}
var uppcase = function(){
  Math.floor(Math.random * uppercase.length);
}
var numbs = function(){
  Math.floor(Math.random * numbers.length);
}
var spec = function(){
  Math.floor(Math.random * specialChar.length);
}

// starting states
lowercase = "false"
uppercase = "false"
numbers = "false"
specialChar = "false"

// if statments
var pass = function(){
  if (lowercase === true){
    lowcas()
  }else if (uppercase === true){
    uppcase()
  }else if (numbers === true){
    numbs()
  }else (specialChar === true);{
    spec()
  }
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
