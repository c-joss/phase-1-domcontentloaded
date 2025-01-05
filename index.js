document.addEventListener("DOMContentLoaded", function () {

    const textElement = document.querySelector("#text");

    if (textElement) {
        textElement.textContent= "This is really cool!";
    }
});

console.log(document.id("text").target);
