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
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
})(Role || (Role = {}));
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 4] = "ADMIN";
    Role2[Role2["USER"] = 5] = "USER";
})(Role2 || (Role2 = {}));
var person = {
    name: 'Ahsan',
    role: Role2.USER
};
console.log(person.role);
