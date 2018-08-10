let myAccount = {
    name : 'Andrew',
    expenses : 230,
    income: 5000
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    account.income = account.income - account.expenses
    }
addExpense(myAccount, 90)
console.log(myAccount)
//console.log(myAccount.income)
