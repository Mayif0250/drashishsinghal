const fs = require('fs');

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if(max === min){ h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}

function hslToRgb(h, s, l) {
  let r, g, b;
  if(s === 0) { r = g = b = l; }
  else {
    const hue2rgb = (p, q, t) => {
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

const svg = fs.readFileSync('public/award_wheat_wreath_in_gold_gradient.svg', 'utf8');

// #1E3A8A is roughly HSL(224.4, 0.643, 0.329)
const targetH = 224.4 / 360;
const targetS = 0.643;
const targetL = 0.329;

// The main gold color in the original (e.g. rgb(255, 160, 60)) has L: ~0.61
// We map 0.61 -> targetL
const L_ratio = targetL / 0.61;

const newSvg = svg.replace(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g, (match, r, g, b) => {
  r = parseInt(r); g = parseInt(g); b = parseInt(b);
  if (r === 255 && g === 255 && b === 255) return match;
  
  let [h, s, l] = rgbToHsl(r, g, b);
  
  // Set hue and sat exactly to #1E3A8A base
  h = targetH;
  s = targetS;
  
  // Scale lightness proportionately to retain shadow/highlight depth
  l = Math.max(0, Math.min(1, l * L_ratio));
  
  const [nR, nG, nB] = hslToRgb(h, s, l);
  return `rgb(${nR},${nG},${nB})`;
});

fs.writeFileSync('public/award_wheat_wreath_in_navy_gradient.svg', newSvg);
console.log('Successfully mapped SVG to #1E3A8A baseline.');
