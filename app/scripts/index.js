// ########################################
// Strings are not mutable
// Assignment is "by value"
// ########################################
var kepler = "He loves ";
var keperlerSays = kepler + "treats";

console.log(keperlerSays);

kepler = "He wants some ";

console.log(keperlerSays);

console.log("--------------------");

// ########################################
// Objects are mutable
// Assignment is "by reference" or better "sharing"
// ########################################
var dog = {
  "name": "kepler",
  "hopesAndDreams": "sleep all day"
};

//console.log(dog);

var kepler = dog;
kepler.hopesAndDreams = "treats";

console.log(kepler);

console.log(dog);

var a = b = c = {};

console.log(a == c);

var a = {}, b = {}, c = {};

console.log(a == c);


function addNumbers(nums, goodLuck){
  var result = nums[0] + nums[1];
  nums.push(result);

  goodLuck = goodLuck + " more text";
  console.log(goodLuck);
}

var myNumbers = [1, 2];
var stringTest = "try to update me";
addNumbers(myNumbers, stringTest);

console.log(stringTest);
console.log(myNumbers);

console.log("--------------------");


// ########################################
// Functions are objects!
// They have a `prototype` property used for inheritance
// ########################################
function Car(interior){
  this.interior = interior;
  console.log("This is: ", this);
}

Car.canBeep = true;
Car.prototype.canBeep = true;

var honda = new Car();

Car.prototype.accelerate = function(){
  console.log("vrrrrrrroooom");
};

console.log("honda.canBeep: ", honda.canBeep);
console.log("honda.accelerate()", honda.accelerate());


function Fruit(){
  this.hasSeeds = true;
  this.aboveGround = true;
}
Fruit.prototype.grow = function(){
  return "Getting bigger";
}

function Apple(color){
  this.color = color;
}
Apple.prototype = new Fruit();
Apple.prototype.grow = function(){
  return "Getting sweeter";
}

var fuji = new Apple('red');
var goldenD = new Apple('yellow');

console.log("fuji seeds: ", fuji.hasSeeds);
console.log("fuji grow:", fuji.grow());
console.log("fuji color:", fuji.color);

//console.log(new Car('leather'));

var honda = {
  'doors': 4,
  'honk': function(count){
    for(var i=1; i<= count; i++){
      console.log('Beep!');
    }

    console.log("Open all the doors! Count: ", this.doors);
  }
}

console.log(honda.doors);
honda.honk(5);
