
let productName: string = "Laptop";
let price: number = 55000;
let inStock: boolean = true;
let tags: string[] = ["Electronics", "Computer", "Office"];
let productId: number | string = "LAP101";

function printProductInfo(): void {
    console.log(
        `Product: ${productName}, Price: ₹${price}, ` +
        `In Stock: ${inStock}, Tags: ${tags.join(", ")}, ` +
        `Product ID: ${productId}`
    );
}

printProductInfo();

// Example using any
let productDetails: any = "Laptop";
productDetails = 55000;

// Safer alternative using a specific type
let safeProductName: string = "Laptop";
// safeProductName = 55000; // TypeScript error
