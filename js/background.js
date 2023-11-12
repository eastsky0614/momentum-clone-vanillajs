const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// Create a div element to serve as the background container
const backgroundContainer = document.createElement("div");
backgroundContainer.classList.add("background-container");

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// Append the background image to the container
backgroundContainer.appendChild(bgImage);

// Append the background container to the body
document.body.appendChild(backgroundContainer);

// document.body.appendChild(bgImage);
