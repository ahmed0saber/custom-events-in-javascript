const totalNumber = document.querySelector(".total-number span")

document.addEventListener("custom:add-to-cart", () => {
    totalNumber.textContent = parseInt(totalNumber.textContent) + 1
})
