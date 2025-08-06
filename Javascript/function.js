// Question 1: Find Maximum Between Two Numbers
function findMax() {
    var num1 = Number(document.getElementById("question1-number1").value);
    var num2 = Number(document.getElementById("question1-number2").value);
    var result = num1 > num2 ? num1 : num2;
    document.getElementById("question1-result").innerText = `Maximum: ${result}`;
  }
  
  // Question 2: Find Maximum Between Three Numbers
  function findMaxThree() {
    var num1 = Number(document.getElementById("question2-number1").value);
    var num2 = Number(document.getElementById("question2-number2").value);
    var num3 = Number(document.getElementById("question2-number3").value);
    var result = Math.max(num1, num2, num3);
    document.getElementById("question2-result").innerText = `Maximum: ${result}`;
  }
  
  // Question 3: Check if Number is Negative, Positive, or Zero
  function checkSign() {
    var num = Number(document.getElementById("question3-number").value);
    var result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
    document.getElementById("question3-result").innerText = `Result: ${result}`;
  }
  
  // Question 4: Check if Number is Divisible by 5 and 11
  function checkDivisibility() {
    var num = Number(document.getElementById("question4-number").value);
    var result = num % 5 === 0 && num % 11 === 0 ? "Divisible" : "Not Divisible";
    document.getElementById("question4-result").innerText = result;
  }
  
  // Question 5: Check if Number is Even or Odd
  function checkEvenOdd() {
    var num = Number(document.getElementById("question5-number").value);
    var result = num % 2 === 0 ? "Even" : "Odd";
    document.getElementById("question5-result").innerText = result;
  }
  
  // Question 6: Check if a Year is Leap Year
  function checkLeapYear() {
    var year = Number(document.getElementById("question6-number").value);
    var result = (year % 4 === 0  ? "Leap Year" : "Not a Leap Year");
    document.getElementById("question6-result").innerText = result;
  }
  
  // Question 7: Check if a Character is Alphabet
  function isAlphabet() {
    var char = document.getElementById("question7-number").value;
    var result = char === A-Z || char === a-z ? "Alphabet" : "Not an Alphabet";
    document.getElementById("question7-result").innerText = result;
  }
  
  // Question 9: Check Character Type
  function checkCharacterType() {
    var char = document.getElementById("question9-number").value;
    var result;
    if (char === a-z || char === A-Z) result = "Alphabet";
    else if (char === 0-9) result = "Digit";
    else result = "Special Character";
    document.getElementById("question9-result").innerText = result;
  }
  
  // Question 10: Check if Alphabet is Uppercase or Lowercase
  function checkCase() {
    var char = document.getElementById("question10-number").value;
    var result = char === char.toUpperCase() ? "Uppercase" : "Lowercase";
    document.getElementById("question10-result").innerText = result;
  }
  
  
  // Question 14: Check if Triangle is Valid (by Angles)
  function checkTriangleAngles() {
    var a = Number(document.getElementById("question14-number1").value);
    var b = Number(document.getElementById("question14-number2").value);
    var c = Number(document.getElementById("question14-number3").value);
    var result = a + b + c === 180 ? "Valid Triangle" : "Invalid Triangle";
    document.getElementById("question14-result").innerText = result;
  }
  
  // Question 15: Check if Triangle is Valid (by Sides)
  function checkTriangleSides() {
    var a = Number(document.getElementById("question15-number1").value);
    var b = Number(document.getElementById("question15-number2").value);
    var c = Number(document.getElementById("question15-number3").value);
    var result = a + b > c && a + c > b && b + c > a ? "Valid Triangle" : "Invalid Triangle";
    document.getElementById("question15-result").innerText = result;
  }
  
  // Question 16: Check Triangle Type
  function checkTriangleType() {
    var a = Number(document.getElementById("question16-number1").value);
    var b = Number(document.getElementById("question16-number2").value);
    var c = Number(document.getElementById("question16-number3").value);
    var result;
    if (a === b && b === c) result = "Equilateral Triangle";
    else if (a === b || b === c || a === c) result = "Isosceles Triangle";
    else result = "Scalene Triangle";
    document.getElementById("question16-result").innerText = result;
  }



//   Another paragraph

function expandParagraph(){
    document.getElementById("paragraph").innerHTML = "Lorem is ipsum dolor sit amet consectetur adipisicing elit. Rem reprehenderit odio quasi, autem, beatae perspiciatis blanditiis sunt nesciunt consectetur sequi eaque id, corporis vero. Tenetur illum vel sit exercitationem reprehenderit."
}