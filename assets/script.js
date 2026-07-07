(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (!navToggle || !nav) {
    return;
  }

  navToggle.addEventListener("click", function () {
    var isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav.addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() !== "a") {
      return;
    }

    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
})();
