const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const counter = document.querySelector(".counter");

plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", sub);



let val=0;
counter.innerText = val;
function add() {
  counter.classList.add("down");
  val++;
  counter.addEventListener("transitionend", function () {
    counter.innerText = val;
    counter.classList.remove("down");
    localStorage.setItem("number", val);
  });
}
function sub() {
    counter.classList.add("down");
    val--;
    counter.addEventListener("transitionend", function () {
      counter.innerText = val;
      counter.classList.remove("down");
      localStorage.setItem("number", val);
    });
  }

