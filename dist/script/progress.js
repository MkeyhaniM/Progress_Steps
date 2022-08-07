let prev = document.getElementById("prev")
let next = document.getElementById("next")
let progress = document.getElementById("progress-container")
let cricles = document.querySelectorAll(".circle-progress-container")
let num = 1;

let bol = undefined;

prev.addEventListener("click", ePrev => {
    num--;
    bol = false;
    update(num, bol)
})

next.addEventListener("click", eNext => {
    num++;
    if (num > cricles.length) {
        num = cricles.length
    }
    bol = true;
    update(num, bol)
})

function update(number, boolean) {
    for (let [ind, cricle] of cricles.entries()) {
        if (ind < number && boolean) {
            if (ind == number) {
                continue;
            }
            cricle.classList.add("active")
        } else if (ind > number && !boolean) {
            console.log("hello")
            cricle.classList.remove("active")
        }

    }

    let allActives = document.querySelectorAll('.active');
    console.log("hello")
    progress.style.width = ((allActives.length - 1) / (cricles.length - 1) * 100 + "%");


    if (number == 0) {
        prev.disabled = true;
    } else if (number == cricles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}