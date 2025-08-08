import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";
import { ColorSwatches } from "./ColorSwatches";
import { generateRandomHexColor } from "./utils";

function App() {
  const [palette, setPalette] = useState([]);

  const generatePalette = () => {
    const newPalette = Array.from({ length: 5 }).map((_, index) => {
      if (palette[index] && palette[index].locked) {
        return palette[index];
      }
      return { hex: generateRandomHexColor(), locked: false };
    });
    setPalette(newPalette);
  };

  const handleLockToggle = (indexToToggle) => {
    const newPalette = palette.map((color, index) => {
      if (index === indexToToggle) {
        return { ...color, locked: !color.locked };
      }
      return color;
    });
    setPalette(newPalette);
  };

  const handleCopyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    toast.success(`Copied ${hex} to clipboard!`);
  };

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex-grow flex">
        {palette.map((color, index) => (
          <ColorSwatches
            key={index}
            color={color}
            onLockToggle={() => handleLockToggle(index)}
            onCopy={() => handleCopyToClipboard(color.hex)}
          />
        ))}
      </div>
      <div className="flex-shrink-0 p-4 bg-white flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generatePalette}
          className="bg-black text-white font-bold py-3 px-8 rounded-lg text-lg"
        >
          Generate Palette
        </motion.button>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;