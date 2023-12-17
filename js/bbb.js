const btnPhoto = document.createElement("button");
btnPhoto.innerText = "Zmien zdjęcie";
const fieldPhoto = document.createElement("p");
document.body.appendChild(btnPhoto);
document.body.appendChild(fieldPhoto);

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const imagesArray = [
  "image/k1.png",
  "image/k2.png",
  "image/k3.png",
  "image/k4.png",
  "image/k5.png",
  "image/k6.png",
];

btnPhoto.addEventListener("click", () => {
  fieldPhoto.innerHTML = `<img src="${imagesArray[getRandomArbitrary(0, 5)]}">`;
});
