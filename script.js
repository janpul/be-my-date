const messages = [
    "Why did you click me?",
    "Are you really sure??",
    "Ayaw mo talaga ako ka-date?",
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
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
