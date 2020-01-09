const HSL = {
  hexToHsl: function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }
      h /= 6;
    }

    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    var colors = [
      { hex: this.hslToHex(h, s, 0) },
      { hex: this.hslToHex(h, s, 5) },
      { hex: this.hslToHex(h, s, 10) },
      { hex: this.hslToHex(h, s, 15) },
      { hex: this.hslToHex(h, s, 20) },
      { hex: this.hslToHex(h, s, 25) },
      { hex: this.hslToHex(h, s, 30) },
      { hex: this.hslToHex(h, s, 35) },
      { hex: this.hslToHex(h, s, 40) },
      { hex: this.hslToHex(h, s, 45) },
      { hex: this.hslToHex(h, s, 50) },
      { hex: this.hslToHex(h, s, 55) },
      { hex: this.hslToHex(h, s, 60) },
      { hex: this.hslToHex(h, s, 65) },
      { hex: this.hslToHex(h, s, 70) },
      { hex: this.hslToHex(h, s, 75) },
      { hex: this.hslToHex(h, s, 80) },
      { hex: this.hslToHex(h, s, 85) },
      { hex: this.hslToHex(h, s, 90) },
      { hex: this.hslToHex(h, s, 95) },
      { hex: this.hslToHex(h, s, 100) }
    ];
    return colors;
  },
  hslToHex: function(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  },
  hexToRGB: function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    return "rgb(" + r + "," + g + "," + b + ")";
  },
  hexToRGBA: function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    return "rgba(" + r + "," + g + "," + b + ",1)";
  }
};
export default HSL;
