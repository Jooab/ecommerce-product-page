const cartIcon = document.getElementById('cart')
const cartRequest = document.getElementById('cart-request')
const cartContent = document.getElementById('cart-content')
const minusButton = document.getElementById('minus-button')
const plusButton = document.getElementById('plus-button')
const productQuantity = document.getElementById('product-quantity')
const productsThumbnail = document.querySelectorAll('.product-thumbnail')
const productImage = document.querySelector('.product')
const nextButton = document.getElementById('right-arrow')
const prevButton = document.getElementById('left-arrow')
const addToCardButton = document.getElementById('cart-button')
const cartProductQuantity = document.getElementById('cart-product-quantity')
const hamburguerMenu = document.getElementById('hamburguer-menu')
const navList = document.getElementById('nav-list')

function removeSelectedClassToAProductThumbnail(){
    const selectedProductThumbnail = document.querySelector('.product-thumbnail.selected')
    selectedProductThumbnail.classList.remove('selected')
}

productsThumbnail.forEach((productThumbnail, index) =>{
    productThumbnail.addEventListener('click', ()=>{
        productImage.src = `src/images/image-product-${index}.jpg`
        removeSelectedClassToAProductThumbnail()
        productThumbnail.classList.add('selected')
    })
})

cartIcon.addEventListener('click', () => {
    cartRequest.classList.toggle('close')
})

plusButton.addEventListener('click', () => {
    quantity += 1
    productQuantity.textContent = quantity
})

minusButton.addEventListener('click', () => {
    if (quantity >= 1) {
        quantity -= 1
        productQuantity.textContent = quantity
    }
})

let productModalIndex = 0


nextButton.addEventListener('click', ()=>{

    if(productModalIndex === 3){
        return
    } else {
        productModalIndex += 1
        productImage.src = `src/images/image-product-${productModalIndex}.jpg`
    }
})

prevButton.addEventListener('click', ()=>{
    if(productModalIndex === 0){
        return
    } else {
        productModalIndex -= 1
        productImage.src = `src/images/image-product-${productModalIndex}.jpg`
    }   
})

let quantity = 0

addToCardButton.addEventListener('click', ()=>{

    if(quantity === 0){
        return
    } else {
        cartContent.innerHTML = `<div class="cart-content-filled">
                                    <img src='src/images/image-product-0.jpg' class='cart-content-image'>
                                    <div>
                                        <p class='cart-content-product-title'>Fall Limited Edition Sneakers</p>
                                        <span class="price-quantity">$125.00 x ${quantity}</span>
                                        <span class="product-total-price">${'$' + 125 * quantity + '.00'}</span>
                                    </div>
                                    <img src='src/images/icon-delete.svg' id='delete-icon' class="delete-icon">
                                </div>
                                <button class='checkout-button'>Checkout</button>`
        
        cartProductQuantity.textContent = quantity
        cartProductQuantity.classList.add('open')
    }

    document.getElementById('delete-icon').addEventListener('click', ()=>{
        cartContent.innerHTML = `<p class="empty-cart-message">Your cart is empty</p>`
        cartProductQuantity.classList.remove('open')
    })
})

hamburguerMenu.addEventListener('click', ()=>{
    navList.classList.toggle('open-menu')

    if(navList.classList.contains('open-menu') === true){
        hamburguerMenu.src = "src/images/icon-close.svg"
    } else {
        hamburguerMenu.src = "src/images/icon-menu.svg"
    }
})


