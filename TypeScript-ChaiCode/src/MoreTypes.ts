type teaOrder = {
    type: string;
    sugar: number;
    strong:boolean;
}

function makeTea(order: teaOrder){
    console.log(order);
}

function serveTea(order: teaOrder){
    console.log(order);
}
//------------------------------------------------
type TeaRecipe = {
    water: number;
    milk: number;
}
class MasalaTea implements TeaRecipe{
    water = 100;
    milk = 50;
}
//------------------------------------------------
// type CupSize = "small" | "large";
//  implements only works with object types (interfaces or object shapes)
//  — not with unions or primitives.
// class TeaBasic implements CupSize{
    
// }
//--------------------------------------------------
interface CupSize{
    size: "small" | "large";
}
class Tea implements CupSize{
    size: "small" | "large" = "small";
}
//--------------------------------------------------
//Intersection type..
type BaseTea = {teaLeaves: number};
type Extra = {spices: number};

type MasalaTea2 = BaseTea & Extra;
const cup: MasalaTea2 = {
    teaLeaves: 2,
    spices: 1
}
//-----------------------------------------------------
//readonly..
type Config = {
    readonly appName: string;
    version: number
}
const cfg: Config = {
    appName : "Oddo",
    version: 2
}
// cfg.appName = "uehuue"; -- Not allowed(readonly)
//-----------------------------------------------------


