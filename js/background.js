const images = [
  "대한민국구석구석_강원_평창_하늘목장_1920x1080.png",
  "대한민국구석구석_경기_수원 화성_1920x1080.png",
  "대한민국구석구석_경남 창원_군항제_1920x1080.png",
  "대한민국구석구석_인천 대청도 농여해변_1920x1080.png",
  "대한민국구석구석_전남_구례_지리산 노고단_1920x1080.png",
  "대한민국구석구석_전남_여수_돌산대교_1920X1080.png",
  "대한민국구석구석_충남_태안_운여해변_1920X1080.png",
  "대한민국구석구석_충북_보은_말티재_1920x1080.png",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";
console.log(bgImage);
document.body.appendChild(bgImage);
