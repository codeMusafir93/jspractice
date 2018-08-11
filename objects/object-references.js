let myAccount = {
    name : 'Andrew',
    expenses : 230,
    income: 5000,
   
}

let chinmaysAccount = {
    name: 'Chinmay',
    expenses : 7890,
    income: 250000
}

let addExpense = function (account, amount) {
    account.income = account.income
    account.expenses = account.expenses + amount
    account.balance = account.income - account.expenses
    }
addExpense(myAccount, 90)
console.log(myAccount)
addExpense(myAccount, 12)
console.log(myAccount)
addExpense(myAccount, 3.56),
console.log(myAccount)
addExpense(myAccount, 2.32)
console.log(myAccount)
addExpense(myAccount, 3.2)
console.log(myAccount)
addExpense(myAccount, 11.3)
console.log(myAccount)
addExpense(myAccount, 1.43),
console.log(myAccount)
addExpense(chinmaysAccount, 134)
console.log(chinmaysAccount)
addExpense(chinmaysAccount, 21)
console.log(chinmaysAccount)
addExpense(chinmaysAccount, 45.9)
console.log(chinmaysAccount)
addExpense(chinmaysAccount, 543.76)
console.log(chinmaysAccount)
addExpense(chinmaysAccount, 112)
console.log(chinmaysAccount)
addExpense(chinmaysAccount, 146.1)
console.log(chinmaysAccount)
addExpense(chinmaysAccount, 87.6)
console.log(chinmaysAccount)


//console.log(myAccount.income)
