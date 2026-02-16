// Arrays..............
const carColors: string[] =["Blue","Red","White"]
const carPrice: number[] = [100000,200000];
const rating: Array<number> = [4.5, 5.0];

type Car = {
    name: string,
    color: string
}
//Array of objects...
const cars: Car[] = [
   {name:"Suzuki", color:"white"},
   {name:"Honda", color:"red"},
];
//readonly array..
const cities: readonly string[] = ["BBSR", "Hyderabad"];
// cities.push("Pune"); --Not allowed
//------------------------------------------------------
// Tuples----
let bikeTuple: [name:string, milage:number];
bikeTuple = ["TVS", 39];
bikeTuple = ["Honda", 70];
//------------------------------------------------------
type Person = {
    name: string,
    age: number,
};

//Returning multiple values from a function using tuple..
function getUser(user: Person):[string, number]{
    user.name = user.name+" Senapati";
    user.age = user.age - 40;
    return [user.name,user.age];
}
const pData:[string,number] = getUser({name:"Ashish",age:78});
console.log(pData);
//-------------------------------------------------------
// Enums....
enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}
const cupSize = CupSize.LARGE;