var allCards = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

var cards_sum = 0;
var is_valid = false;
var hasBlackJack = false;

function randomCard() {
  let card = allCards[Math.floor(Math.random() * 13)];
  return card;
}
function converter(letter) {
  switch (letter) {
    case "2":
      letter = 2;
      break;
    case "3":
      letter = 3;
      break;
    case "4":
      letter = 4;
      break;
    case "5":
      letter = 5;
      break;
    case "6":
      letter = 6;
      break;
    case "7":
      letter = 7;
      break;
    case "8":
      letter = 2;
      break;
    case "9":
      letter = 9;
      break;
    case "10":
      letter = 10;
    case "Q":
      letter = 10;
    case "J":
      letter = 10;
    case "K":
      letter = 10;
      break;
    case "A":
      letter = 11;
      break;
    default:
      letter = letter;
      break;
  }
  return letter;
}

function sum(num1, num2) {
  num1 = converter(num1);
  num2 = converter(num2);
  return (cards_sum = num1 + num2);
}
function validation() {
  if (cards_sum < 21) {
    $("#message-el").text("Do you want to draw a new card?");
    is_valid = true;
  } else if (cards_sum > 21) {
    $("#message-el").text("You Are Out of The Game! Start a New ONe");
    is_valid = false;
  } else {
    $("#message-el").text("You've got Blackjack!");
    hasBlackJack = true;
  }
}

$("#start").click(function () {
  cards_sum = 0;
  let card_1 = randomCard();
  let card_2 = randomCard();
  $("#cards-el").text(`Cards: ${card_1} ${card_2}`);
  $("#sum-el").text(`Sum: ${sum(card_1, card_2)}`);
  validation();
});

$("#newCard").click(function () {
  if (is_valid && !hasBlackJack) {
    new_card = randomCard();
    $("#cards-el").append(` ${new_card}`);
    $("#sum-el").text(`Sum: ${sum(new_card, cards_sum)}`);
    validation();
  }
});
