const account = {
    name: 'Istvan Acs',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let totalBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        totalBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income. $${totalExpenses} in expense`
    },

}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())