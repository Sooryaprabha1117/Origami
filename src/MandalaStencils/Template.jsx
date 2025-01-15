import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Select, MenuItem, Button, Card, CardContent } from "@mui/material";
import { ChromePicker } from "react-color";
import DesignSvg1 from "../assets/easy1.svg";
import DesignSvg2 from "../assets/easy2.svg";
import DesignSvg3 from "../assets/easy3.svg";
import DesignSvg4 from "../assets/neww.svg";
import DesignSvg5 from "../assets/easy5.svg";

const mandalaDesigns = [
  { id: 1, file: DesignSvg1 },
  { id: 2, file: DesignSvg2 },
  { id: 3, file: DesignSvg3 },
  { id: 4, file: DesignSvg4 },
  { id: 5, file: DesignSvg5 },
];

const Template = () => {
  const [selectedColor, setSelectedColor] = useState("#FF5733");
  const [selectedDesign, setSelectedDesign] = useState(mandalaDesigns[0]);
  const [svgContent, setSvgContent] = useState("");
  const svgContainerRef = useRef();

  // Load SVG dynamically
  useEffect(() => {
    fetch(selectedDesign.file)
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
      .catch((error) => console.error("Error loading SVG:", error));
  }, [selectedDesign]);

  const handleSvgClick = (event) => {
    if (
      event.target &&
      (event.target.tagName === "path" || event.target.tagName === "circle" || event.target.tagName === "rect")
    ) {
      event.target.setAttribute("fill", selectedColor);
    }
  };

  // Ensure SVG is clickable and reflects the color change
  useEffect(() => {
    if (svgContainerRef.current) {
      svgContainerRef.current.innerHTML = svgContent;
      const svgElements = svgContainerRef.current.querySelectorAll("path, circle, rect");
      svgElements.forEach((element) => {
        element.addEventListener("click", handleSvgClick);
      });
      return () => {
        svgElements.forEach((element) => {
          element.removeEventListener("click", handleSvgClick);
        });
      };
    }
  }, [svgContent, selectedColor]);

  const handleDesignChange = (event) => {
    const selected = mandalaDesigns.find((d) => d.id === event.target.value);
    setSelectedDesign(selected);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const downloadSvg = () => {
    const svgData = svgContainerRef.current.innerHTML;
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mandala-design.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box sx={{ display: "flex", maxWidth: 2000, margin: "0 auto", padding: 4 }}>
      {/* Left Side UI */}
      <Box sx={{ flex: 1, padding: 2 }}>
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          🌈 Mandala Coloring App
        </Typography>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6">Choose Design</Typography>
            <Select onChange={handleDesignChange} value={selectedDesign.id} fullWidth>
              {mandalaDesigns.map((design) => (
                <MenuItem key={design.id} value={design.id}>
                  Design {design.id}
                </MenuItem>
              ))}
            </Select>

            <Typography sx={{ mt: 2 }}>Pick a Color</Typography>
            {/* Color Picker */}
            <ChromePicker color={selectedColor} onChangeComplete={handleColorChange} />
          </CardContent>
        </Card>

        <Button variant="contained" onClick={downloadSvg} sx={{ mt: 2 }}>
          Download Design
        </Button>
      </Box>

      
<Box
  ref={svgContainerRef}
  sx={{
    flex: 3,
    height: "1000px", // Fixed height for canvas
    width: "1000px", // Fixed width for canvas
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  <svg
    style={{
      width: "100%",
      height: "100%",
    }}
    viewBox="0 0 500 500" // Ensure the viewBox is consistent
    preserveAspectRatio="xMidYMid meet" // Maintain aspect ratio and center
    xmlns="http://www.w3.org/2000/svg"
    dangerouslySetInnerHTML={{ __html: svgContent }}
  />
</Box>
</Box>
  );
};

export default Template;
