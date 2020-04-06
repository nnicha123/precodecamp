const account = {
    name:'Andrew Mead',
    expenses:[],
    income:[],
    addExpenses:function(description,amount){
        this.expenses.push({
            description:description,
            amount:amount
        });
    },
    addIncome:function(description,amount){
        this.income.push({
            description:description,
            amount:amount
        });
    },

}

// account.addExpenses('Aircon',10);
// console.log(account.expenses);
account.addIncome('Wage',100);
// console.log(account.income)
account.addIncome('Hello',1000);
account.addIncome('123',123);
console.log(account.income);
