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

function popoterAction(originalPrice, discount) {
    const dis = discount
    const pricer = originalPrice
    const anaOperation = calculateDidcount(pricer, dis)
    console.log(anaOperation)
    
    document.getElementById("total-ana").innerHTML = "Total price with " + dis + "% of discount, is:  " + anaOperation + "$"
    
}
function anaAction(originalPrice1, discount1) {
    const dis = discount1
    const pricer = originalPrice1
    const anaOperation = calculateDidcount(pricer, dis)
    console.log(anaOperation)
    document.getElementById("total-popoter").innerHTML = "Total price with " + dis + "% of discount, is:  " + anaOperation + "$"
    
}
function quijoteAction(originalPrice, discount) {
    const dis = discount
    const pricer = originalPrice
    const anaOperation = calculateDidcount(pricer,dis)
    document.getElementById("total-quijote").innerHTML = "Total price with " + dis + "% of discount, is:  " + anaOperation + "$"
    
}
function vinciAction(originalPrice, discount) {
    const dis = discount
    const pricer = originalPrice
    const anaOperation = calculateDidcount(pricer,dis)
    document.getElementById("total-vinci").innerHTML = "Total price with " + dis + "% of discount, is:  " + anaOperation + "$"
    
}