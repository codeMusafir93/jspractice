// Demonstration using default arguments

let tipPercent = function (total, percent = 0.2) {
    let tip = total * percent
    return(`Tip should be ${tip} for Rs. ${total}/-` )
 }

let waitersTip = tipPercent(545)
let waiter2Tip = tipPercent(760)

console.log(waitersTip)
console.log(waiter2Tip)