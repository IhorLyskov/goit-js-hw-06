const categoryItemsList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItemsList.length}`);

categoryItemsList.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
