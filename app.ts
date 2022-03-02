// using types
// working with string, number and boolean;

// >> when working with variables
// let name1:string="Ahsan";

//>>>>> when working with functions paramters
// function add(num1: number, num2: number) {
//   console.log(num1 + num2);
// }
// add(2, 2);

// >>> working with Object Types;

// const person: { name: string; age: number } = {
//   name: 'Ahsan',
//   age: 21,

// };

// console.log(person);

//>>>>>> whenWorking with Nested Objects;

// const products: {
//     name: string;
//     details: {
//         description: string;
//         title: string;
//     };
// }={
//     name:"iPhone",
//     details:{
//         description:"iPhone is a very good phone",
//         title:"iPhone is a very good"
//     }
// };

//  >>>>>>  working with array types
// const fruits: string[] = ['apples', 'orange', 'graphes'];
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// const numbers:any[]=[1.3,6,7, "Ahsan",null ]

// >>>>>>> wokring with the Tuple Types;

// const hobbies:[string,string,string]=["Programming","Cricket","Badminton"];
// hobbies.push() it will not throw any error;
// hobbies[0]="Football"; it will be valid;

// working with the enum types;

// enum Role {
//   ADMIN = 'admin',
//   USER = 'user',
// }
// enum Role2 {
//   ADMIN = 4,
//   USER,
// }

// const person: { name: string; role: Role } = {
//   name: 'Ahsan',
//   role: Role.ADMIN,

// };
// console.log(person.role);

// working with the union types
// const class1:string | number | boolean= true ;

// >>> working with the literal types;

// const person:{
//     name:"Ahsan" | "Ali" ;
//     age:number;
// }={
//     name:"Ali",
//     age:22
// }

// >>>>>> working with the type aliases

// type PersonType={
//     name:string;
//     age:number;
//     session:string;
// }

// const person:PersonType={
//     name:"Ahsan",
//     age:22,
//     session:"Evening"
// }

// >>>>> function return type and void keyword;

// function add(num1:number,num2:number){
//     return num1 + num2;
// }

// add(2,6)

// >>>>..>>>>> Function as Types;
// let result:Function;

// function demo(num1:number,num2:number){
//     return num1 + num2;
// }

// function printResult(msg:string,num2:number){
//     return "ah"
// }

// // result=demo;

// let result:(num1:number,num2:number)=>string;

// function show(n:number,n2:number){
//     return "Ahsan"
// }
// result=show;

// working with the callback types;

// function demo(num1:number,cb:(msg:string)=>string){
//   cb("Ahsan")
// };

// demo(2,()=>{
//   return "Ahsan"
// })

// working with the unknow type;
// let msg:unknown;
// let result:string;
// result=msg

// working with the never type;

// function generateError(msg: string, statusCode: number): never {
//   throw { msg, statusCode };
// }

// generateError('Please add a name', 400);

// >>>2  TypeScript Compiler and its configuration >>>>>

// 2.1  // 2.5 >>>>>>Understanding typescript core libs;

// const button = document.querySelector('button')!;
// button.addEventListener('click', () => {
//   console.log('clicked');
// });
// let name: string = 2;

// Classes and Interface;

// class Department {
//   name: string;
//   salaries: number;
//   constructor(n: string, s: number) {
//     this.name = n;
//     this.salaries = s;
//   }

//   getSalaries() {
//     return this.salaries;
//   }
// }

// const accounting = new Department('Accounting', 255000);

// // thing to keep in mind
// const accountingCopy = {
//   getData: accounting.getSalaries,
// };
// console.log(accountingCopy.getData());

// Private and Public accessors;

// class Department {
//   private name: string;
//   private salaries: number;
//   constructor(n: string, s: number) {
//     this.name = n;
//     this.salaries = s;
//   }

//   public getSalaries() {
//     return this.salaries;
//   }
// }

// const accounting = new Department('Accounting', 255000);

// shorthand Initialization

// class Department {
//   constructor(private name: string, public salaries: number) {}

//   getSalaries() {
//     return this.salaries;
//   }
// }

// const accounting = new Department('Accounting', 255000);

// readonly accessor/modifier;

// class Department {
//   constructor(private readonly id: number = 24) {}
// }

// const accounting = new Department();

// >>>>.. Inheritance;

// class Department {
//   constructor(public id: number, public name: string) {}
// }

// class ITDepartment extends Department {
//   constructor(public salaries: string[]) {
//     super(2, 'IT');
//   }
// }

// const it = new ITDepartment([]);
// console.log(it);

//>>>>>>>> protected modifier;

// class Department {
//   constructor(protected name: string) {}

//   displayName() {
//     console.log('Hello world');
//   }
// }

// class ITDepartment extends Department {
//   constructor() {
//     super('IT');
//     this.name;
//   }
// }

//   >>>>>> Overriding Properties;

// class Department{
//      constructor(){}

//      displayName(name:string,id:string):void{
//         console.log(name);
//      }
// }

// class ITDepartment extends Department{
//   constructor(){
//     super()
//   }

//   displayName(name:string,id:string):void{

//   }

// }

// >>>>>>>> Getters and Setters ......

// class Department {
//   get displayName() {
//     return { name: this.name, employees: this.employees };
//   }

//   set employeeAdd(value: string) {
//     this.employees.push(value);
//   }

//   constructor(private name: string, private employees: string[]) {}
// }

// const accounting = new Department('IT', []);

// accounting.employeeAdd = 'Ahsan';

// console.log(accounting.displayName);

// >>>>>>>>>>>>>  static methods and properties;

// Static Methods and Properties: These are the methods and properties that are only available to the class and in order to see them we don;t have to create a new instance of the class  like we do so by using the new keyword as they are only available to the class itself ;
// Note, when some property or method are using the static keyword, we can't get them in a class using this keyword for using them in a class we have to  write the class keyword and then these properties or methods name with the dot notation.

// class Department {
//   static id: number;

//   constructor() {}

//   static displayId() {}
// }

// const accounting = new Department();

// Department.displayId();
