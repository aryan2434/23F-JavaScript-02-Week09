const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function () {
        alert(`Hello! My name is ${this.name}`);
    };
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
var person1 = createNewPerson("Person1");

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greeting = function () {
        alert(`Hello! My name is ${this.name}`);
    };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
var p1 = new Person("P1", "LP1", 50, "Female", ["swimming", "programming", "dancing"]);

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
var car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.color = "White";
car.price = 50;
car.fun = function () {
    alert(`${car.brand} ${car.color} ${car.price}`);
};

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
var anotherCar = Object.create(car);
/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
console.log(anotherCar.brand);
// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
function Hamburger(options) {
    this.bunType = options.bunType || 'standard';
    this.garnishes = options.garnishes || [];
    this.cheeseTypes = options.cheeseTypes || [];
    this.sauces = options.sauces || [];
    this.pattyType = options.pattyType || 'beef';
    this.pattyCount = options.pattyCount || 1;
    this.extras = options.extras || [];
}

Hamburger.prototype.describe = function () {
    let description = `Order Details: This is a ${this.pattyCount} patty ${this.pattyType} hamburger on a ${this.bunType} bun `;

    if (this.garnishes.length > 0) {
        description += `with veggies including ${this.garnishes.join(', ')} `;
    }

    if (this.cheeseTypes.length > 0) {
        description += `and ${this.cheeseTypes.join(', ')} cheese `;
    }

    if (this.sauces.length > 0) {
        description += `topped with ${this.sauces.join(', ')} sauce `;
    }

    if (this.extras.length > 0) {
        description += `and extras including ${this.extras.join(', ')}.`;
    }

    description += ' Thank You for ordering, Enjoy your meal :)';
    return description;
};

var myHamburger = new Hamburger({
    bunType: 'sesame-seeds',
    garnishes: ['lettuce', 'tomato', 'onion'],
    cheeseTypes: ['regular'],
    sauces: ['mayo', 'mustard','chipotle'],
    pattyType: 'beef',
    pattyCount: 1,
    extras: ['pickles', 'olives','jalapeno'],
});

console.log(myHamburger.describe());
output2.textContent = myHamburger.describe();
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS