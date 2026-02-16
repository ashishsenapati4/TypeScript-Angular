class Vehicle {
    constructor(public type: string, public wheels: number){}
}
const myVehicle = new Vehicle("Bike",2);
console.log(myVehicle);

//Private modifier...
class walet{
    #balance = 100; //# makes the property private
    getBalance(){
        return this.#balance;
    }
}
const w = new walet();
w.getBalance();
//---------------------------------------------------------
// getter setter...
class Vehicle2{
    private _wheels = 3;
    get wheels(){
        return this._wheels;
    }
    set wheels(value: number){
        if(value > 4) throw new Error("Wheels must be less than 5");
        this._wheels = value;
    }
}

//Composition...
class Heater{
    heat(){}
}
class WaterBoiler{
    constructor(private heater: Heater){} //WaterBoiler HAS-A Heater(Composition)

    boil(){
        this.heater.heat(); 
    }
}

//Interfaces...
//----------------------------------------------------------
//call signature interface...
interface DiscountCalculator{
    (price: number): number;
    description: string;
}
const apply50: DiscountCalculator = ((p) => p * 0.5) as DiscountCalculator;
apply50.description="50% discount applied";
console.log(apply50);
//------------------------------------------------------------

//index signatures...
interface SafetyRatings{
    [name: string]:number;
}

const carSafetyRatings:SafetyRatings = {
    Tata: 4.5,
    Honda: 4.2,
    Toyota: 4.6
}
//-----------------------------------------------------------
interface User{
    name: string;
}
interface User{
    age: number;
}
const user = {
    name: "Tommi",
    age: "59",
}
console.log(user);
//-------------------------------------------------------------
