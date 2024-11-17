const addToCartButtons = document.querySelectorAll('.btn-primary');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productTitle = button.parentElement.querySelector('.card-title').innerText;
        addToCart(productTitle);
    });
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} adicionado ao carrinho!`);
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Itens no carrinho:", cart);
}