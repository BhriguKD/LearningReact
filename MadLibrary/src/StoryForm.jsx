import { motion } from "motion/react";
import { Wand2 } from "lucide-react";
import { useState } from "react";

const InputField = ({ name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-slate-300 capitalize">
      {name}
    </label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
      required
    />
  </div>
);

export const StoryForm = ({ onGenerate }) => {
  const [words, setWords] = useState({
    adjective: "",
    noun: "",
    verb: "",
    place: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWords((prevWords) => ({
      ...prevWords,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(words);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <InputField name="adjective" value={words.adjective} onChange={handleChange} />
      <InputField name="noun" value={words.noun} onChange={handleChange} />
      <InputField name="verb" value={words.verb} onChange={handleChange} />
      <InputField name="place" value={words.place} onChange={handleChange} />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-pink-600 text-white font-bold py-3 px-4 rounded-lg text-lg"
      >
        <Wand2 />
        Generate Story
      </motion.button>
    </motion.form>
  );
};