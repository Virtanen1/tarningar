var images = document.querySelectorAll("img")
console.log(images)

images.forEach(
    item => {
        item.style.display = "none"
    }
)
var button = document.querySelector("button")
button.addEventListener("click", () =>{
    images.forEach(
     item => {
         item.style.display = "none"
     }
    )
   images[Math.floor(Math.random() * 6)].style.display = "block"
   
})
