// smooth scrolling
$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500,
    "linear"
  );
});

// for locking of body when scrolling modals
const targetElement = document.querySelector("body");

// for showing mobile menu and showing or hiding social icons
$("button.navbar-toggler").click(function () {
  $("#navbarResponsive").toggleClass("show");
  $("button.navbar-toggler").toggleClass("collapsed");
  $("div.social-medias").toggleClass("hide-in-mobile");
  const targetElement = document.querySelector("body");
  if ($("#navbarResponsive").hasClass("show")) {
    bodyScrollLock.disableBodyScroll(targetElement);
  } else {
    bodyScrollLock.enableBodyScroll(targetElement);
  }
});

function openContactOverlay() {
  document.getElementById("contact-overlay").style.visibility = "visible";
  document.getElementById("contact-overlay").style.opacity = "1";
  document.getElementById("contact-overlay").style.width = "100%";
  bodyScrollLock.disableBodyScroll(targetElement);
  $(".left-layer").toggleClass("active");
}

function closeContactOverlay() {
  document.getElementById("contact-overlay").style.visibility = "hidden";
  document.getElementById("contact-overlay").style.opacity = "0";
  bodyScrollLock.enableBodyScroll(targetElement);
  $(".left-layer").toggleClass("active");
}

//Check Mobile Devices
var checkMobile = function () {
  //Check Device
  var isTouch = "ontouchstart" in document.documentElement;

  //Check Device //All Touch Devices
  if (!isTouch) {
    $(".cta").addClass("no-touch");
    $("#showcase").addClass("no-touch");
  }
};

//Execute Check
checkMobile();

// for Line Maker
(function () {
  var lineMaker = new LineMaker({
    // position: if fixed the lines container will have fixed position.
    position: "fixed",
    // The lines settings:
    //
    // top, left, width, height: numerical for pixels or string for % and viewport units. Examples: 2 || '20%' || '50vw'.
    // color: the (bg)color of the line.
    // hidden: defines if the line is rendered initially or hidden by default.
    // animation: animation properties for the line
    // 		duration: animation speed.
    // 		easing: animation easing (animejs easing. To see all possible values console animejs.easings).
    // 		delay: animation delay.
    // 		direction: line animation direction. Possible values: TopBottom || BottomTop || LeftRight || RightLeft || CenterV || CenterH.
    lines: [
      {
        top: 0,
        left: "20%",
        width: 1,
        height: "100vh",
        color: "#e8e7e7",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },

      {
        top: 0,
        left: "50%",
        width: 1,
        height: "100vh",
        color: "#e8e7e7",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },

      {
        top: 0,
        left: "80%",
        width: 1,
        height: "100vh",
        color: "#e8e7e7",
        hidden: true,
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
          delay: 0,
          direction: "TopBottom",
        },
      },
    ],
  });

  setTimeout(function () {
    //s disableButtons();
    lineMaker.animateLinesIn();
  }, 500);
})();

// SCROLL REVEAL
// Changing the defaults
window.sr = ScrollReveal({ reset: true });

var slideUp = {
  delay: 200,
  //easing: "ease-out",
  distance: "50px",
  origin: "bottom",
  opacity: 0,
  duration: 1000,
  mobile: false,
};

ScrollReveal().reveal(".slideUp", slideUp);
