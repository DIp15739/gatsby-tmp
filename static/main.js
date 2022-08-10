// Header Navbar

const menu = document.querySelector(".menu");
const navbarHidden = document.querySelector(".mobile-section-navbar");
const overlay = document.querySelector(".body-overlay");

if(menu){
menu.addEventListener("click", function () {
  menu.classList.toggle("change");
  navbarHidden.classList.toggle("mobile-navbar-hidden");
  const overflow = document.querySelector("body");
  overflow.style.overflow === "hidden" ? (overflow.style.overflow = "auto") : (overflow.style.overflow = "hidden");
  overlay.classList.toggle("body-overlay-hidden");
});
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      document.getElementById("header").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("header").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// buycoffee
function selectOnlyThis(id) {
  for (var i = 1;i <= 9; i++){
      if ("Check" + i === id && document.getElementById("Check" + i).checked === true){
          document.getElementById("Check" + i).checked = true;
          } else {
            document.getElementById("Check" + i).checked = false;
          }
  }  
}

// menu slide
jQuery(".has-submenu ul.inactive").hide();
  jQuery(".dropdown-toggle").click(function() {
  jQuery(this).parents('li').toggleClass('open');
  jQuery(this).next("ul").slideToggle();
});

$(".submenu").hover(
  function () {
    $('body').addClass("bg-filter");
  },
  function () {
    $('body').removeClass("bg-filter");
  }
);

const bar = document.querySelector('header');
let timeoutId;
const handleScroll = () => {
  bar.classList.remove('header-visible');
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    bar.classList.add('header-visible');
  }, 500);
};
document.addEventListener('scroll', handleScroll);

// active page in header
$(document).ready(function () {
  $(function () {
      // this will get the full URL at the address bar
      let url = window.location.href;
      // subfolder name same as the main file name
      let lastSubFolderName = url.split('/')[url.split('/').length - 2];
      // passes on every "a" tag
      $(".navbar-nav .nav-link").each(function () {
        // checks if its the same on the address bar
        let thisHref = this.href

        if (url == (thisHref) || lastSubFolderName == (thisHref.split('/')[thisHref.split('/').length - 1].split('.html')[0])) {
          $(this).closest("li").addClass("active");
          //for making parent of submenu active
          $(this).closest("li").parent().parent().addClass("active");
        }

      });
    });
  });