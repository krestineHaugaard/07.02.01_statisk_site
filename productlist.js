fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showItems);

function showItems(tøj) {
  tøj.forEach(showItem);
}

function showItem(item) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".productdisplayname").textContent =
    item.productdisplayname;
  copy.querySelector(".articletype").textContent = item.articletype;
  copy.querySelector(".gender").textContent = item.gender;
  copy.querySelector(".usagetype").textContent = item.usagetype;
  copy.querySelector(".price").textContent = item.price;
  if (item.soldout) {
    copy.querySelector("article").classList.add("soldout");
  }
  if (item.discount) {
    copy.querySelector(".price").classList.add("discount");
  }
  copy
    .querySelector(".produkt")
    .setAttribute("href", `produkt.html?id=${item.id}`);
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
