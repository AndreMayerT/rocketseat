let income = [10, 2]
let expenses = [10, 20]


let final_amount = function(income, expenses) {
    let positiveValue = 0
    let negativeValue = 0
    for (const value of income) {
        positiveValue += value
    }

    for (const value of expenses) {
        negativeValue += value
    }
    let amount_result = ""
    let amount = positiveValue - negativeValue
    if (amount >= 0) {
        amount_result = "Positivo"
    } else {
        amount_result = "Negativo"
    }
    return amount_result + ", " + amount
}


console.log(final_amount(income, expenses))