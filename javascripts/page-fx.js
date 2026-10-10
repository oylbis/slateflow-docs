// SlateFlow brand background: dissolve-style gradient texture.
// Ported from slateflow-website (oylbis/slateflow-website), same
// stops/angle/falloff.
//
// Implementation note: an earlier version drew this into a fixed,
// negative-z-index <canvas> overlaid on the page. That approach turned
// out to be unreliable across real browsers (the canvas ended up
// painted either fully behind the <body> background - invisible - or,
// with z-index raised to fix that, above normal in-flow page content -
// hiding the text). Setting it as the <body> element's own CSS
// background-image sidesteps stacking entirely: a background is by
// definition painted behind an element's own content, no z-index
// involved, so this can't reproduce either failure mode.
(function () {
  function init() {
    try {
      var STOPS = [
        [0.00, 255, 204, 205], [0.18, 255, 217, 218], [0.42, 227, 253, 255],
        [0.55, 221, 255, 244], [0.78, 225, 255, 245], [1.00, 255, 214, 215]
      ];
      function gradColor(t) {
        for (var s = 0; s < STOPS.length - 1; s++) {
          var a = STOPS[s], b = STOPS[s + 1];
          if (t >= a[0] && t <= b[0]) {
            var k = (t - a[0]) / (b[0] - a[0] || 1);
            return [a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k, a[3] + (b[3] - a[3]) * k];
          }
        }
        return [STOPS[0][1], STOPS[0][2], STOPS[0][3]];
      }
      var BASE = [251, 247, 241];

      var c = document.createElement("canvas");
      var ctx = c.getContext("2d");

      function render() {
        var W = c.width = window.innerWidth, H = c.height = window.innerHeight;
        var img = ctx.createImageData(W, H), d = img.data;
        var rad = 165 * Math.PI / 180, dx = Math.abs(Math.cos(rad)), dy = Math.abs(Math.sin(rad));
        var len = W * dx + H * dy, x0 = (W - W * dx) / 2, y0 = (H - H * dy) / 2;
        for (var y = 0; y < H; y++) {
          for (var x = 0; x < W; x++) {
            var t = ((x - x0) * dx + (H - y - y0) * dy) / len;
            var ex = Math.max(0, Math.abs(x / W - 0.5) * 2 - 0.45) / 0.55;
            var ey = Math.max(0, Math.abs(y / H - 0.5) * 2 - 0.45) / 0.55;
            var edge = Math.min(1, Math.max(ex, ey));
            var alpha = 0.88 - edge * edge * 0.73;
            var i = (y * W + x) * 4;
            if (Math.random() < alpha) {
              var col = gradColor(Math.max(0, Math.min(1, t)));
              d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = 255;
            } else {
              d[i] = BASE[0]; d[i + 1] = BASE[1]; d[i + 2] = BASE[2]; d[i + 3] = 255;
            }
          }
        }
        ctx.putImageData(img, 0, 0);
        var url = c.toDataURL("image/png");
        document.body.style.backgroundImage = "url(" + url + ")";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundRepeat = "no-repeat";
        console.log("[slateflow-docs] page-fx: body background set,", W + "x" + H);
      }
      render();
      var timer;
      window.addEventListener("resize", function () {
        clearTimeout(timer);
        timer = setTimeout(render, 250);
      });
    } catch (e) {
      console.error("[slateflow-docs] page-fx failed:", e);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
