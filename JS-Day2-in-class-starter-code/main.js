/////// Variables Section ///////

const myName = "Clint Tuttle"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [{make:"Toyota", model:"Prius", color:"Silver"},
             {make:"Chevy", model:"Bolt", color:"Blue"}, 
             {make:"Honda", model:"Civic", color:"White"}];
const today = new Date();
const loggedIn = true;




//QUESTION ONE: 

// the reason why we use let over var is 
// because let is block scoped and var is
//  function scoped.  This means that let is o
// nly available within the block it is defined in (
// i.e. if statement, for loop, etc.) whereas var is available throughout the entire function it is defined in.  This can lead to unexpected behavior if you are not careful.  It is best practice to use let unless you specifically need var for some reason.

/////// PART 1 - Variables and Data Types demo///////
var a = 'Test1';
let b = 'Test2';

function testVar(){
  var a = 30;
  
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;
 
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

console.log(a);
console.log(b);
console.log("Example using var");
testVar();
console.log("Example using LET");
testLet();
// When you are done with this section you can comment out the console.logs above






//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');



////starter code////
// selected car for examples
let selectedCar = car[0]
//update code below to using template literals (not concatenation) to pull in the variables myName, color, make, into output
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${selectedCar.color} ${selectedCar.make} ${selectedCar.model}`;

//Footer Section
const footerElement = document.getElementById("footer");
//update code below to use template literals to pull in the myName and the current year
const currentYear = new Date().getFullYear();
footerElement.innerHTML = `&copy; ${myName} ${currentYear}`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement
const result3Element = document.getElementById("result3");

////Sample code.  You can uncomment this to see how simple a ternaly operator can be
loggedIn ? result3Element.innerHTML = "Welcome back!" : result3Element.innerHTML = "Please log in";





//////// PART 4 - Arrow Functions////////


//Make a copy of the above function and rename it GreetingsArrow() and then convert function to an arrow function here
const GreetingsArrow = (name) => `Hello ${name}!`; 

console.log(GreetingsArrow("Clint"));


//////// PART 5 - Array methods////////
function printFruit() {
    const resultElement = document.getElementById("result5");
    resultElement.textContent = "";

    // Filter fruits starting with 'b', then map to <p> elements and append
    const bFruits = fruits.filter(fruit => fruit.toLowerCase().startsWith('b'));

    bFruits.map(fruit => {
        const p = document.createElement('p');
        p.textContent = fruit;
        return p;
    }).forEach(p => resultElement.appendChild(p));
}

 
 
 function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
 }





 //////// PART6 - Destructuring////////
// Rename the function to avoid name collision with the selectedCar variable
function showCar({ make, model, color }) {
    const message = `I drive a ${color} ${make} ${model}`;
    document.getElementById("result6").textContent = message;
}

showCar(car[0]);
myCar(car[0]);
//convert the myCar function to use destructuring







//////// PART 7 - Spread Operator////////

//////// PART 7 - Spread Operator////////

const baseProduct = {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: 199.99,
    warranty: '1 year'
  };
  
  const holidayPromo = {
    price: 149.99,
    promoText: 'Holiday Special!',
    bundle: 'Free carrying case'
  };
  
  
  const currentProduct = { ...baseProduct, ...holidayPromo,lastUpdated: '2023-12-31'};
  
  console.log(currentProduct);
  
document.getElementById("result7").textContent = `${currentProduct.name} is on sale for $${currentProduct.price} as of ${currentProduct.lastUpdated}`;




 //////// PART 8 - Try Catch////////
function InputValidation() {
    // Get the paragraph element where messages are displayed
    const message = document.getElementById("part8-p");
    message.innerHTML = "";
    
    // Get the value from the input element
    let x = document.getElementById("part8-input").value.trim();
    
    try { 
        // 1. Check for EMPTY input
        if (x === "") {
            throw "EMPTY";
        }

        // 2. Check if NOT A NUMBER
        if (isNaN(x)) {
            throw "NOT A NUMBER";
        }
        
        // Convert to a number for numerical comparisons
        x = Number(x); 
        
        // 3. Check bounds (TOO HIGH or TOO LOW)
        if (x > 15) {
            throw "TOO HIGH";
        }
        if (x < 10) {
            throw "TOO LOW";
        }
        
        // 4. Success scenario
        message.innerHTML = "valid";
    }
    catch(err) {
        // CATCH block: Maps the thrown error string to a user-friendly message
        if (err === "EMPTY") {
            message.innerHTML = "Error: Input is EMPTY";
        } else if (err === "NOT A NUMBER") {
            message.innerHTML = "Error: Input is NOT A NUMBER";
        } else if (err === "TOO HIGH") {
            message.innerHTML = "Error: Input is TOO HIGH (must be 10-15)";
        } else if (err === "TOO LOW") {
            message.innerHTML = "Error: Input is TOO LOW (must be 10-15)";
        } else {
            message.innerHTML = "An unexpected error occurred.";
        }
    } 
    finally {
        // FINALLY block: Clears the input field regardless of success or failure
        document.getElementById("part8-input").value = "";
    }
}