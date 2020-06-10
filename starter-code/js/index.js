var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let btn = document.querySelector(".btn-success")
btn.addEventListener("click", updateSubtotal)

function updateSubtotal($product) {
  // Iteration 1.1
  let products = document.querySelectorAll(".product");
  let total = 0;
  for (const product of products) {
    let price = product.querySelector(".pu>span").innerText;
    let multiply = product.querySelector(".qty input").value;
    let subTotal = price * multiply
    product.querySelector(".subtot span").innerText = subTotal;
    total += subTotal;
    document.querySelector("h2 span").innerText = total;    
  }
}
console.log(updateSubtotal());
$calc.onclick = calculateAll;
function calculateAll() {
  // Iteration 1.2

}


let allDeleteButtons = document.querySelectorAll('.btn-delete');
let products = document.querySelectorAll(".product")
document.querySelectorAll('.btn-delete').addEventListener("click", deleteProduct);

function deleteProduct () {
  
}
console.log(allDeleteButtons)
console.log(products)



