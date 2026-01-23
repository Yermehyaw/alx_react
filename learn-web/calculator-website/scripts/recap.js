/*
 * Recap interactive Javascript with a simple to-do list
 */

const items = document.querySelectorAll("li");

function toggleDone(item) {
  let itemStatus = item.target.className;

  if (itemStatus === "notDone") {
    item.target.className = "done";
  } else {
    item.target.className = "notDone";
  }
  console.log(itemStatus);
}

console.log(items);

items.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
