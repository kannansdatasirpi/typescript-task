//Every variable should have types
let a: number = 10;
let b: string = 'abc';
let c: boolean = false;

console.log(a);
console.log(b);
console.log(c);
document.getElementById('types').innerHTML = a;
document.getElementById('types1').innerHTML = b;
document.getElementById('types2').innerHTML = c;
//Try to use user-defined types 
//class(instance of object)

class car { 
    engine:string; 
 
    constructor(engine:string) { 
       this.engine = engine 
    }  
    
    disp():void { 
       console.log("Function displays Engine is  :   "+this.engine) 
    } 
 } 
  
 var obj = new car("v12")
 
 console.log("Reading attribute value Engine as :  "+obj.engine)  
 
 obj.disp();


 
 //interface
 interface cartoon { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:cartoon = { 
    firstName:"Tom",
    lastName:"Jerry", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 document.getElementById('interface').innerHTML = ("Customer Object ") 
 document.getElementById('interface1').innerHTML = (customer.firstName) 
 document.getElementById('interface2').innerHTML = (customer.lastName) 
 document.getElementById('interface3').innerHTML = (customer.sayHi())  
 
 var employee:cartoon = { 
    firstName:"peter",
    lastName:"parker", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 document.getElementById('interface4').innerHTML = ("Employee  Object ") 
 document.getElementById('interface5').innerHTML = (employee.firstName);
 document.getElementById('interface6').innerHTML = (employee.lastName);

 //array
 var alphas:string[]; 
 alphas = ["1","2","3","4"] 
 document.getElementById('user1').innerHTML = (alphas[0]); 
 document.getElementById('user2').innerHTML = (alphas[1]);


//tuple
var mytuple = [100,"Hello world"];
document.getElementById('tup1').innerHTML = (mytuple[0]);
document.getElementById('tup2').innerHTML = (mytuple[1]);

//enum
enum Direction {  
    Up = 0,  
    Down,  
    Left,  
    Right,  
}  

document.getElementById('demo2').innerHTML +=`${JSON.stringify(Direction)}`;
