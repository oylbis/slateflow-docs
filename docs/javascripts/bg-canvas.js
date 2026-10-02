// SlateFlow brand background: dissolve-style gradient canvas.
// Ported as-is from slateflow-website (oylbis/slateflow-website), same
// stops/angle/falloff, so both sites share the same texture.
(function () {
  function init() {
    var c = document.getElementById("bgCanvas");
    if (!c) {
      c = document.createElement("canvas");
      c.id = "bgCanvas";
      document.body.insertBefore(c, document.body.firstChild);
    }
    var ctx = c.getContext("2d");
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
          if (Math.random() < alpha) {
            var col = gradColor(Math.max(0, Math.min(1, t)));
            var i = (y * W + x) * 4;
            d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = 255;
          }
        }
      }
      ctx.putImageData(img, 0, 0);
    }
    render();
    var timer;
    window.addEventListener("resize", function () {
      clearTimeout(timer);
      timer = setTimeout(render, 250);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
