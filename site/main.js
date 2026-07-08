// OpenClaro — minimal static-site interactivity
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // Demo form — placeholder handler (wire to a real backend/CRM later)
  window.OpenClaro = window.OpenClaro || {};
  window.OpenClaro.submit = function (event) {
    event.preventDefault();
    var form = event.target;
    var note = document.getElementById("formNote");
    var name = (form.name && form.name.value) || "there";
    if (note) {
      note.textContent =
        "Thanks, " + name.split(" ")[0] + "! This is a demo form — connect it to your CRM to capture leads.";
    }
    form.reset();
    return false;
  };
})();
