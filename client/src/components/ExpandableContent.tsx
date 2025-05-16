import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableContentProps {
  children: React.ReactNode;
  buttonLabel?: string;
  buttonCloseLabel?: string;
}

const ExpandableContent = ({ 
  children, 
  buttonLabel = "See more details", 
  buttonCloseLabel = "Hide details" 
}: ExpandableContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-xs flex items-center text-white/80 hover:text-white mt-2"
      >
        <span>{isExpanded ? buttonCloseLabel : buttonLabel}</span>
        {isExpanded ? (
          <ChevronUp className="ml-1 h-3 w-3 transition-transform duration-300" />
        ) : (
          <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-300" />
        )}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 bg-white/5 p-3 rounded-lg overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableContent;
