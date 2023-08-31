const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((res) => res.json())
  .then(showItem);

function showItem(item) {
  document.querySelector(".productdisplayname").textContent =
    item.productdisplayname;
  document.querySelector(".articletype").textContent = item.articletype;
  document.querySelector(".gender").textContent = item.gender;
  document.querySelector(".usagetype").textContent = item.usagetype;
  document.querySelector(".price").textContent = item.price;
  if (item.soldout) {
    document.querySelector("article").classList.add("soldout");
  }
  if (item.discount) {
    document.querySelector(".price").classList.add("discount");
  }
}
