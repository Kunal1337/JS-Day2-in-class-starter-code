/////// Variables Section ///////
const myName = "Clint Tuttle"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [{make:"Toyota", model:"Prius", color:"Silver"},
             {make:"Chevy", model:"Bolt", color:"Blue"}, 
             {make:"Honda", model:"Civic", color:"White"}];
const today = new Date();
const year = today.getFullYear();

const loggedIn = true;




document.getElementById("1").innerHTML += "<p>The reason why we use let over var is because var is scope blocked. this can cause logic errors in the code uintentionally. </p>"


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

// When you are done with this section you can comment out the console.logs above






//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');

////starter code////
//update code below to using template literals (not concatenation) to pull in the variables myName, color, make, into output
let firstCar = car[0]
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${firstCar.color} ${firstCar.model} ${firstCar.make}`;


//Footer Section
const footerElement = document.getElementById("footer");
//update code below to use template literals to pull in the myName and the current year
footerElement.innerHTML = `&copy; ${myName} ${year}`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement


loggedIn ? document.getElementById('result3').innerHTML = "Welcome back!" : document.getElementById('result3').innerHTML = "Please Log in";
////Sample code.  You can uncomment this to see how simple a ternaly operator can be
// loggedIn ? alert("welcome back") : alert("please log in");

////section 2 -ternary operator to update the result3Element



let GreetingsArrow = name => console.log(`Hello ${name}!`);

//////// PART 4 - Arrow Functions////////
function Greetings(name) {
    return `Hello ${name}!`;
};

console.log(GreetingsArrow("Clint"));

//Make a copy of the above function and rename it GreetingsArrow() and then convert function to an arrow function here
 



//////// PART 5 - Array methods////////
function printFruit() {

    let resultElement = document.getElementById("result5");

    resultElement.textContent = "";

    // Loop through the fruits array
    for (let i = 0; i < fruits.length; i++) {
 
        // Create a list item for each fruit
        let p = document.createElement("p");
        p.textContent = fruits[i];

        // Append the list item to the ordered list
        resultElement.appendChild(p);
    }

 }

function printFruit() {
  let resultElement = document.getElementById("result5");
  resultElement.textContent = "";

  fruits
    .filter(fruit => fruit.startsWith("b"))   // only keep fruits that start with 'b'
    .map(fruit => {
      resultElement.textContent += fruit + " "; // add each to the result element
    });
}





 
 
 function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
 }





 //////// PART6 - Destructuring////////
 myCar(car[0]);

 function myCar(car) {
    const { make, model, color } = car;

     var message = `I drive a ${color} ${make} ${model}`;
   
     document.getElementById("result6").textContent = message;
 }

//convert the myCar function to use destructuring







//////// PART 7 - Spread Operator////////

const baseProduct = {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: 199.99,
    warranty: '1 year'
  };
  
  // Seasonal promotion overrides
  const holidayPromo = {
    price: 149.99,
    promoText: 'Holiday Special!',
    bundle: 'Free carrying case'
  };
  
  // Merge basePrduct and Seasonal using spread operator and add lastUpdated property with a value of '2023-12-31'
  ///UPDATE THIS CODE
   objDate = {lastUpdated: "2023-12-31"}
  const currentProduct= { ...baseProduct, ...holidayPromo, ...objDate};
  //UPDATE THIS OUTPUT
    document.getElementById("result7").textContent = `the ${currentProduct.name} are on sale for ${currentProduct.price} as of ${currentProduct.lastUpdated}.`;






 //////// PART 8 - Try Catch////////
 function InputValidation() {
    const message = document.getElementById("part8-p");
    message.innerHTML = "";

    let x = document.getElementById("part8-input").value;

    try {
        if (x.trim() === "") {
            // Empty input
            throw "Input is EMPTY";
        }
        let num = Number(x); // convert string to number
        if (isNaN(num)) {
            // Not a number
            throw "Input is NOT A NUMBER";
        }

        if (num < 10) {
            throw "Input is TOO LOW";
        }

        if (num > 15) {
            throw "Input is TOO HIGH";
        }
        message.innerHTML = "Success";
    } catch (err) {
        // Display the  message
        message.innerHTML = err;
    } finally {
        

    }
}



