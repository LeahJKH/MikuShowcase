const cosplay = document.querySelector("#cosplay-pics");
const transP = document.querySelector("#transparent-pics");
const vocaloids = document.querySelector("#vocaloid-pics");
const pfp = document.querySelector("#profile-pics");
const fullbg = document.querySelector("#full-background-pics");

displayImages(vocaloids, 80, "vocaloids", "vo");
displayImages(cosplay, 10, "cosplay", "c");
displayImages(fullbg, 17, "fullBg", "fb");
displayImages(pfp, 12, "pfp", "pfp");
displayImages(transP, 16, "TransP", "tp");

function displayImages(container, number, folder, code) {
    for (let i = 1; i <= number; i++) {
        const img = document.createElement("img");
        img.classList.add("img-sizing");
        img.src = `https://leahjkh.github.io/MikuApiGithub/images/${folder}/${code}${i}.webp`;
        img.loading = "lazy"; 
        container.appendChild(img);
    }
}