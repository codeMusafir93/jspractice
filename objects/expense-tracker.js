let ChinmayTare = {
    name : 'Chinmay Tare',
    expenses : 0,
    income : 0
}

let addIncome = function (account, amount ) {
    account.income = account.income + amount
    console.log(`Income is Rs. ${account.income}`)
    }

let addExpense = function (account, amount ) {
    account.expenses = account.expenses + amount
    console.log(`Expense is Rs. ${account.expenses}`)
}

let getAccountSumary =  function (account) {
    console.log(`Account for ${account.name} has Rs.${account.income} in income. Rs.${account.expenses} in expenses `)
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
    //console.log(account)
}

addIncome(ChinmayTare, 10000)
console.log(ChinmayTare)
addExpense(ChinmayTare, 200)
console.log(ChinmayTare)
getAccountSumary(ChinmayTare)
resetAccount(ChinmayTare)
console.log(ChinmayTare)