// Tags the current page with its addon's brand category (color + label),
// matching slateflow-website's category system (Editing/Storyboard/2D
// Animation), and marks each addon's entry in the left nav with the same
// color — so the category stays visible while reading, not just on logos.
(function () {
  var CATEGORIES = {
    dopesheetflow: { color: "#00c281", en: "2D Animation", fr: "Animation 2D" },
    gpflow: { color: "#00c281", en: "2D Animation", fr: "Animation 2D" },
    gpoutliner: { color: "#00c281", en: "2D Animation", fr: "Animation 2D" },
    storyflow: { color: "#00c7d6", en: "Storyboard", fr: "Storyboard" },
    sequencerotio: { color: "#b60c10", en: "Editing", fr: "Montage" },
    sequencerflow: { color: "#b60c10", en: "Editing", fr: "Montage" }
  };

  function currentLocale() {
    var segs = location.pathname.split("/").filter(Boolean);
    return segs.indexOf("fr") !== -1 ? "fr" : "en";
  }

  function currentAddonSlug() {
    var segs = location.pathname.split("/").filter(Boolean);
    for (var i = 0; i < segs.length; i++) {
      var s = segs[i].toLowerCase();
      if (CATEGORIES[s]) return s;
    }
    return null;
  }

  // The breadcrumb's last item is always the current addon (see
  // markNavDots below for why matching by text, not href, is reliable) —
  // append its category in parentheses and color the whole segment,
  // e.g. "SlateFlow > dopesheetFlow (2D Animation)" with the second part
  // in that addon's brand color. Ancestor segments (e.g. "SlateFlow")
  // are left at the default (ink) color.
  function tagBreadcrumb(slug, locale) {
    if (!slug) return;
    var cat = CATEGORIES[slug];
    var items = document.querySelectorAll(".md-path__item");
    if (!items.length) return;
    var last = items[items.length - 1];
    var link = last.querySelector(".md-path__link");
    var ellipsis = link && link.querySelector(".md-ellipsis");
    if (!link || !ellipsis || link.querySelector(".addon-path-category")) return;
    var tag = document.createElement("span");
    tag.className = "addon-path-category";
    tag.textContent = " (" + (cat[locale] || cat.en) + ")";
    ellipsis.appendChild(tag);
    link.style.color = cat.color;
  }

  // Top-level nav links for sections that have their own index page
  // (navigation.indexes) sit inside .md-nav__container, as plain <a> tags
  // whose text is the literal addon name (unlocalized by design, same as
  // the product name) — reliable to match regardless of locale or which
  // page's nav this is (hrefs are page-relative and vary, text isn't).
  function markNavDots() {
    var links = document.querySelectorAll(
      ".md-nav--primary > .md-nav__list > .md-nav__item > .md-nav__container > a.md-nav__link"
    );
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var slug = a.textContent.trim().toLowerCase();
      var cat = CATEGORIES[slug];
      if (!cat || a.querySelector(".addon-nav-dot")) continue;
      var dot = document.createElement("span");
      dot.className = "addon-nav-dot";
      dot.style.backgroundColor = cat.color;
      a.insertBefore(dot, a.firstChild);
    }
  }

  function init() {
    var slug = currentAddonSlug();
    if (slug) document.body.setAttribute("data-addon", slug);
    tagBreadcrumb(slug, currentLocale());
    markNavDots();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
