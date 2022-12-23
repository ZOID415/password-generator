// Assignment Code
var lowerCase = "abcdefghijklmnopqrstuvwqyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = "!@#$%^&";
var numericalChar = "1234567890";

var allChars = "";
//var upperCase = lowerCase.toUpperCase();
// var lowerCaseArray = lowerCase.split ("")
// var upperCaseArray = upperCase.split("");
// var specCharArray = specChar.split("");
// var lowerCaseArray = lowerCase.split("");
//  var characterArray = [lowercaseArray, uppercaseArray,specCharArray, numericalArray]
//  rng

function getRandChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// console.log (randChar, getRandchar(lowerCaseArray))
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var charLength = parseInt(prompt("Choose Password Length"));

  if (charLength < 8) {
    alert("Password Must Be More Than Eight Characters");
    writePassword();
  }
  // Add If Statement for Max Char Length
  else if (charLength > 128) {
    alert("Password Must Be Less Than 128 Characters");
    writePassword();
  }
  // Number.isNan checks if data is a number
  else if (Number.isNaN(charLength)) {
    alert("Character Length Must Be a Number");
    writePassword();
  }

  // To Do:Add If Statement to Make Sure Char Length is Numeric
  var isLowerCase = confirm("Use Lowercase Characters?");
  var isUpperCase = confirm("Use Uppercase Characters?");
  var isNumeric = confirm("Use Numeric Characters?");
  var isSpecial = confirm("Use Special Characters?");
  // If User Chooses No Characters Return False
  // Bang Does the Opposite
  console.log(allChars);

  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    alert("Password Must Contain at Least One Type of Character");
    writePassword();
  }
  if (isLowerCase == true) {
    allChars += lowerCase;
    //allChars = allChars.concat(lowerCase);
    console.log(allChars);
  }
  if (isUpperCase == true) {
    allChars += upperCase;
    //allChars = allChars.concat(lowerCase);
    console.log(allChars);
  }
  if (isNumeric == true) {
    allChars += numericalChar;
    //allChars = allChars.concat(lowerCase);
    console.log(allChars);
  }
  if (isSpecial == true) {
    allChars += specChar;
    //allChars = allChars.concat(lowerCase);
    console.log(allChars);
  }

  for (var i = 0; i < charLength; i++) {
    //return a random index number from the allChars string
    var randomIndex = Math.floor(Math.random() * allChars.length);
    //use the random index to return a random value  from the allChars string
    var randomValue = allChars[randomIndex];
    console.log(randomIndex, randomValue);
    //add the random Value into password string
    password += randomValue;
    console.log(password);
  }

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
