// array variables to be used in password
var lowerCas = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCas = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(
    prompt(
      "How many characters will your password be? Enter number between 8 and 128"
    )
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(passwordLength) === Number) {
    alert("Password length must be provided as a number");
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters long.");
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (passwordLength > 128) {
    alert("Password length cannot be longer than 128 characters long.");
  }
  
  var inclLow = confirm("Do you want to include lowercase characters?");
  var inclUpp = confirm("Do you want to include uppercase characters?");
  var inclNum = confirm("Do you want to include numbers?");
  var inclSpe = confirm("Do you want to include special characters?");
  // dont move forward if they said no to all
  if (
    !inclSpe &&
    !inclLow &&
    !inclNum &&
    !inclUpp
  ) {
    alert("Must select at least one character type");
    return;
  }
  return {
    passwordLength,
    inclLow,
    inclUpp,
    inclNum,
    inclSpe,
  };
}
// Return the options object as the exported value of this function
// Function for getting a random element from an array
function getRandomElement(arr) {
  // Get a random number based on the length of the array parameter
  var randIndex = Math.floor(Math.random * arr.length);
  // Use the random number made to get an element out of the array
  var randElement = arr[randIndex];
  // Return the element
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  // Running the function to trigger the prompts and get the users answers back as an object
  var options = getPasswordOptions();
  var result = [];
  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters to make at least one of the value is always included
  if (options.inclSpe) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandomElement(specialChar));
  }

  // // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // // Push new random special character to guaranteedCharacters to make at least one of the value is always included
  if (options.inclNum) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandomElement(numbers));

  }

  // // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // // Push new random lower-cased character to guaranteedCharacters to make at least one of the value is always included
  if (options.inclLow) {
    possibleCharacters = possibleCharacters.concat(lowerCas);
    guaranteedCharacters.push(getRandomElement(lowerCas));
  }

  // // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // // Push new random upper-cased character to guaranteedCharacters to make at least one of the value is always included
  if (options.inclUpp) {
    possibleCharacters = possibleCharacters.concat(upperCas);
    guaranteedCharacters.push(getRandomElement(upperCas));

  }
  console.log(possibleCharacters);
  // // For loop to iterate over the password length provided from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (let i = 0; i < length.length; i++) {
    var possibleCharacter = getRandomElement(possibleCharacters);
    console.log(possibleCharacter);
  }

  // // For loop to iterate the guarenteed characters to overwrite the generated characters
  // for (let i = 0; i < options.length; ++i) {
  //   var randomPicker = Math.floor(Math.random() * Math.floor(password.length));
  //   password.push(guaranteedCharacters[randomPicker]);
  // }
  console.log(result, password);
  return result.join('');
}
// Join the array to make it a singular string to return

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Runs the function that will generate the password
  var password = generatePassword();
  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector("#password");
  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;

  // Array to store password as it's being concatenated
  var password = [];
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);