"use strick";

// const overlay = document.querySelectorAll(".overlay");

// // overlay.addEventListener("click", function (e) {
// //   e.preventdefault();
// //   overlay.style.width = "100%";
// //   overlay.style.height = "100vh";
// //   overlay.style.transform = "scale(100)";
// //   overlay.style.background = "#ff6600";
// // });

const projcet1 = document.querySelector(".projcet1");
const projcet2 = document.querySelector(".projcet2");

if(projcet1) {
projcet1.addEventListener("click", function (e) {
  e.preventDefault();
  this.style.background = "#202A5B";
  this.style.animation = "bigBox";
  this.style.position = "fixed";
  if (this.href) {
    var target = this.href;
    setTimeout(function () {
      window.location = target;
    }, 2000);
  }
});
}
if(projcet2) {
projcet2.addEventListener("click", function (e) {
  e.preventDefault();
  this.style.background = "#16B34A";
  this.style.animation = "bigBox";
  this.style.position = "fixed";
  if (this.href) {
    var target = this.href;
    setTimeout(function () {
      window.location = target;
    }, 2000);
  }
});
}