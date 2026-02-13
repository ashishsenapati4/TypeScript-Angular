// /*var a = 90;
// function abcd()
// {
//     console.log(a);
//     let x = 78;
//     let y = 90;
// }*/
//arrays
// let a = [1,2,3,{name:"Ashish"},{name:90}]
// let arr:number[] = [1,2,"ashish"] -- error as the type is defined as number
//tuples
// let tuple: [string,number] = ["tom",1]
//enumerations - ENUMS
// enum UserRoles{
//     ADMIN= "admin",
//     GUEST= "guest",
//     SUPER_ADMIN="super_admin"
// }
// usage
// let role = UserRoles.SUPER_ADMIN
//Any, Unknown, Void, Null, Undefined, Never
//---------------------------------------------
// let b; //any: By default, TypeScript assigns this variable the type any.
// b = 12;
// b = "harsh";
// UNKNOWN---
// let b:unknown;
// b=12;
// b="ashish";
//--if its UNKNOWn then we have to clearly tell the condition
// if(typeof b === "string")
// {
//     b=b.toUpperCase();
// }
// Function
// function abcd() : void{
//     console.log("Hii. Not returning");
// }
// function abcde() : number{
//     console.log("Returning an Integer.");
//     return 23;
// }
// let f = null; --type for null is 'any'
// let b : string|null
// b="harsh";
// let a: undefined;
// function abcd() : never {
//     while(true){}
// }
// abcd();
// console.log("hey"); //this will never run as abcd() never returns
// console.log("This is 2nd day of learning TypeScript. Yeahhhh...");
//Type Inference & Type Annotation
//................................
// let a = "12"; //Ts inferred a as string
// let b : number | boolean | string; //Type anotation
// b = 12;
// b = false;
// b = "true";
//Type annotation for functions
// function abcd(a: number, b: string) : void{}
//Interface and Type aliases
//--------------------------
// interface User{
//     name: string;
//     email: string;
//     password: string;
//     gender?: string;
// }
// function getUserData(obj: User){
//    //use passed object and perform task... 
// }
// let user:User = {name:"Ashish",email:"ashis@gmail.com",password:"heheh"};
// getUserData(user);
//Extending interfaces
//---------------------
// interface User{
//     name: string;
//     email: string;
//     password: string;
// }
// interface Admin extends User{
//     admin: boolean;
// }
// function abcd(obj: Admin){
// }
//Fundamentals of Type Aliases
//----------------------------
// type sankhya = number;
// let sankhya = 90;
// console.log(sankhya); //90
// type arg = string | null;
// function abcd(obj: arg){
// }
// abcd("ashish");
//Intersection Types
//------------------
// type User = {
//     name: string;
//     email: string;
// }
// type Admin = User & {
//     getDetails(name: string) : void;
// }
// function abcd(obj: Admin){
//     obj.name="tom"
//     obj.email="";
//     obj.getDetails(obj.name)
// }
//Introduction to classes & Objects
//---------------------------------
//Classes and Objects
//-------------------
// class Device{
//     name="LG";
//     price=12000;
//     category="digital";
// }
// let d1 = new Device();
// let d2 = new Device();
// console.log(d1);
//Class definition
//Constructors
//------------
// class BottleMaker{
//     constructor(public name: string, public price: number){}
// }
// let b1 = new BottleMaker("Milton",1200);
// let b2 = new BottleMaker("Cello",500);
// class Person{
//     constructor(public name: string,public age: number=0){}
// }
// let p1 = new Person("Ashish");
// class Music{
//     constructor(public name: string, public artist: string, public thumbnail: string="thmb.jpg"){
//         if(!thumbnail){
//             this.thumbnail = "thumb.jpg";
//         }
//     }
// }
// let m1 = new Music("Hey India", "Ashish", "");
//THIS Keyword
//------------
// class Abcd{
//     name="tom";
//     changeIt() : void{
//         this.name="Ashish";
//     }
// }
// let obj = new Abcd();
// console.log(obj.name); //tom
// obj.changeIt();
// console.log(obj.name); //ashish
//Access modifiers
//----------------
//---PRIVATE----
// class BottleMaker{
//     constructor(private name: string){
//     }
//     changing(){
//         this.name="Cello";
//     }
// }
// let b1 = new BottleMaker("milton");
// // b1.name="Hilton"; //Error because constructor param is private
// b1.changing();
//----PUBLIC----
// class BottleMaker{
//     constructor(public name: string){ }
// }
// class MetalBottleMaker extends BottleMaker{
//     constructor(name: string){
//         super(name);
//     }
//     getValue() {
//         console.log(this.name);
//     }
// }
// let bottle = new MetalBottleMaker("Kilton");
// bottle.getValue();
//----PROTECTED----
// class BottleMaker{
//     protected name = "Milton";
// }
// class MetalBottleMaker extends BottleMaker{
//     public meterial="steel";
//     changeName(){
//         this.name="New Name"; //Accessible in sub-class because of protected modifier
//     }
// }
// let b1 = new MetalBottleMaker();
// b1.changeName();
//----Optional properties----
// class User{
//     constructor(public name:string, public age:number, public address?:string){}
// }
// let user1 = new User("Ashish",24); //address is optional here
//-----Readonly properties-----
// class User{
//     constructor(public readonly name: string){
//     }
//     changeName(){
//         this.name="hellohe"; //Cannot assign to 'name' because it is a read-only property.
//     }
// }
// let u1 = new User("Ashish");
//----Parameter properties----
// class User{
//     constructor(public name:string, public age:number, public address?:string){}
// }
//----Getters and setters----
// class User{
//     constructor(public _name: string, public age: number){}
//     get name(){
//         return this._name;
//     }
//     set name(value:string){
//         this._name = value;
//     }
// }
// let u1 = new User("Harsh",25);
//--------Static members---------
// class MyClass{
//     static version = 1.8;
//     static getRandom(){
//         return Math.random();
//     }
// }
//--------Abstract classes and methods--------
//    -----Functions----
//-----------------------------
// -------Function types--------
// function abcd(name:string, callback:(value:string)=>void){
//     callback(name);
// }
// abcd("Ashish",(value:string) => {
//     console.log(value);
// });
// function abcdef(name:string,age:number,cb:()=>void){
//     console.log(name+" : "+age);
//     cb(); //prints Dummy callback
// }
// abcdef("Tom",21,()=>{
//     console.log("Dummy callback");
// });
//------ default parameters ------
// function myFun(name: string, age: number, gender: string="female"){
//     console.log(name, age, gender);
// }
// myFun("harsh",32,"Male");
// myFun("Mira",21);
// ---------Rest parameters---------
//('...' -  rest/spread operator)
// -- rest
// ---------------------------------
// function sum(...numArr:number[]){
//     console.log(numArr);
// }
// sum(1,2,3,4,5,6,7,8);
// function friends(...strArr:string[]){
//     console.log(strArr);
// }
// friends("Ashs","hdhhd","hegfyg","yetr");
//-- spread
// ------------------------------------
// var arr = [1,2,3,4,5];
// var arr2 = [...arr]; //This creates a new array, arr2 has different reference in memory.
// console.log(arr2);
// ----- Function Overloading -----
// function abcd(a: string): void;
// function abcd(a: string, b: number): number;
// function abcd(a: string, b?: number): void | number {
//     if (b === undefined) {
//         console.log("hey");
//         return;
//     } 
//     else if (typeof a === "string" && typeof b === "number") {
//         console.log("Hii");
//         return 123;
//     } 
//     else {
//         throw new Error("something is wrong");
//     }
// }
// abcd("hey");
// abcd("hey",32);
//----GENERICS----
// Generic functions
// function log<T>(val:T){
//     console.log(val);
// }
// log("Ashish");
// log(12);
// // Generic interfaces
// interface IDemo<T>{
//     name: string,
//     age: number,
//     key: T
// }
// function abcd(obj: IDemo<string>){
//     log(obj.age);
//     log(obj.name);
//     log(obj.key);
// }
// abcd({name:"ashish",age:34,key:"berhfbuer"});
// Generic classes
//-----------------
// class BottleMaker<T>{
//     constructor(public val:T){}
// }
// let b1 = new BottleMaker("Milton");
// let b2 = new BottleMaker(90);
// console.log(b1.val);
// console.log(b2.val);
// //catch in generics...
// function abcd<T>(a:T, b:T):T{
//     return b; //return "str"-- not allowed
// }
//How to return "str"
// function ancd<T>(a: T, b: T):T{
//     return "hey" as T;
//    // return <T>"hey";
// }
// let temp = abcd("Hii","Hello");
// console.log(temp);
//--------MODULES---------
// ---Exporting and importing modules---
// import {addPayment, getDetails} from './payment.js';
// addPayment(34);
// getDetails();
// ---Default exports---
// import Payment from "./payment";
// let a = new Payment(90);
// console.log(a);
// TYPE ASSERTIONS
//-----------------
// Type assertion is used when you know more about the type of the variable then the typescript.
// let a: any = 12;
// <number>a;
// <string>a;
// (a as boolean);
// Type casting
// Non-null assertion operator
// TYPE GUARDS - type narrowing
//--------------
// function abcd(arg: string | number){
//     if(typeof arg === "number"){
//         //all number related method accessible
//         return "number";
//     }
//     else if(typeof arg === "string"){
//         //all string related methods accessible
//         return "string";
//     }
//     else{ throw new Error("Some error occurred");}
// }
// console.log(abcd(90));
// console.log(abcd("Geueu"));
//typeof instanceof
class TvRemote {
    switchTvOf() {
        console.log("switching of TV");
    }
}
class CarRemote {
    switchCarOf() {
        console.log("switching of Car");
    }
}
function switchOff(device) {
    if (device instanceof TvRemote) {
        device.switchTvOf();
    }
    else if (device instanceof CarRemote) {
        device.switchCarOf();
    }
    else {
        throw new Error("Some error occurred");
    }
}
let tvRemote = new TvRemote();
switchOff(tvRemote);
