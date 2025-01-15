import React, { useRef, useState } from "react";
import "./Demo.css";


const Demo = () => {
  const canvasRef = useRef(null);
  const [isPainting, setIsPainting] = useState(false);
  const [brushSize, setBrushSize] = useState(5);
  const [color, setColor] = useState("#000000");

  const getMousePos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  };
// Inside Demo.jsx or the relevant component
const colorsMatch = (color1, color2, tolerance = 10) => {
  return (
    Math.abs(color1[0] - color2[0]) <= tolerance &&
    Math.abs(color1[1] - color2[1]) <= tolerance &&
    Math.abs(color1[2] - color2[2]) <= tolerance &&
    Math.abs(color1[3] - color2[3]) <= tolerance
  );
};

  const startPainting = (e) => {
    setIsPainting(true);
    draw(e);
  };

  const stopPainting = () => {
    setIsPainting(false);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
  };

  const draw = (e) => {
    if (!isPainting) return;

    const ctx = canvasRef.current.getContext("2d");
    const [x, y] = getMousePos(e);

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handleBrushSizeChange = (e) => {
    setBrushSize(Number(e.target.value));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "painting.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const fillCanvas = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const [x, y] = getMousePos(e);
    const targetColor = ctx.getImageData(x, y, 1, 1).data;

    const fillColor = hexToRgb(color);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelsToCheck = [[x, y]];
    const checked = new Set();

    while (pixelsToCheck.length > 0) {
      const [currentX, currentY] = pixelsToCheck.pop();

      if (currentX < 0 || currentX >= canvas.width || currentY < 0 || currentY >= canvas.height) continue;

      const key = `${currentX},${currentY}`;
      if (checked.has(key)) continue;

      const currentPixel = getPixelColor(imageData, currentX, currentY);
      if (colorsMatch(currentPixel, targetColor)) {
        setPixelColor(imageData, currentX, currentY, fillColor);

        pixelsToCheck.push(
          [currentX + 1, currentY],
          [currentX - 1, currentY],
          [currentX, currentY + 1],
          [currentX, currentY - 1]
        );
      }

      checked.add(key);
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b, 255];
  };

  const getPixelColor = (imageData, x, y) => {
    const pos = (y * imageData.width + x) * 4;
    return [
      imageData.data[pos],
      imageData.data[pos + 1],
      imageData.data[pos + 2],
      imageData.data[pos + 3]
    ];
  };

  const setPixelColor = (imageData, x, y, color) => {
    const pos = (y * imageData.width + x) * 4;
    imageData.data[pos] = color[0];
    imageData.data[pos + 1] = color[1];
    imageData.data[pos + 2] = color[2];
    imageData.data[pos + 3] = color[3];
  };

  return (
    <div className="App">
      <div id="toolbar">
        <label>
          Brush Size:
          <input type="range" value={brushSize} min="1" max="50" onChange={handleBrushSizeChange} />
        </label>
        <input type="color" onChange={handleColorChange} />
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleDownload}>Download</button>
        <button onClick={fillCanvas}>Fill</button>
      </div>
      <canvas
        ref={canvasRef}
        id="paintCanvas"
        width="800"
        height="600"
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseLeave={stopPainting}
        onMouseMove={draw}
      />
    </div>
  );
};

export default Demo;
