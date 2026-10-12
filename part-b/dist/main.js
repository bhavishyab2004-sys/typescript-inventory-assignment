"use strict";
const products = [
    { id: 1, name: "Laptop", price: 55000, quantity: 5, category: "Electronics" },
    { id: 2, name: "Wireless Mouse", price: 850, quantity: 10, category: "Accessories" },
    { id: 3, name: "Notebook", price: 100, quantity: 15, category: "Stationery" },
    { id: 4, name: "Office Chair", price: 4500, quantity: 4, category: "Furniture" }
];
let nextId = 5;
const form = document.getElementById("productForm");
const nameInput = document.getElementById("productName");
const priceInput = document.getElementById("productPrice");
const quantityInput = document.getElementById("productQuantity");
const categoryInput = document.getElementById("productCategory");
const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
const formMessage = document.getElementById("formMessage");
const emptyMessage = document.getElementById("emptyMessage");
function updateSummary() {
    const productCount = document.getElementById("productCount");
    const unitCount = document.getElementById("unitCount");
    const inventoryValue = document.getElementById("inventoryValue");
    productCount.textContent = String(products.length);
    unitCount.textContent = String(products.reduce((total, product) => total + product.quantity, 0));
    const value = products.reduce((total, product) => total + product.price * product.quantity, 0);
    inventoryValue.textContent = value.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    });
}
function renderProducts() {
    const query = searchInput.value.trim().toLowerCase();
    productList.replaceChildren();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query));
    emptyMessage.hidden = filteredProducts.length > 0;
    filteredProducts.forEach(product => {
        const item = document.createElement("article");
        item.className = "product-item";
        const details = document.createElement("div");
        const title = document.createElement("strong");
        title.textContent = product.name;
        const info = document.createElement("p");
        info.textContent =
            `${product.category} · ₹${product.price.toLocaleString("en-IN")} · ` +
                `Quantity: ${product.quantity}`;
        const status = document.createElement("p");
        status.textContent = product.quantity > 0 ? "In stock" : "Out of stock";
        details.append(title, info, status);
        const removeButton = document.createElement("button");
        removeButton.className = "remove-btn";
        removeButton.textContent = "Remove";
        removeButton.type = "button";
        removeButton.addEventListener("click", () => {
            const index = products.findIndex(p => p.id === product.id);
            if (index !== -1) {
                products.splice(index, 1);
                updateSummary();
                renderProducts();
            }
        });
        item.append(details, removeButton);
        productList.appendChild(item);
    });
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);
    const category = categoryInput.value;
    if (!name || !category || !Number.isFinite(price) ||
        price <= 0 || !Number.isInteger(quantity) || quantity < 0) {
        formMessage.textContent = "Please enter valid product details.";
        return;
    }
    products.push({
        id: nextId++,
        name,
        price,
        quantity,
        category
    });
    form.reset();
    formMessage.textContent = "Product added successfully!";
    updateSummary();
    renderProducts();
});
searchInput.addEventListener("input", renderProducts);
updateSummary();
renderProducts();
