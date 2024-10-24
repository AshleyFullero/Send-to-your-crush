const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Really? I love you so much, Jenieee! But really?"; 
    gif.src = "https://media.tenor.com/images/3fbd0b206cc0ed9d7e16d14f3941ac3e/tenor.gif"; // Updated GIF URL
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Prevent the No button from being clicked
noBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default action (if any)
});
