type Cup = {size: string};
let smallCup: Cup = {size: "200ml"};
let bigCup = {size: "500ml", material: "Glass"}
smallCup = bigCup; //no error, minimum condition (size) satisfied

//--------------------------------------------
type Item = {name: string, quantity: number};
type Address = {location: string, pin: number};

type Order = {
    orderId: string;
    items: Item[];
    address: Address
};
//--------------------------------------------
//Partial, Required, Pick, Omit...

type Car = {
    name : string;
    price : number,
    isBlue : boolean
}

//Partial<Car> makes all properties optional...
const upgradeCar = (updates: Partial<Car>) => {
    console.log(`upgrading Car with `,updates);
}
upgradeCar({name:"Bugatti",price:900000,});
//----------------------------------------------
type Car2 = {
    name : string;
    price : number,
    isBlue : boolean
}

//Required<Car2> makes all properties mandatory...
const upgradeCar2 = (updates: Required<Car2>) => {
    console.log(`upgrading Car with `,updates);
}
upgradeCar2({name:"Bugatti",price:900000,isBlue:false});
//-----------------------------------------------
type Car3 = {
    name : string;
    price : number,
    color : string,
    hasSunRoof: boolean
}

//you can Pick properties to include from another type..
type basicCar = Pick<Car3, "name" | "price" | "color">;

const myCar : basicCar = {
    name:"suzuki",
    price:700000,
    color: "coral red"
}
//------------------------------------------------
type Car4 = {
    name : string;
    price : number,
    color : string,
    hasSunRoof: boolean,
    secretExhaust: string
}

//you can Omit properties to exclude them from your type..
type basicCar2 = Omit<Car4, "secretExhaust">;

const myCar2 : basicCar2 = {
    name:"suzuki",
    price:700000,
    color: "coral red",
    hasSunRoof: false
}