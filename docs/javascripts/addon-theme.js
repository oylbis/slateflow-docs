// Tags <html> with data-addon="<slug>" based on the current URL, so
// extra.css can give each addon section its own brand accent color
// (matching its category color on slateflow-website), not just its logo.
(function () {
  var KNOWN = ["dopesheetflow", "storyflow", "sequencerotio"];
  var segs = location.pathname.split("/").filter(Boolean);
  for (var i = 0; i < segs.length; i++) {
    var slug = segs[i].toLowerCase();
    if (KNOWN.indexOf(slug) !== -1) {
      document.documentElement.setAttribute("data-addon", slug);
      break;
    }
  }
})();
