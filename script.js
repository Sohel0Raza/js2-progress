const progress = document.getElementById("progress")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener("click", () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})
prev.addEventListener("click", () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, indx) => {
        if (indx < currentActive) {
            circle.classList.add("active")
        }
        else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")
    const activeLength = actives.length - 1
    const circlesLength = circles.length - 1
    progress.style.width = (activeLength / circlesLength) * 100 + "%"

    if(currentActive === 1){
        prev.disabled= true
    }
    else if (currentActive ===  circles.length){
        next.disabled= true
    }
    else{
        prev.disabled = false
        next.disabled = false
    }
}