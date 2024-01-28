const addProduct = () => {
    const productField = document.getElementById("product-name");
    const qualityField = document.getElementById("product-quantitiy");
    const product = productField.value 
    productField.value = ''
    const quality = qualityField.value
    qualityField.value = ''  
    displayProduct(product, quality)
    getStorageShoppingCart(product, quality)
    saveProductLocalStorage(product,quality)
}
const displayProduct = (product,quality) => {
    const ul = document.getElementById("product-container");
    const li = document.createElement('li');
    li.innerHTML = `${product}:${quality}`;
    ul.appendChild(li)
}

const getStorageShoppingCart = () => {
    let cart = {}
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart
}
const saveProductLocalStorage = ( product,quality) => {
  
    const cart = getStorageShoppingCart()
    cart[product] = quality;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}
const displayProductFromLocalstorage = () => {
    const savedCart = getStorageShoppingCart()
    for (const product in
        savedCart) {
        const quality = savedCart[product];
        console.log(product, quality);
        displayProduct( product,quality)
    }
}
displayProductFromLocalstorage()