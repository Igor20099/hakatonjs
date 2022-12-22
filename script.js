const squareContainer = document.querySelector(".c-container");
const squares = squareContainer.querySelectorAll(".square");
let orderSquares = [];
function addGreenSquare(square) {
  square.classList.add("square_color_green");
  orderSquares.push(square);
  console.log(orderSquares.length)
}

function removeGreenSquare(square) {
  square.classList.remove("square_color_green");
}

function startAnimation() {
  for (let i = 0; i <= orderSquares.length - 1; i++) {
    setTimeout(function () {
      removeGreenSquare(orderSquares[i]);
    }, 500 * (i + 1));
  }
}

squares.forEach((square) => {
  square.addEventListener(
    "click",
    () => {
      if (!square.classList.contains("square_color_green") && orderSquares.length !==7) {
        addGreenSquare(square);
      }
      if (orderSquares.length === squares.length) {
         startAnimation()
      }
    }
  );
});
