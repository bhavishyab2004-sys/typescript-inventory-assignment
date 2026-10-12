 interface Product { 
    name: string; 
    price: number; 
    quantity: number; 
} 
 
 
// ERROR 1 
const productPrice: number = "50000"; 
 
 
// ERROR 2 
function calculateTotal(price: number, quantity: number): number { 
    return price * quantity; 
} 
 
const total: number = calculateTotal(50000);