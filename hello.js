//Every variable should have types
var a = 10;
var b = 'abc';
var c = false;
console.log(a);
console.log(b);
console.log(c);
document.getElementById('types').innerHTML = a;
document.getElementById('types1').innerHTML = b;
document.getElementById('types2').innerHTML = c;
//Try to use user-defined types 
//class(instance of object)
var car = /** @class */ (function () {
    function car(engine) {
        this.engine = engine;
    }
    car.prototype.disp = function () {
        console.log("Function displays Engine is  :   " + this.engine);
    };
    return car;
}());
var obj = new car("v12");
console.log("Reading attribute value Engine as :  " + obj.engine);
obj.disp();
var customer = {
    firstName: "Tom",
    lastName: "Jerry",
    sayHi: function () { return "Hi there"; }
};
document.getElementById('interface').innerHTML = ("Customer Object ");
document.getElementById('interface1').innerHTML = (customer.firstName);
document.getElementById('interface2').innerHTML = (customer.lastName);
document.getElementById('interface3').innerHTML = (customer.sayHi());
var employee = {
    firstName: "peter",
    lastName: "parker",
    sayHi: function () { return "Hello!!!"; }
};
document.getElementById('interface4').innerHTML = ("Employee  Object ");
document.getElementById('interface5').innerHTML = (employee.firstName);
document.getElementById('interface6').innerHTML = (employee.lastName);
//array
var alphas;
alphas = ["1", "2", "3", "4"];
document.getElementById('user1').innerHTML = (alphas[0]);
document.getElementById('user2').innerHTML = (alphas[1]);
//tuple
var mytuple = [100, "Hello world"];
document.getElementById('tup1').innerHTML = (mytuple[0]);
document.getElementById('tup2').innerHTML = (mytuple[1]);
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
document.getElementById('demo2').innerHTML += "".concat(JSON.stringify(Direction));
