const image = document.getElementById("afterimage");
const showButton = document.getElementById("show-button");
const resetButton = document.getElementById("reset-button");

let timer;

// Show image for 30 seconds
showButton.addEventListener("click", () => {
  image.style.display = "block";

  // Change button text and color
  showButton.textContent = "Counting Down...";
  showButton.style.backgroundColor = "#FFA500"; // Orange

  // Hide the image after 30 seconds and reset the button
  timer = setTimeout(() => {
    image.style.visibility = "hidden";
    showButton.style.display = "none";
    showButton.style.backgroundColor = "#4CAF50"; // Green
  }, 30000);
});

// Reset the image and timer
resetButton.addEventListener("click", () => {
  // Clear the timer
  clearTimeout(timer);

  // Show the image and reset the button
  image.style.visibility = "visible";
  showButton.style.display = "inline";
  showButton.textContent = "Start";
  showButton.style.backgroundColor = "#4CAF50"; // Green
});
