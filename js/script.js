
// button select

const memory8GB = document.getElementById('8gb-memory');
const memory16GB = document.getElementById('16gb-memory');
const storage256 = document.getElementById('256gb-ssd');
const storage512 = document.getElementById('512gb-ssd');
const storage1TB = document.getElementById('1tb-ssd');
const freeDelivery = document.getElementById('free-delivery');
const chargedDelivery = document.getElementById('charged-delivery');


// price select 
const basePrice = document.getElementById('base-price');
const extraMemoryCost = document.getElementById('memory-cost');
const extraStorageCost = document.getElementById('storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');

// promo code

const promoCodeInput = document.getElementById('promo-code-input');
const promoCodeApply = document.getElementById('promo-code-apply')

const grandTotal = document.getElementById('grand-total');



memory8GB.addEventListener('click', function () {
    extraMemoryCost.innerText = 0;
})
memory16GB.addEventListener('click', function () {
    extraMemoryCost.innerText = 180;
})
storage256.addEventListener('click', function () {
    extraStorageCost.innerText = 0;
})
storage512.addEventListener('click', function () {
    extraStorageCost.innerText = 100;
})
storage1TB.addEventListener('click', function () {
    extraStorageCost.innerText = 180;
})
freeDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = 0;
})
chargedDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = 20;
})





