export function addPayment(val:number){
    console.log(val);
}
export function getDetails(){
    console.log("getDetails method");
}

export default class Payment{
    constructor(public price:number){}
}