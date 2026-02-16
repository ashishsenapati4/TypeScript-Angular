//Generics...
function wrapInArray<T>(items: T): T[]{
    return [items];
}

wrapInArray("Hyundai");
wrapInArray(90);
wrapInArray(true);
const ff = wrapInArray({car: "Honda Civic"});
console.log(ff);
//---------------------------------------------
//complex generic types..
function pair<A, B>(a:A, b:B):[A,B]{
    return [a, b];
}
pair("tomato",true);
pair(13,7.8);

//Generic interface..
interface Box<T> {
    content : T;
}
const numberBox: Box<number> = {
    content: 90
}
const stringBox: Box<string> = {
    content: "balls"
}

//Generics real-world..
interface ApiPromise<T>{
    status: number;
    data: T;
}
const resp: ApiPromise<{color:string}> ={
    status:200,
    data:{color:"blue"}
};
console.log(resp);