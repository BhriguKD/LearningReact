import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export const AccordionItem = ({item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-700">
      <div 
      className="flex justify-between items-center p-4 cursor-pointer" onClick={onClick}
      >
        <h3
        className="text-lg font-medium text-slate-100"
        >{item.question}</h3>
          <motion.div
            animate={{rotate: isOpen ? 180:0}} 
            transition={{duration:0.3}} 
          >
            <ChevronDown
                size={24} className="text-slate-400" />
          </motion.div>
      </div>
      <AnimatePresence>
        { isOpen && (
          <motion.div
            initial={{height:0, opacity:0}}
            animate={{height: "auto", opacity: 1}}
            exit={{height:0, opacity:  0}}
            transition={{duration:0.3, ease:"easeInOut"}}
            className="overflow-hidden"
          >
            <p className="p-4 pt-0 text-slate-300">{item.answer}</p>
          </motion.div>
        )

        }
      </AnimatePresence>
    </div>
  )
}