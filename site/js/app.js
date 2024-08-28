document.addEventListener("DOMContentLoaded", (e) => {

    const imgBtn = document.querySelector("#imgIdentifier")
    const jsonBtn = document.querySelector("#jsonIdentifier")
    
    imgBtn.addEventListener("click", (e) => {
        location.href = "./site/pages/images.html"
    })
    jsonBtn.addEventListener("click", (e) => {
        location.href = "./site/pages/json.html"
    })
})