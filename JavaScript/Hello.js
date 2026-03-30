//sorting...
let data = [2,54,12,5,67,45,90];
console.log(data.sort()); //sorts alphabetically...

let compareAsc = (a,b) => {
    return a-b;
}
console.log("Custom sort.(Ascending...)")
console.log(data.sort(compareAsc));

let compareDsc = (a,b) => {
    return b-a;
}
console.log("Custom Sort.(Descending..)");
console.log(data.sort(compareDsc));

//splice & slice...
let num = [2,54,12,5,67,45,90];
let deletedItems = num.splice(2,3,900,901,902);
console.log("After Splice: "+num);
console.log("Deleted Items: "+deletedItems);
console.log(typeof(deletedItems));

let numSlice = num.slice(2,4);
console.log("After Slice: "+numSlice);

//forEach in js..
num.forEach((number, index) => {
    console.log("Index: "+index+" Number: "+number);
})

//chapter 5 practice set..
// let num2 = [1,2,3,4,5,67];
// let a = prompt('Enter a number: ');
// a = Number.parseInt(a);
// num2.push(a);
// console.log(num2);

//use reduce to calculate factorial of first n natural numbers..
let fact = [1,2,3,4,5,6];
let res = fact.reduce((val1,val2) =>{
    return val1 * val2;
});
console.log("Factorial of 6: "+res);