//forceful type assertion...

let response: any = "42";
let numericLength:number = (response as string).length;

type Book = {
    name: string;
};

let bookString = '{"name":"who moved my cheese"}';
let bookObj = JSON.parse(bookString) as Book;

console.log(bookObj);
console.log(bookObj.name);
//---------------------------------------------------------
// const inputElement = document.getElementById('username') as HTMLInputElement; //type assertion
//-----------------------------------------------------------
//unknown & any

let value:any;
value = 'chai';
value = [12,13,13];
value = 6.3;
// value.toUpperCase(); //No complains from compiler

let value2:unknown;
value2 = 'chai';
value2 = [12,13,13];
value2 = 6.3;
// value2.toUpperCase(); -- it complains...
if(typeof(value2) === 'string'){
    value2.toUpperCase();
}

const data:unknown = "true";
const strData:string = data as string;
console.log(strData.toUpperCase());
//----------------------------------------------------------
//try-catch
try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}
//-----------------------------------------------------------
//never
type Role = "admin" | "user" | "superadmin";

function RedirectBasedOnRole(role:Role):void{
    if(role === 'admin'){
        console.log("Redirecting to Admin Dashboard");
        return;
    }
    if(role === 'user'){
        console.log("Redirecting to User Dashboard");
        return;
    }
    role; //type was never, once you dont hadle 'superuser' rol becomes superuser
}

function neverReturn():never{
    while(true){}
}