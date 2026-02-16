let drink = "tea"

let cup = Math.random() > 0.5 ? 10 : 0.5;
console.log(cup);

// Union and Any..
const orders = ['12','20','45','28']
let currentorder:string|undefined;

for(const element of orders){
    if(element === '28'){
        currentorder = element;
        break;
    }
}
console.log(currentorder);

//typenarrowing..
function getTea(kind: string | number){
    if(typeof kind==='string'){
        return `Making ${kind} tea...`;
    }
    return `Tea Order: ${kind} tea...`;
}

function serveTea(msg?: string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala tea`;
}

//-----------------------------------------------

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`;
    }
}

class Cutting{
    serve(){
        return `Serving Cutting Chai`;
    }
}
function Serve(chai : KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
      console.log(chai.serve());
    }
}
let kc = new KulhadChai();
Serve(kc);

//-----------------------------------------------
// Creating custom types..(typescript typeguards)
type TeaOrder = {
    type: string;
    sugar: number;
}

//If isTeaOrder(obj) returns true, then obj is a TeaOrder. This is how TypeScript narrows types.
function isTeaOrder(obj:any):obj is TeaOrder{
    return(
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    );
}

function serveOrder(item:TeaOrder | string){
    if(isTeaOrder(item)){
        return `Serving ${item.type} tea with ${item.sugar} sugar`;
    }
    return `Serving custom tea: ${item}`;
}
//--------------------------------------------------
type MasalaTea = {type: "masala"; spiceLevel: number};
type GingerTea = {type: "ginger"; amount: number}

type Tea = MasalaTea | GingerTea;

function MakeTea(order: Tea){
    switch(order.type){
        case "masala":
            return `Masala chai`;
            break;
        case "ginger":
            return `Elaichi tea`;
            break; 
    }
}
//----------------------------------------------------

