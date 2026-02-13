"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
function addPayment(val) {
    console.log(val);
}
function getDetails() {
    console.log("getDetails method");
}
class Payment {
    constructor(price) {
        this.price = price;
    }
}
exports.default = Payment;
