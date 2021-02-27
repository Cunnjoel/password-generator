// array variables to be used in password
var lowerCas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters will your password be? Enter number between 8 and 128"));
  var inclLow = confirm("Do you want to include lowercase characters?");
  var inclUpp = confirm("Do you want to include uppercase characters?");
  var inclNum = confirm("Do you want to include numbers?");
  var inclSpe = confirm("Do you want to include special characters?");
  return {
    passwordLength,
     inclLow,
     inclUpp,
     inclNum,
    inclSpe
    }

     // Variable to store length of password from user input
  var length = console.log(getPasswordOptions.passwordLength);

  // Variable to store boolean regarding the inclusion of special characters
  var specialCharactersConfirm = console.log(getPasswordOptions.inclSpe);

  // Variable to store boolean regarding the inclusion of numeric characters
  var numericCharactersConfirm = console.log(getPasswordOptions.inclNum);

  // Variable to store boolean regarding the inclusion of lowercase characters
  var lowerCasedCharactersConfirm = console.log(getPasswordOptions.inclLow);

  // Variable to store boolean regarding the inclusion of uppercase characters
  var upperCasedCharactersConfirm = console.log(getPasswordOptions.inclUpp);

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (!specialCharactersConfirm && !numericCharactersConfirm && !lowerCasedCharactersConfirm && !upperCasedCharactersConfirm) {
    alert("Must select at least one character type");
  }
}

 

  // Object to store user input variables
  var passwordOptions = {
    length: length,
    specialCharacters: getPasswordOptions.inclSpe,
    numeric: getPasswordOptions.inclNum,
    lowerCase: getPasswordOptions.inclLow,
    upperCase: getPasswordOptions.inclUpp
    
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
  console.log(options)

    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(length) === Number) {
      alert('Password length must be provided as a number');
    }
  
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
        if (length < 8) {
      alert("Password length must be at least 8 characters long.");
    } 
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
       if (length > 128) {
    alert("Password length cannot be longer than 128 characters long.");
  } 
  
  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [possibleCharacters];
  console.log(guaranteedCharacters)

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters to make at least one of the value is always included 
  if (passwordOptions.specialCharacters) {
        for (i = 0; i < specialChar.length; ++i) {
      result.push(specialChar[i]);}
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters to make at least one of the value is always included 
  if (passwordOptions.numeric) {
     for (i = 0; i < numbers.length; ++i) {
    result.push(numbers[i]);}
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters to make at least one of the value is always included 
  if (passwordOptions.lowerCase) {
     for (i = 0; i < lowerCas.length; ++i) {
    result.push(lowerCas[i]);}
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters to make at least one of the value is always included 
  if (passwordOptions.upperCase) {
      for (i = 0; i < upperCas.length; ++i) {
    result.push(upperCas[i]);}
  }

  // For loop to iterate over the password length provided from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (let i = 0; i < length.length; i++) {
    var possibleCharacter = getRandomElement(possibleCharacters);
  }

  // For loop to iterate the guarenteed characters to overwrite the generated characters
   for (let i = 0; i < options.length; ++i) {
      var randomPicker = Math.floor(Math.random() * Math.floor(password.length))
      password.push(guaranteedCharacters[randomPicker])
}
}
  // Join the array to make it a singular string to return 

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // Runs the function that will generate the password
  var password = generatePassword();
  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;

    // Array to store password as it's being concatenated 
    var password = [];
    console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);