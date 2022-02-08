function dropdown() {
  let x = document.getElementById("dropdownMenu");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dropdown1() {
  var location = document.querySelector(".locationBlock");
  if (location.style.display == "none") {
    location.style.display = "block";
  } else {
    location.style.display = "none";
  }
}


//data
let tripData = [
  {
    image:
      "https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=240",
    title: "Lonavla",
    description: "66 kilometers away",
    color: "#bc1a6e",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240",
    title: "Alibag",
    description: "66 kilometers away",
    color: "#de3151",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=240",
    title: "Calangutee",
    description: "66 kilometers away",
    color: "	#DC143C ",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/85bff6ba-f4d0-4094-926e-a4fbc21bab4e.jpg?im_w=240",
    title: "Karjat",
    description: "66 kilometers away",
    color: "#F08080",
  },
];

let tripcontent = document.getElementById("tripBlock")
let output = []
//loop each block
tripData.forEach((trip, index) => {
  output += `
  <div class="tripContainer"
  style="background-color:${trip.color}">
  <figure>
  <img src=${trip.image} alt=${trip.title}/>
  </figure>
  <h2>${trip.title}</h2>
  <p>${trip.description}</p>

  </div>`;
  
})

tripcontent.innerHTML=output


let targetElement=document.getElementById("_HeaderSection")
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    targetElement.classList.add("scrolled")
    document.querySelector(".logoBlock a svg").style.fill = "red";
    document.querySelector(".hiddenBlock").style.display = "flex";
    document.querySelector("nav").style.display="none"
  }
  else {
    targetElement.classList.remove("scrolled");
    document.querySelector(".logoBlock a svg").style.fill = "#fff";
     document.querySelector(".hiddenBlock").style.display = "none";
     document.querySelector("nav").style.display = "flex";
  }
})



