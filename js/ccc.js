const btnPhoto = document.createElement("button");
btnPhoto.innerText = "Rzut kostkami";
const fieldPhoto = document.createElement("div");
document.body.appendChild(btnPhoto);
document.body.appendChild(fieldPhoto);

var liczymy = [];

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
}
console.log(liczymy);
