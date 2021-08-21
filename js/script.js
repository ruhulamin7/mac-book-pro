
// id selector variable declaration
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');
// promo code field and button
const promoCodeInput = document.getElementById('promo-code-input');
const promoCodeApply = document.getElementById('promo-code-apply')

// cost calculation according to product price
function costCalculation(product, price) {
    if (product == 'memory') {
        memoryCost.innerText = price;
    } else if (product == 'storage') {
        storageCost.innerText = price;
    } else if (product == 'delivery') {
        deliveryCost.innerText = price;
    }
    costTotal();
}

// total cost sum calculation
function costTotal() {
    const totalCost = parseInt(bestPrice.innerText) +
        parseInt(memoryCost.innerText) +
        parseInt(storageCost.innerText) +
        parseInt(deliveryCost.innerText)
    totalPrice.innerText = totalCost;
    grandTotal.innerText = totalCost;
}

// checking promo code
function promoCodeMatcher() {
    const promoCode = promoCodeInput.value;
    if (promoCode == 'stevekaku') {
        const discount = (parseFloat(totalPrice.innerText) * 20) / 100;
        const newGrandTotal = parseFloat(totalPrice.innerText) - discount;
        grandTotal.innerText = newGrandTotal;
        promoCodeInput.value = ''
    }
}

// all event handler
document.getElementById('8gb-memory').addEventListener('click', function () {
    costCalculation('memory', 0);
})
document.getElementById('16gb-memory').addEventListener('click', function () {
    costCalculation('memory', 180);
})
document.getElementById('256gb-ssd').addEventListener('click', function () {
    costCalculation('storage', 0);
})
document.getElementById('512gb-ssd').addEventListener('click', function () {
    costCalculation('storage', 100);
})
document.getElementById('1tb-ssd').addEventListener('click', function () {
    costCalculation('storage', 180);
})
document.getElementById('free-delivery').addEventListener('click', function () {
    costCalculation('delivery', 0);
})
document.getElementById('charged-delivery').addEventListener('click', function () {
    costCalculation('delivery', 20);
})

// promo code handler
document.getElementById('promo-code-apply').addEventListener('click', function () {
    promoCodeMatcher();
})