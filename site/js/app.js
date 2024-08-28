const Sites = {
    images: { 
        Text: "Images", 
        id: "imgBtn",
        site: "images",
    },
    vocaloids: {
        Text: "Vocaloids", 
        id: "vocBtn",
        site: "vocaloids",
    },
    timeline: {
        Text: "Timeline", 
        id: "TimeBtn",
        site: "timeline",
    }
}
const btnCont = document.querySelector("#btn-cont");

function createBtn(Txt, btnID, site) {
   
    const sect = document.createElement("section");
    sect.classList.add("main-sect-cont");  
    
  
    const h3 = document.createElement("h3");
    const title = document.createTextNode(`${Txt}`);
    h3.append(title);
    
    
    const btn = document.createElement("button");
    btn.classList.add("main-btn-PS");  
    btn.id = `${btnID}`;
    btn.textContent = `Go to ${Txt}`; 


    btn.addEventListener("click", (e) => {
            location.href = `./site/pages/${site}.html`;
    });


    sect.appendChild(h3);
    sect.appendChild(btn);
    btnCont.appendChild(sect);
}



for (const [key, { Text, id, site }] of Object.entries(Sites)) {
    createBtn(Text, id, site);
}