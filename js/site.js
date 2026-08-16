/*
  Site behaviour: navbar scroll state, scroll-spy, project filtering, and the
  image probes that let the page render cleanly before the photo assets exist.
  Vanilla JS — Bootstrap's bundle is loaded only for the mobile nav collapse.
*/
(function () {
  "use strict";

  /* ------------------------------------------------------------ navbar --- */

  function initNavbar() {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;

    // Pages without a hero (publications.html, service.html) are always solid.
    if (nav.classList.contains("is-solid")) return;

    function sync() {
      nav.classList.toggle("is-scrolled", window.scrollY > 60);
    }
    sync();
    window.addEventListener("scroll", sync, { passive: true });
  }

  /* ---------------------------------------------------------- scrollspy --- */

  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.site-nav .nav-link[href^="#"]')
    );
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    var sections = [];
    links.forEach(function (link) {
      var section = document.querySelector(link.getAttribute("href"));
      if (!section) return;
      byId[section.id] = link;
      sections.push(section);
    });

    var visible = new Set();

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        // Highlight the topmost section currently on screen.
        var current = sections.filter(function (s) { return visible.has(s.id); })[0];
        links.forEach(function (link) { link.classList.remove("active"); });
        if (current && byId[current.id]) byId[current.id].classList.add("active");
      },
      { rootMargin: "-70px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ------------------------------------------------- collapse on click --- */

  function initMobileNavDismiss() {
    var collapse = document.getElementById("navMenu");
    if (!collapse) return;

    collapse.addEventListener("click", function (event) {
      if (!event.target.closest(".nav-link")) return;
      if (!collapse.classList.contains("show")) return;
      if (window.bootstrap && window.bootstrap.Collapse) {
        window.bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      }
    });
  }

  /* ------------------------------------------------------ image probes --- */

  /*
    Photos and company logos are optional: each element declares the file it
    wants via data-src, and we only apply the "has photo/logo" class once the
    image actually loads. Missing files fall back to the CSS placeholder with no
    broken-image icon and no layout shift.
  */
  function probeImages() {
    document.querySelectorAll("[data-bg-src]").forEach(function (el) {
      var probe = new Image();
      probe.onload = function () { el.classList.add("has-photo"); };
      probe.src = el.getAttribute("data-bg-src");
    });

    document.querySelectorAll("[data-img-src]").forEach(function (el) {
      var img = el.querySelector("img");
      if (!img) return;
      var src = el.getAttribute("data-img-src");
      var probe = new Image();
      probe.onload = function () {
        img.src = src;
        el.classList.add(el.classList.contains("cv-logo") ? "has-logo" : "has-photo");
      };
      probe.src = src;
    });
  }

  /* ---------------------------------------------------- project filter --- */

  function initProjectFilter() {
    var bar = document.querySelector(".filter-bar");
    var items = Array.prototype.slice.call(document.querySelectorAll(".project-item"));
    if (!bar || !items.length) return;

    bar.addEventListener("click", function (event) {
      var button = event.target.closest("li[data-filter]");
      if (!button) return;

      bar.querySelectorAll("li").forEach(function (li) { li.classList.remove("is-active"); });
      button.classList.add("is-active");

      var filter = button.getAttribute("data-filter");
      items.forEach(function (item) {
        item.hidden = filter !== "all" && item.getAttribute("data-category") !== filter;
      });
    });
  }

  /* --------------------------------------------------- service section --- */

  function renderList(id, entries) {
    var mount = document.getElementById(id);
    if (!mount || !entries) return;
    mount.innerHTML = entries
      .map(function (entry) {
        return "<li>" + entry.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</li>";
      })
      .join("");
  }

  function initService() {
    var data = window.SERVICE;
    if (!data) return;

    renderList("teaching-list", data.teaching);
    renderList("journal-list", data.journals);
    renderList("conference-list", data.conferences);

    // Counts come from the arrays so the homepage summary can't drift.
    var journals = document.getElementById("journal-count");
    var conferences = document.getElementById("conference-count");
    if (journals) journals.textContent = String(data.journals.length);
    if (conferences) conferences.textContent = String(data.conferences.length);
  }

  /* ---------------------------------------------------------- year --- */

  function initYear() {
    var el = document.getElementById("footer-year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavbar();
    initScrollSpy();
    initMobileNavDismiss();
    probeImages();
    initProjectFilter();
    initService();
    initYear();
  });
})();
