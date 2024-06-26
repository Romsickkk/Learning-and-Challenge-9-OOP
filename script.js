//////////////////////////////////////////////////////////////////////////
// Constructor Functions and the new Operator
// const Person = function (firstName, birthYaer) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYaer = birthYaer;

//   //   // Never do this
//   //   this.calcAge = function () {
//   //     console.log(2024 - this.birthYaer);
//   //   };
// };

// const roma = new Person("Roma", 1999);
// console.log(roma);

// // 1. New {} is created
// // 2. ffunction is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person("Matilda", 2001);
// const jack = new Person("Jack", 1975);
// console.log(matilda.birthYaer, jack);

// const jay = "Jay";

// console.log(roma instanceof Person);
// console.log(jay instanceof Person);

// Person.hey = function () {
//   console.log("Hey there 👋");
//   console.log(this);
// };
// Person.hey();
// // roma.hey(); not work
// // roma.calcAge();

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYaer);
// };

// roma.calcAge();
// matilda.calcAge();

// console.log(roma.__proto__);
// console.log(roma.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(roma));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = "Homo Sapiens";
// console.log(roma.species, matilda.species);

// console.log(roma.hasOwnProperty("firstName"));
// console.log(roma.hasOwnProperty("species"));

// console.log(roma.__proto__);

// // Object.prototype (top of prototype chain)
// console.log(roma.__proto__.__proto__);
// console.log(roma.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [1, 4, 5, 7, 2, 2, 5, 1, 9]; // New Array = []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector("h1");
// console.dir(h1);
// console.dir((x) => x + 1);

// //////////////////////////////////////////////////////////////////////////
// // // ES6 Classes

// // //expression
// // // const PersonCl = class {}

// // // class decloration
// class PersonCl {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype ptoperty
//   calcAge = function () {
//     console.log(2024 - this.birthyear);
//   };

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2024 - this.birthyear;
//   }

//   //
//   //Set a property that already exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log("Hey there 👋");
//     console.log(this);
//   }
// }

// const jessica = new PersonCl("Jessica Davis", 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizes
// // 3. Classes are executed in strict mode

// const walter = new PersonCl("Walter White", 1965);

// PersonCl.hey();

// /////////////////////////////////////////////////////////////////////////////
// // Setters and Getters
// const account = {
//   owner: "Roma",
//   movements: [200, 300, 530, 120, 10],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);
// console.log(account.latest);

/////////////////////////////////////////////////////////////////////////////
// Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// sarah.calcAge();
// console.log(sarah);

//////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.intruduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };
// const mike = new Student("Mike", 2020, "Computer Science");
// console.log(mike);
// mike.intruduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

/////////////////////////////////////////////////////////////////////////////
// // Inheritance Between "Classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log("Hey there 👋");
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthyear, course) {
//     //Always need to appen first!
//     super(fullName, birthyear);
//     this.course = course;
//   }
//   inttoduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2024 - this.birthYear} years old, but a student i feel more like ${
//         2024 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
// martha.inttoduce();
// martha.calcAge();

///////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// // const jay = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init("Jay", 1999, "JS Prigrammer");
// console.log(jay);
// jay.calcAge();
// jay.introduce();

//////////////////////////////////////////////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

// class Account {
//   // 1 Public fields (instances)
//   local = navigator.language;

//   // 2 Private fields (instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     // Protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.local = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods
//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   static helper() {
//     console.log("Helper");
//   }
//   // 4) Private methods
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account("Roma", "EUR", 1111);

// // acc1.movements.push(200);
// // acc1.movements.push(-100);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// // acc1.approveLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1);
// Account.helper();

// // console.log(acc1.#pin); Error
// // console.log(acc1.#movements); Error
// // console.log(acc1.#approveLoan(100)); Error

// // Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

// console.log(
//   acc1.getMovements().reduce((acc, val) => {
//     return acc + val;
//   }, 0)
// );
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// ===================================== CHALENGE #1 ==================================

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} accelerating to ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going in ${this.speed}km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.brake();

// mercedes.accelerate();
// mercedes.brake();

///////////////////////////////////////////////////////////////////////////////////////////
// ===================================== CHALENGE #2 ==================================

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//   color = "black";

//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} accelerating to ${this.speed}km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going in ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return (this.speed /= 1.6);
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car("Ford", 120);
// const bmw = new Car("BMW", 150);
// console.log(bmw.color);
// console.log(ford.color);
// bmw.color = "white";
// console.log(bmw);
// console.log(ford);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// console.log(ford.speed);
// ford.speedUS = 20;
// console.log(ford.speed);

// console.log(ford.speedUS);
// ford.speed = 120;
// console.log(ford);

///////////////////////////////////////////////////////////////////////////////////////////
// ===================================== CHALENGE #3 ==================================

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} accelerating to ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going in ${this.speed}km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
//   console.log(make, speed, charge);
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge += chargeTo;
//   console.log(`Your battery charge is ${this.charge}%`);
// };

// const tesla = new EV("Tesla", 120, 56);
// tesla.accelerate();
// console.log(tesla.charge);
// tesla.chargeBattery(10);
// tesla.brake();
// console.log(tesla.__proto__);
// tesla.__proto__.__proto__.accelerate();
// // console.dir(EV.accelerates())

///////////////////////////////////////////////////////////////////////////////////////////
// ===================================== CHALENGE #4 ==================================

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeTo(val) {
    this.#charge += val;
    this.#charge > 100 ? (this.#charge = 100) : "";

    console.log(`${this.make} now are charget to ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} now are going in ${this.speed}km/h and ${
        this.#charge
      }% charge`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

EVCl.prototype = Object.create(CarCl.prototype);

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
rivian.accelerate();
console.log(rivian);
rivian.chargeTo(10);
console.log(rivian);
console.log(rivian.charge);
rivian.brake();

rivian.accelerate().accelerate().accelerate().brake().chargeTo(50).accelerate();
console.log(rivian);
