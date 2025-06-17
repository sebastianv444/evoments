import { useState, useEffect } from "react";
import { Vibrant } from "node-vibrant/browser";

function lighten(hex, amt) {
  const num = parseInt(hex.slice(1), 16);
  let r = Math.min(255, (num >> 16) + amt);
  let g = Math.min(255, ((num >> 8) & 0x00ff) + amt);
  let b = Math.min(255, (num & 0x0000ff) + amt);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export default function useImageColor(imageUrl) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    img.onload = () => {
      Vibrant.from(img)
        .getPalette()
        .then((palette) => {
          const swatch =
            palette.LightVibrant ||
            palette.Vibrant ||
            palette.Muted ||
            palette.DarkVibrant;
          let hex = swatch?.hex || null;
          if (hex) hex = lighten(hex, 20); // <— aplicas aquí el aclarado
          setColor(hex);
        })
        .catch(() => setColor(null));
    };
    img.onerror = () => setColor(null);
  }, [imageUrl]);

  return color;
}
