// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//this function generates a random password based on user's selected criteria
function generatePassword() {

  //user defines password length
  var passwordLength = prompt("Please choose a length in between 8-128 characters");
  var possibleAnswers = "";
  
  while (passwordLength > 128 || passwordLength < 8) {
      alert("The password length needs to be at least 8 characters long and shorter than 128 characters")
      passwordLength = prompt("Please choose a length in between 8-128 characters");
  }

  //user decides whether to include lowercase characters
  var lowercase = confirm("Would you like to include lowercase characters in your password?");
  if (lowercase) {
    possibleAnswers += "abcdefghijklmnopqrstuvwxxyz";
  } 

  //user decides whether to include uppercase characters
  var uppercase = confirm("Would you like to include uppercase characters in your password?");
  if (uppercase) {
    possibleAnswers += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  //user decides whether to include numbers in password
  var numbers = confirm("Would you like to include numbers in your password?");
  if (numbers) {
    possibleAnswers += 1234567890;
  }

  //user decides whether to include special characters in password
  var specialCharacters = confirm("Would you like to include special characters in your password?");
  if (specialCharacters) {
    possibleAnswers += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }

  //check if user chose at least one character type
  if (possibleAnswers === ""){
  alert("You must include at least one character type");
  return generatePassword();
  }

  //generate random password at the length user specified in the beginning
  var newPassword = "";

  for (var i = 1; i <= passwordLength; i++) {
    newPassword += possibleAnswers.charAt(Math.floor(Math.random() * possibleAnswers.length));
  }
  
  return newPassword;
}