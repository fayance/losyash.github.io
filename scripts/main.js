const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/evil.jpg") {
        myImage.setAttribute("src", "images/elvis.jpg"); // "true"
    } else {
        myImage.setAttribute("src", "images/evil.jpg"); // "false"
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Введите своё имя.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("имя", myName);
    myHeading.textContent = `Познакомьтесь с Лосяшем, ${myName}`;
    }
}

if (!localStorage.getItem("имя")) {
    setUserName(); // "false" из-за !local.Storage.
} else { // "true"
    const storedName = localStorage.getItem("имя");
    myHeading.textContent = `Познакомьтесь с Лосяшем, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}