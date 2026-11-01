const flashcards = [
    { question: "Allah", answer: "The Greatest Name" }
];

let currentCardIndex = 0;

function displayCard() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    
    const currentCard = flashcards[currentCardIndex];
    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;
    
    // Reset the card to show the front initially
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.remove('clicked');
}

function toggleCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.toggle('clicked');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    displayCard();
}

// Initialize the first card
displayCard();
