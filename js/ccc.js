//const mainContainer = document.getElementById("container");
//const addButton = document.getElementById("add-button");
const btnPhoto = document.createElement("button");
btnPhoto.innerText = "Zmien zdjęcie";
const fieldPhoto = document.createElement("div");
document.body.appendChild(btnPhoto);
document.body.appendChild(fieldPhoto);
for (let z = 1; z < 4; z++) {
  btnPhoto.addEventListener("click", addRandomImg, false);

  function addRandomImg() {
    let randomIndex1 = Math.floor(Math.random() * 6);
    let randomIndex = randomIndex1 + 1;
    const newImage = document.createElement("img");
    newImage.src = `image/k${randomIndex}.png`;
    fieldPhoto.appendChild(newImage);
  }
}
