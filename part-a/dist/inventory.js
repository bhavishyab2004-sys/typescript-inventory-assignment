"use strict";
let productName = "Laptop";
let price = 55000;
let inStock = true;
let tags = ["Electronics", "Computer", "Office"];
let productId = "LAP101";
function printProductInfo() {
    console.log(`Product: ${productName}, Price: ₹${price}, ` +
        `In Stock: ${inStock}, Tags: ${tags.join(", ")}, ` +
        `Product ID: ${productId}`);
}
printProductInfo();
// Example using any
let productDetails = "Laptop";
productDetails = 55000;
// Safer alternative using a specific type
let safeProductName = "Laptop";
// safeProductName = 55000; // TypeScript error
