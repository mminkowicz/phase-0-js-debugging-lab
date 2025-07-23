function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
debugger
    for (let i = 1; i <= quantity; i++) {
        totalPrice += pricePerItem;
    }
debugger
    if (quantity >= 10) {
        totalPrice *= 0.9;
    }
debugger
    return totalPrice;
}

console.log(calculateDiscountedPrice(5, 20))

module.exports = calculateDiscountedPrice;



