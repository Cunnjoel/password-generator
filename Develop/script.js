// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var lowercase = ["a", "b", "c", "d"];
var uppercase = ["A", "B", "C","D"];
var numbers = ["1", "2", "3", "4"];
var specialChar = ["!", "@", "#", "$"];

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
