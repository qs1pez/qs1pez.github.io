const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pin pipulo.png") {
    myImage.setAttribute("src", "images/palta.jpg");
  } else {
    myImage.setAttribute("src", "images/pin pipulo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("¿Cómo te llamás?");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Chupame el culo ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Chupame el culo ${storedName}`;
}
  
myButton.onclick = () => {
  setUserName();
};
