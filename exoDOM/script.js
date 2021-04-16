let text = ["bleu", "rouge", "jaune", "violet"];
let color = ["blue", "red", "yellow", "purple"];

let button = document.querySelector('button');
let div = document.querySelector('div');
let maxWidth = document.body.scrollWidth;

button.addEventListener("click", animation);

let interval;

function animation() {
    clearInterval(interval);

    if(div.innerText == "") {
        changeColorAndText();
    } else {
        let left = 0;

        interval = setInterval(function() {
            if (left == maxWidth) {
                changeColorAndText();
                div.style.left = "0px";

                clearInterval(interval);
            } else {
                left++;
                div.style.left = left + "px";
            }
        }, 1);
    }
}