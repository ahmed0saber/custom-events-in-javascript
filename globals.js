const btns = document.querySelectorAll(".product-wrapper button")
const cartNavIndicator = document.querySelector("header nav span")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const addToCartEvent = new CustomEvent("custom:add-to-cart", {
            detail: {
                productId: btn.dataset.id
            }
        })
        document.dispatchEvent(addToCartEvent)
    })
})

document.addEventListener("custom:add-to-cart", () => {
    cartNavIndicator.textContent = parseInt(cartNavIndicator.textContent) + 1
})
