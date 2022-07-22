// Assignment code here


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

//function to generate password
function generatePassword() {
  //variable to determine the final password and return it once all the data has been taken in
  var finalPassword = "";

  //strings that encapsul the alphabet in the strings involved
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var num = "01234567890";
  var grave = "ÀÈÌÒÙàèìòù";
  var acute = "ÁÉÍÓÚáéíóú";
  var circum = "ÂÊÎÔÛâêîôû";
  var tilde = "ÃÑÕãñõ";
  var umlaut = "ÄËÏÖÜŸäëïöüÿÏ";
  var spec = "!@#$%^&*()_-+=\|{}[];:,.?/<>`~⌥⌃åç†ƒ©™š¬µø¼œ®ßÝˆ…‰¥‡Å¹ÇÎ›Ø½Œ‰œ¾æÆ¿÷¶Ž€ÐðÞþý±";

  var blankstring = "";

  var length = prompt (
    "How any characters would you like in your password? \n(Please enter a number between 8-128)" 
  );

  if (length === null) {
    finalPassword = "";
    return finalPassword;
  }
  while (length < 8 || length > 128 && length != null) {
    length = prompt(
      "the password must be 8 and 128 characters. Please select a number between 8-128 and press Ok to continue"
      )
  }
 
  var lowerCase = confirm (
    "Do you want lower case characters to be included. Press OK for YES and Cancel for NO"
  );

  if (lowerCase == true) {
    blankstring = blankstring + lower;
  }
  else {
    blankstring = blankstring;
  }

  var upperCase = confirm(
    "Do you want upper case characters to be included. Press OK for YES and Cancel for NO"
  );

  if (upperCase == true) {

    blankstring = blankstring + upper;
  }
  else {
    blankstring = blankstring;
  }

  var number = confirm(
    "Do you want to include numbers? Press OK for YES and Cancel for NO"
    );
  if (number == true) {
    blankstring = blankstring + num;
  }
  else {
    blankstring = blankstring;
  }

  var special = confirm(
    "Do you want to include special characters? Press OK for YES and Cancel for NO"
  );
  if (special == true) {
    blankstring = blankstring + spec;
  }
  else {
    blankstring = blankstring;
  }
  var gravesign = confirm(
    "Do you want to include grave characters? Press OK for YES and Cancel for NO"
  );
  if (gravesign == true) {
    blankstring = blankstring + grave;
  }
  else {
    blankstring = blankstring;
  }
  var acutesign = confirm(
    "Do you want to include acute characters? Press OK for YES and Cancel for NO"
  );
  if (acutesign == true) {
    blankstring = blankstring + acute;
  }
  else {
    blankstring = blankstring;
  }
  var circumflex = confirm(
    "Do you want to include circumflex characters? Press OK for YES and Cancel for NO"
  );
  if (circumflex == true) {
    blankstring = blankstring + circum;
  }
  else {
    blankstring = blankstring;
  }
  var tildesign = confirm(
    "Do you want to include circumflex characters? Press OK for YES and Cancel for NO"
  );
  if (tildesign == true) {
    blankstring = blankstring + tilde;
  }
  else {
    blankstring = blankstring;
  }
  var umalutsign = confirm(
    "Do you want to include umalut characters? Press OK for YES and Cancel for NO"
  );
  if (umalutsign == true) {
    blankstring = blankstring + umlaut;
  }
  else {
    blankstring = blankstring;
  }
  


  if(upperCase == false && lowerCase == false && number == false && special == false && gravesign == false && acutesign == false && circumflex == false && tildesign == false && umalutsign == false)
  {
    finalPassword = "";
    return finalPassword;
  } 
  else {
  for (var i = 0; i < length; i++){

    var randomfromalphabets = Math.floor(Math.random() * blankstring.length);

    finalPassword = finalPassword + blankstring.charAt(randomfromalphabets);
  }
  return finalPassword;
  }
}

generateBtn.addEventListener("click", writePassword);