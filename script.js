const squareContainer = document.querySelector(".c-container");
const squares = squareContainer.querySelectorAll(".square");
const orderSquares = [];
const tempsquares  = []

function addGreenSquare(square) {
  square.classList.add("square_color_green");
  orderSquares.push(square);
}
let count = 0;
squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (!square.classList.contains("square_color_green")) {
      square.classList.add("square_color_green");
      orderSquares.push(square);

      console.log(orderSquares.length);
    }
    if (orderSquares.length === 7) {
      for (let i = 0; i <= orderSquares.length - 1; i++) {
        (function (i) {
          setTimeout(function () {
            orderSquares[i].classList.remove("square_color_green");
          }, 500 * (i + 1));
        })(i);
      }
    }
  });
});
