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

  //string that takes in all the alphabets according to user input
  var blankstring = "";

  //takes in how long the user wants to make the password
  var length = prompt (
    "How any characters would you like in your password? \n(Please enter a number between 8-128)" 
  );

  //if the user enters nothing and hits "cancel" the process ends
  if (length === null) {
    finalPassword = "";
    return finalPassword;
  }
  //checks if the user enters a valid number while trying to determine the length of a password
  while (length < 8 || length > 128 && length != null) {
    length = prompt(
      "the password must be 8 and 128 characters. Please select a number between 8-128 and press Ok to continue"
      )
  }
  //checks if the user wants lowercase in their password and omits that alphabet string if not
  var lowerCase = confirm (
    "Do you want lower case characters to be included. Press OK for YES and Cancel for NO"
  );

  if (lowerCase == true) {
    blankstring = blankstring + lower;
  }
  else {
    blankstring = blankstring;
  }

   //checks if the user wants uppercase in their password and omits that alphabet string if not
  var upperCase = confirm(
    "Do you want upper case characters to be included. Press OK for YES and Cancel for NO"
  );

  if (upperCase == true) {

    blankstring = blankstring + upper;
  }
  else {
    blankstring = blankstring;
  }
//checks if the user wants numbers in their password and omits that alphabet string if not
  var number = confirm(
    "Do you want to include numbers? Press OK for YES and Cancel for NO"
    );
  if (number == true) {
    blankstring = blankstring + num;
  }
  else {
    blankstring = blankstring;
  }

  //checks if the user wants special characters in their password and omits that alphabet string if not
  var special = confirm(
    "Do you want to include special characters? Press OK for YES and Cancel for NO"
  );
  if (special == true) {
    blankstring = blankstring + spec;
  }
  else {
    blankstring = blankstring;
  }

  //checks if the user wants gravesign alphabet in their password and omits that alphabet string if not
  var gravesign = confirm(
    "Do you want to include grave characters? Press OK for YES and Cancel for NO"
  );
  if (gravesign == true) {
    blankstring = blankstring + grave;
  }
  else {
    blankstring = blankstring;
  }
  //checks if the user wants acutesign alphabet in their password and omits that alphabet string if not
  var acutesign = confirm(
    "Do you want to include acute characters? Press OK for YES and Cancel for NO"
  );
  if (acutesign == true) {
    blankstring = blankstring + acute;
  }
  else {
    blankstring = blankstring;
  }
  //checks if the user wants circumflex alphabet in their password and omits that alphabet string if not
  var circumflex = confirm(
    "Do you want to include circumflex characters? Press OK for YES and Cancel for NO"
  );
  if (circumflex == true) {
    blankstring = blankstring + circum;
  }
  else {
    blankstring = blankstring;
  }
  //checks if the user wants tilde alphabet in their password and omits that alphabet string if not
  var tildesign = confirm(
    "Do you want to include circumflex characters? Press OK for YES and Cancel for NO"
  );
  if (tildesign == true) {
    blankstring = blankstring + tilde;
  }
  else {
    blankstring = blankstring;
  }
  //checks if the user wants umaluts alphabet in their password and omits that alphabet string if not
  var umalutsign = confirm(
    "Do you want to include umalut characters? Press OK for YES and Cancel for NO"
  );
  if (umalutsign == true) {
    blankstring = blankstring + umlaut;
  }
  else {
    blankstring = blankstring;
  }
  

//if the user rejected all the alphabet strings, do not generate the password and end the process
  if(upperCase == false && lowerCase == false && number == false && special == false && gravesign == false && acutesign == false && circumflex == false && tildesign == false && umalutsign == false)
  {
    finalPassword = "";
    return finalPassword;
  } 
  else {
    //for loop to assign an assortment of characters from the approved alphabets and sets it at the final string and returns it to display on the screen
  for (var i = 0; i < length; i++){

    var randomfromalphabets = Math.floor(Math.random() * blankstring.length);

    finalPassword = finalPassword + blankstring.charAt(randomfromalphabets);
  }
  return finalPassword;
  }
}

//adds the event listener and assigns the method which generates the functionality
generateBtn.addEventListener("click", writePassword);