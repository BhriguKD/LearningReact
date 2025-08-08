import { motion } from "motion/react";
import { Lock, Unlock } from "lucide-react";

export const ColorSwatch = ({ color, onLockToggle, onCopy }) => {
  return (
    <motion.div
      style={{ backgroundColor: color.hex }}
      className="h-full w-full flex flex-col justify-between items-center p-6 text-white"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <button onClick={onLockToggle} className="self-end">
        {color.locked ? <Lock size={24} /> : <Unlock size={24} />}
      </button>
      <div
        onClick={onCopy}
        className="bg-black/50 px-4 py-2 rounded-full cursor-pointer backdrop-blur-sm"
      >
        <h2 className="font-bold text-lg">{color.hex}</h2>
      </div>
    </motion.div>
  );
};