const ghost = document.getElementById("ghost");
const trails = document.querySelectorAll(".trail");

const colorPicker = document.getElementById("ghostColor");
const ghostBody = document.getElementById("ghostBody");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    ghost.style.left = x + "px";
    ghost.style.top = y + "px";

    trails.forEach((trail) => {
        trail.style.left = x + "px";
        trail.style.top = y + "px";
    });

});

/* Change Ghost Color */

colorPicker.addEventListener("input", () => {

    const color = colorPicker.value;

    ghostBody.setAttribute("fill", color);

    trails.forEach((trail) => {
        trail.style.background = color;
    });

});