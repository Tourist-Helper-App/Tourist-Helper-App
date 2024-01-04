var plus = document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");
var num = document.querySelectorAll(".num");

for (i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    var a = num[i].innerText;
    console.log(a);
    a++;
    a = (a < 10) ? "0" + a : a;
    num[i].innerText = a;
  });
}

minus.forEach((element) => {
  element.addEventListener("click", () => {
    if (a > 1) {
      a--;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
    }
  }
  )

});