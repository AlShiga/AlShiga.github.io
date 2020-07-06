const leftTop = document.querySelector(".leftTop");
const leftTopY = leftTop.getBoundingClientRect().top + window.pageYOffset;
const leftTopH = leftTop.getBoundingClientRect().height;
const leftBottom = document.querySelector(".leftBottom");
const leftBottomY = leftBottom.getBoundingClientRect().top + window.pageYOffset;
const products = document.querySelector(".products");
function addProduct() {
  let product = document.createElement("div");
  product.className = "product block block_gray";
  product.innerHTML ="<svg class='product__icon'><use xlink:href='img/basket.svg#asd'></use></svg>";
  products.append(product);
}
function removeProduct(){
    let prod = document.querySelectorAll(".product");
    prod[prod.length-1].remove();
}
window.addEventListener("scroll", function () {
  if (window.pageYOffset + leftTopH + 180 > leftBottomY) {
    leftTop.style.width = "";
    leftTop.style.position = "";
    leftTop.style.top = "";
    leftTop.style.marginTop = "auto";
    leftBottom.style.marginTop = "20px";
  } else {
    leftTop.style.width = leftTop.getBoundingClientRect().width + "px";
    leftTop.style.position = "fixed";
    leftTop.style.top = "160px";
    leftTop.style.marginTop = "0";
    leftBottom.style.marginTop = "auto";
  }
});

