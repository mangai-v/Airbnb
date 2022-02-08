let loginLink = document.querySelector("#login")
let modalBlock = document.querySelector(".modalBlock")
//dom events
loginLink.addEventListener("click", e => {
    e.preventDefault()
    modalBlock.style.display = "block"
    modalBlock.classList.add("open")
    document.querySelector(".dropdownMenu").style.display="none"
},true)
document.addEventListener("click", e => {
    console.log(e.target.closest)
    if (e.target.matches(".modalBlock span") ||!e.target.closest(".modalBlock")) {
        modalBlock.style.display="none"
    }
},true)