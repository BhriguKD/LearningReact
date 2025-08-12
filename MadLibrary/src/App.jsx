import { useState } from "react";
import { StoryForm } from "./StoryForm";
import { motion, AnimatePresence } from "motion/react";

function App() {
  const [story, setStory] = useState(null);

  const handleGenerateStory = (words) => {
    const newStory = `One day, a ${words.adjective} ${words.noun} decided to ${words.verb} all the way to the ${words.place}. It was a truly remarkable sight!`;
    setStory(newStory);
  };

  const handleReset = () => {
    setStory(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">Mad Libs Generator</h1>
        <p className="text-slate-400">Fill in the words to create a silly story.</p>
      </div>

      <AnimatePresence mode="wait">
        {!story ? (
          <motion.div key="form">
            <StoryForm onGenerate={handleGenerateStory} />
          </motion.div>
        ) : (
          <motion.div
            key="story"
            className="text-center max-w-lg w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl leading-relaxed bg-slate-800 p-6 rounded-lg border border-slate-700">
              {story}
            </p>
            <button
              onClick={handleReset}
              className="mt-6 bg-slate-700 text-white font-bold py-2 px-6 rounded-lg"
            >
              Create Another
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;