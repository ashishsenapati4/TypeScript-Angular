//map...
let arr = [67,89,99];
let arrMap = arr.map((value, index, array) => {
    console.log(value+" "+index+" "+array);
    return value + index;
});
console.log("arrMap: "+arrMap);

//filter..
let arr2 = [34,23,19,0,3,5];
let a2 = arr2.filter((value) => {
    return value < 10;
})
console.log("Filtering value less then 10: "+a2);

//reduce -- reduces an array to a single value(returns an array)
let arr3 = [1,2,3,4,5,6];
let redAr = arr3.reduce((value1 , value2) =>{
    return value1 + value2;
});
console.log(redAr);