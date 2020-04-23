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

// for Line Maker
