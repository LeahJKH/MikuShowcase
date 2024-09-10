const vocaloidContainer = document.querySelector("#vocaloid-cont");
const searchBar = document.querySelector("#search-voc");
const searchVocBtn = document.querySelector("#search-voc-btn");

const url = "https://miku-api.vercel.app/vocaloids";
let vocaloidsData = [];
fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(vocaloids => {
    vocaloidsData = vocaloids;
    renderVocaloids(vocaloidsData);
})
.catch(error => {
    console.error('Error fetching the JSON data:', error);
});

console.log(vocaloidsData)
searchVocBtn.addEventListener('click', updateVocaloidList);
searchBar.addEventListener('input', debounce(updateVocaloidList, 300));

function updateVocaloidList() {
    const query = searchBar.value.toLowerCase();
    const filteredVocaloids = vocaloidsData.filter(vocaloid => {
        return (vocaloid.name && vocaloid.name.toLowerCase().includes(query)) ||
               (vocaloid.codename && vocaloid.codename.toLowerCase().includes(query)) ||
               (vocaloid.version && vocaloid.version.toLowerCase().includes(query)) ||
               (vocaloid.introduction && vocaloid.introduction.toLowerCase().includes(query));
    });
    renderVocaloids(filteredVocaloids);
}

function renderVocaloids(vocaloids) {
    vocaloidContainer.innerHTML = '';
    vocaloids.forEach(vocaloid => {
        const vocaloidDiv = document.createElement('div');
        vocaloidDiv.classList.add("vocaloid-card");

        const dividerTxt = document.createElement("div");
        dividerTxt.classList.add("div-txt");

        const vocaloidName = document.createElement('h2');
        vocaloidName.textContent = vocaloid.name || 'Unknown';
        dividerTxt.appendChild(vocaloidName);

        const vocaloidCodename = document.createElement('p');
        vocaloidCodename.textContent = `Codename: ${vocaloid.codename || 'Unknown'}`;
        dividerTxt.appendChild(vocaloidCodename);

        const vocaloidIntroduction = document.createElement('p');
        vocaloidIntroduction.textContent = `Introduction: ${vocaloid.introduction || 'No introduction available'}`;
        dividerTxt.appendChild(vocaloidIntroduction);

        const vocaloidVersion = document.createElement('p');
        vocaloidVersion.textContent = `Version: ${vocaloid.version || 'Unknown'}`;
        dividerTxt.appendChild(vocaloidVersion);

        const dividerImage = document.createElement("div");
        dividerImage.classList.add("div-img");

        const vocaloidImage = document.createElement('img');
        vocaloidImage.classList.add("image-vocaloid");
        vocaloidImage.src = vocaloid.image || 'placeholder.jpg'; // Use a placeholder image if none is available
        vocaloidImage.alt = `This is a picture of ${vocaloid.name || 'Unknown'}`;
        dividerImage.appendChild(vocaloidImage);

        vocaloidDiv.appendChild(dividerTxt);
        vocaloidDiv.appendChild(dividerImage);
        vocaloidContainer.appendChild(vocaloidDiv);
    });
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}