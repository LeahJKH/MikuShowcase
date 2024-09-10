const url = "https://miku-api.vercel.app/mikuTimeLine"
const cont = document.querySelector("#slider")

fetch(url)
    .then(response => response.json())
    .then(timeline => {
        createTime(timeline)
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });

function createTime(t) {
    for(let i = 0; i <= t.length; i++){
        const div = document.createElement("div")
        div.classList = "card"
        const h2 = document.createElement("h2")
        const htxt = document.createTextNode(t[i].time)
        h2.append(htxt)
        div.appendChild(h2)

        const p = document.createElement("p")
        const ptxt = document.createTextNode(t[i].event)
        p.append(ptxt)
        div.appendChild(p)
        cont.appendChild(div)
    } 
}