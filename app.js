"use strict";
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
// >>>>> >>>>>>Abstarct classes;
//  abstract class Department {
//  abstract printEmployees():number
// }
// class ITDepartment extends Department {
//   printEmployees():number{
//       return 2
//   }
// }
// >>>>>>>>>>>>>  Singleton constructor;
// when we use private keyword with the constructor , it means we can't create a new instance of that class with the new keyword, it becomes singleton;
// class Department{
//    private constructor(public name1:string){}
//     printName(){
//         this.name1;
//     }
//     static printEmployees(){
//         console.log("employees")
//     }
// }
// const accounting = new Department("Accounting")   >>> this  line will throw an exception as the above constructor is singleton
// Just for revision;
// to define the type of an object using type aliases
// type Person={
//     name: string
//     age:number
//     session:string
// }
// const student:Person={
//     name:"ahsan",
//     age:21,
//     session:"Evening"
// }
// >>>>>> Interfaces;
// interface Person{
//    name: string;
//    age:number
// }
// const  student:Person={
//     name:"Ahsan",age:21
// }
// Interfaces used with classes;
// interface Person{
//     name1: string;
//     age:number
// }
// interface Hobbies{
//     hobbyName:string;
// }
// class Teacher implements Person, Hobbies{
//     constructor(public name1:string, public age:number, public hobbyName:string){}
// }
// const teacher2:Teacher= {
//    name1:"bilal",
//    age:22,
//    hobbyName:"Programming"
// }
// const teacher1= new Teacher("Asad",24,"Cricket")
// >>>>>>readonly interface methods and properties
// interface Person {
//    readonly age:number;
//     session:string;
//     greet(message:string):string
// }
// const student:Person={
//     age:21,
//     session:"Evening",
//     greet(message:string){
//     return message
//     }
// }
// student.greet("Hii , Good Morning , have a nice day");
//  >>>>.. Extending Interfaces;
// interface Named{
//     name:string
//     session:string
// }
// interface Person extends Named{
//      age:number
// }
// const student:Named={
//     name:"Ahsan",
//     session:"Evening"
// }
//>>.    Interfaces as Function types
// this is how we define funtion types using type aliases
// type Add=(n1:number,n2:number)=>number;
// const demo:Add=(num1:number,num2:number)=>{
//   return num1+num2
// }
// now using Interfaces;
// interface Add{
//     (n1:number,n2:number):void
// }
// const demo:Add=(n1:number,n2:number)=>{
//     return 2
// }
// demo(2,3)
// Optional Parameters in interfaces;
// interface Person {
//   name?: string;
//   age?: number;
//   session: string;
// }
// const student: Person = {
//     session: 'Morning',
// };
// Optional Parameters in classes
// class Department{
//     constructor(public salaries?:number){}
//     getSalaries?(){
//         return "Ahsan"
//     }
// }
// const accounting= new Department()
// Intersection types;;
// Note : when it is used with objects types, it is just like interface inheritance(combine of two types) but when it is used with union types it is just the common of two union types as we see the examples of both in the below
// interface Named {
//   name: string;
// }
// interface Person {
//   age: number;
//   salaries: number;
// }
// type Combine = Named & Person;
// const student: Combine = {
//   name: 'Ahsan',
//   age: 21,
//   salaries: 23,
// };
// type IsAbsent=number | boolean;
// type OnSale=string | number;
// type Combine= IsAbsent & OnSale
//  5.2 >>>.>> type Guards;
// function add(num1:string| number , num2:string |number){
//     if(typeof num1==="string" || typeof num2 ==="string"){
//       return num1.toString()+num2.toString()
//     }
//     return num1+ num2
// }
// add(11,"Ahsan")
// Type guards when dealing with objects;
// interface Person{
//     name:string;
// }
// interface Product{
//     name:string;
//     price:number;
//     description:string
// }
// type Combine= Product | Person;
// function result(data:Combine){
//     console.log(data.name);
//      if("price" in data){
//          console.log(data.price)
//      }
// }
// when dealing with classes;;;;;;
// class Car {
//   drive() {}
// }
// class Truck {
//   loadCar() {}
//   drive() {}
// }
// type Vehicle = Truck | Car;
// function seeResult(v: Vehicle) {
//   console.log(v.drive());
//   if ('loadCar' in v) {
//     v.loadCar();
//   }
//   if (v instanceof Truck) {
//     v.loadCar();
//   }
// }
// >>> >>>>>>>>Discrementted Unions :::The concept of discriminated unions is how TypeScript differentiates between those objects and does so in a way that scales extremely well, even with larger sets of objects. let's see it's examples;
// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }
// interface Snake {
//   type: 'snake';
//   runningSpeed: number;
// }
// type Animal = Snake | Bird;
// function testing(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'snake':
//       speed = animal.runningSpeed;
//   }
// }
// testing({ type: 'bird', flyingSpeed: 4 });
// type Casting;
// const input=document.getElementById("user-input")! as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById('user-input')!;
// input.value = 'Hii there';
// Indexable Type in type_script;
// interface Person {
//   [properties: string]: string | number | boolean;
// }
// const student: Person = {
//   age: 'Sixty four',
//   name: 'Ahsan',
//   IsAbsent: true,
// };
// >>>>>>>>>> funtion overloads:
// function add(a:number,b:number):number
// function add(a:string,b:number):string
// function add(a:number,b:string):string
// function add(a: number | string, b: string | number) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
// add("Asad",3)
// add(4,5)
// add(3,"qe")
// >>>>>>Optional Chaining ;
// const student={
//     name:"Ahsan",age:21
// }
// console.log(student.session?.classes)
// nullish coealsing (??)
// nullish coalescing::: The nullish coalescing operator ( ?? ) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand
// const userData = "jjjj";
// const result = userData && 'Default';
// const data="jjjj";
// const result1 = data ?? 'Default';
// >>>>>>>>> // 6 >>>>>>>>.. Generics ;
// TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.
// 6.1 Built in Generics;
// const names: Array<string> = ['ahsan', 'asad', 'Abubakar'];
// const names:string[]= ['ahsan', 'asad', 'Abubakar'];
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(12);
//     reject('Something Goes wrong');
//   }, 2000);
// });
// promise.then((data) => console.log(data)).catch((err) => console.log(err));
// Built in Generics;
// function add(a: object, b: object) {
//   return Object.assign(a, b);
// }
// const result = add({ name: 'ahsan' }, { age: 22 });
// now make this object with generics
// function add<T, U>(a: T, b: U) {
//   return Object.assign(a, b);
// }
// const result = add({ name: 'Ahsan' }, { age: 22 });
// result.name;
// Generics Constraints
// function add<T extends object, U extends object>(a: T, b: U) {
//   return Object.assign(a, b);
// }
// const result = add({}, { age: 22 });
// console.log(result);
// Now lets another exmaples;
// interface Lengthy {
//   length: number;
// }
// function printSomething<T extends Lengthy>(element: T) {
//   let text;
//   if (element.length) {
//     text = 'Got a value';
//   }
//   return [element, text];
// }
// console.log(printSomething('Ahsan'));
