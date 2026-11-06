const greet = document.getElementById("name");
let greeting = document.getElementById("text")
const btn = document.getElementById("greet");

const originalText = greeting.innerText;

btn.addEventListener("click", () => {
    greeting.innerText = originalText + ", " + greet.value;
});

const colors = ["red", "blue", "green", "yellow"];

colors.forEach(color => {
    const box = document.getElementById(color);

    box.addEventListener("click", () => {
        box.style.backgroundColor = color;
        if (color !== "yellow") {
            box.style.color = "white";
        }
        else {
            box.style.color = "black";
        }
    });
});
// const redBox = document.getElementById("red");
// redBox.addEventListener("click", () => {
//     redBox.style.backgroundColor = "red";
//     redBox.style.color = "white";
// });

// const blueBox = document.getElementById("blue");
// blueBox.addEventListener("click", () => {
//     blueBox.style.backgroundColor = "blue";
//     blueBox.style.color = "white";
// });

// const greenBox = document.getElementById("green");
// greenBox.addEventListener("click", () => {
//     greenBox.style.backgroundColor = "green";
//     greenBox.style.color = "white";
// });

// const yellowBox = document.getElementById("yellow");
// yellowBox.addEventListener("click", () => {
//     yellowBox.style.backgroundColor = "yellow";
// });