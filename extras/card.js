const cards = document.querySelectorAll(".cartao");
const dots = document.querySelectorAll(".dot");
let currentCard = 0;

function showCard(index) {
  cards.forEach(card => card.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  cards[index].classList.add("active");
  dots[index].classList.add("active");
  currentCard = index;
}

function nextCard() {
  currentCard = (currentCard + 1) % cards.length;
  showCard(currentCard);
}

function prevCard() {
  currentCard = (currentCard - 1 + cards.length) % cards.length;
  showCard(currentCard);
}

function goToCard(index) {
  showCard(index);
}

showCard(0);