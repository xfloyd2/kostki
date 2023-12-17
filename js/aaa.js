function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
/*
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
*/
const input = document.querySelector("#controls>input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxCollection = document.querySelector("#boxes");
const luzik = document.querySelector("#ccc");
for (let z = 1; z < 4; z++) {
  const createBoxes = (amount) => {
    amount = input.value;
    for (let i = 0; i < amount; i += 1) {
      let newBox = document.createElement("p");
      newBox.style.height = `${120 + 1 * i}px`;
      newBox.style.width = `${20 + 1 * i}px`;
      newBox.style.background = getRandomHexColor();
      boxCollection.insertAdjacentElement("beforeend", newBox);
      //luzik.insertAdjacentHTML("afterbegin", "<p>");
    }
  };
  createBtn.addEventListener("click", createBoxes);

  console.log("aaaa");
}
const destroyBoxes = () => {
  boxCollection.innerHTML = "";
};

destroyBtn.addEventListener("click", destroyBoxes);

/*
function drukuj() {
  window.print();
}
*/
//const druk = " <a href="javascript:window.print()">Drukuj</a>";
