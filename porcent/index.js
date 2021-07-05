const originalPrice = 12000;
const discount = 15;
const price = (discount / 100) * originalPrice
const totalPrice = originalPrice - price
console.log(
    "precio orginal: " + originalPrice
    + "descuento: " + discount + "%"
    + " precio con descuento: " + totalPrice
)

const originalPrice1 = 12000;
const discount1 = 15;
const priceDiscount1 = 100 - discount1
const totalPrice1 = (originalPrice1 * priceDiscount1) / 100
console.log({
    originalPrice1,
    discount1,
    priceDiscount1,
    totalPrice1
})

function calculateDidcount(productPrice, productDis) {
    const dis =  productDis
    const Pricer = productPrice
    const price = (dis / 100) * Pricer
      return Pricer - price
}

function anaAction(originalPrice, discount) {
    const Pricer = originalPrice
    const dis = discount
    const price = (dis / 100) * Pricer
    const total = Pricer - price
    document.getElementById("total-ana").innerHTML = "Total price with " + dis + "% of discount, is:  " + total + "$"
}
function popoterAction(originalPrice, discount) {
    const Pricer = originalPrice
    const dis = discount
    const price = (dis / 100) * Pricer
    const total = Pricer - price
     return document.getElementById("total-popoter").innerHTML = "Total price with " + dis + "% of discount, is:  " + total + "$"
}
function quijoteAction(originalPrice, discount) {
    const Pricer = originalPrice
    const dis = discount
    const price = (dis / 100) * Pricer
    const total = Pricer - price
    document.getElementById("total-quijote").innerHTML = "Total price with " + dis + "% of discount, is:  " + total + "$"
}
function vinciAction(originalPrice, discount) {
    const Pricer = originalPrice
    const dis = discount
    const price = (dis / 100) * Pricer
    const total = Pricer - price
    document.getElementById("total-vinci").innerHTML = "Total price with " + dis + "% of discount, is:  " + total + "$"
}

