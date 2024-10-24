const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const message = document.querySelector(".message");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Really? I love you too! 😘"; 
    gif.src = "https://media.giphy.com/media/2yq9g8uWlX0Ho/giphy.gif"; // Updated GIF URL
    message.innerHTML = "I don’t believe you, where is this love? HUH! Message me ASAP!";
    message.style.display = "block"; // Show the message
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute"; // Make sure it's positioned absolutely
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Prevent the No button from performing any action
noBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default action
});
