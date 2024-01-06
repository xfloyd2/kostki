//const mainContainer = document.getElementById("container");
//const addButton = document.getElementById("add-button");
const btnPhoto = document.createElement("button");
//const btnDel = document.createElement("button");
btnPhoto.innerText = "Rzut kostkami";
//btnDel.innerText = "Reset";
const fieldPhoto = document.createElement("div");
const fielDel = document.createElement("div");
document.body.appendChild(btnPhoto);
document.body.appendChild(fieldPhoto);
//document.body.appendChild(btnDel);
/*btnPhoto.addEventListener("click", location.reload());
btnDel.addEventListener("click", resecik(), false);
function resecik() {
  location.reload();
  return false;
}

const refreshButton = document.querySelector(".refresh-button");

const refreshPage = () => {
  window.location.reload();
};

refreshButton.addEventListener("click", refreshPage);
*/

var liczymy = [];
//var suma = 0;
for (let z = 1; z < 4; z++) {
  btnPhoto.addEventListener("click", addRandomImg, false);

  function addRandomImg() {
    let randomIndex1 = Math.floor(Math.random() * 6);
    let randomIndex = randomIndex1 + 1;
    const newImage = document.createElement("img");
    newImage.src = `image/${randomIndex}.jpg`;
    fieldPhoto.appendChild(newImage);

    liczymy.push(randomIndex);
    console.log(liczymy);
  }
  // let z1 = parseInt(liczymy[0]);
  // let z2 = parseInt(liczymy[1]);
  // let z3 = parseInt(liczymy[2]);
}
console.log(liczymy);

// const initialValue = 0;
// const sumWithInitial = liczymy.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

const array = [2, 4, 6, 8, 10];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  // console.log(
  //  `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  // );
  return returns;
}

const wwww = array.reduce(reducer);
console.log(wwww);
