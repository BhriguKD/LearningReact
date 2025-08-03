import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

const FAQ_DATA = [
  {
    question: "What is React?",
    answer: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
  },
  {
    question: "What is Framer Motion?",
    answer: "Framer Motion is a production-ready motion library for React that makes creating beautiful animations easy.",
  },
  {
    question: "What is Tailwind CSS?",
    answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
  },
];

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-stone-100 border border-stone-300">
      {FAQ_DATA.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};