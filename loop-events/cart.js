// const addProduct = () => {
//     const productField = document.getElementById("product-name");
//     const quantityField = document.getElementById("product-quantitiy");
//     const product = productField.value;
//     const quantity = quantityField.value
//     productField.value = '';
//     quantityField.value = '';
//     console.log(product, quantity)
//     displayProduct(product, quantity);
//     getStorageShoppingCart(product, quantity)
//     saveProductLocalStorage(product,quantity)
// }
// const displayProduct = (product, quantity) => {
//     const ul = document.getElementById("product-container");
//     const li = document.createElement('li');
//     li.innerHTML = ` ${product}:${quantity}`;
//     ul.appendChild(li)

// }
// const getStorageShoppingCart = () => {
//     let cart = {}
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//         cart = JSON.parse(storedCart);
//     }
//     return cart;
// }
// const saveProductLocalStorage = (product, quantity) => {
//     const cart = getStorageShoppingCart();
//     cart[product] = quantity;
//     const cartStringified = JSON.stringify(cart)
//     localStorage.setItem('cart', cartStringified)

// }
// const displayProductFromLocalstorage = () => {
//     const savedCart = getStorageShoppingCart();
//     console.log(savedCart)
//     for (const product in savedCart) {
//         const quantitiy = savedCart[product]
//         console.log(product, quantitiy);
//         displayProduct(product,quantitiy)
//     }
// }
// displayProductFromLocalstorage()
