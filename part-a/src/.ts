
function calculateDiscount(
    price: number,
    discountPercent: number = 10
): number {
    return price - (price * discountPercent / 100);
}

function applyBulkDiscount(
    prices: number[],
    discountRate: number
): number[] {
    return prices.map(
        price => price - (price * discountRate / 100)
    );
}

// Calculate a discount for one product
console.log("Price after discount:", calculateDiscount(1000));

// Calculate a discount using a custom percentage
console.log("Price after 20% discount:", calculateDiscount(1000, 20));

// Apply a discount to multiple products
const prices: number[] = [1000, 2000, 3000];
console.log("Bulk discounted prices:", applyBulkDiscount(prices, 10));

// Demonstrate block scope using let
for (let i = 1; i <= 3; i++) {
    console.log("Loop number:", i);
}

// The variable i is not accessible here because it is block-scoped.
