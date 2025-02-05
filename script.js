const messages = [
    "Aba, bat ako pinindot mo?",
    "Ayaw mo talaga ako ka-date?",
    "Are you really sure??",
    "Baby.. pleaseee",
    "Pag-isipan mo mabuti hmmph",
    "If you say no, ill be sad...",
    "sure ka na ba talagaa...",
    "okayy, its fine babyy...",
    "thanks for visiting...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector('.gif_container img');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Change the GIF image source
    gifImage.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODVpeDY0eWFpcnIwd2EwODZwbmhqdjNheHF1MnR2and4YXFheDMxeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QlQdLBS70XJcZY1fLF/giphy.gif"; // Replace with the new GIF URL
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
