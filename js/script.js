let imageslider = document.querySelectorAll("img");
let totalimages = imageslider.length;

var counter = 0;
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

next.addEventListener("click", slidenext);
function slidenext() {
  imageslider[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= imageslider.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  imageslider[counter].style.animation = "next2 0.5s ease-in forwards";
}

prev.addEventListener("click", slideprev);

function slideprev() {
  imageslider[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = imageslider.length - 1;
  } else {
    counter--;
  }
  imageslider[counter].style.animation = "prev2 0.5s ease-in forwards";
}

function autosliding() {
  deletInterval = setInterval(timer, 1500);
  function timer() {
    slidenext();
  }
}

autosliding();
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

container.addEventListener("mouseout", autosliding);
