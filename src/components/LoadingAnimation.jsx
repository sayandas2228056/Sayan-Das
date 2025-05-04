import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smoother progress animation
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const remainingProgress = 100 - prevProgress;
        const increment = Math.min(remainingProgress * 0.1, Math.random() * 5);
        const newProgress = prevProgress + increment;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const useCounter = (value) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      setDisplayValue(Math.floor(value));
    }, [value]);

    return displayValue;
  };

  const displayProgress = useCounter(progress);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          {/* Logo Container */}
          <motion.div
            className="relative w-32 h-32 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 rounded-full opacity-40 bg-gradient-to-r from-gray-300 via-orange-400 to-red-500 blur-lg animate-pulse"></div>

            {/* Logo container with gradient border */}
            <div className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-r from-gray-300 via-orange-400 to-red-500">
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden bg-black rounded-full">
                <motion.img
                  src="/Logo.jpg"
                  alt="Logo"
                  className="object-contain w-full h-full rounded-full"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Progress bar with enhanced design */}
          <motion.div
            className="relative w-64 h-2 overflow-hidden bg-gray-700 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "16rem" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 h-full bg-gradient-to-r from-gray-300 via-orange-400 to-red-500"
              style={{ width: `${progress}%` }}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-[length:10px_10px] bg-gradient-to-r from-black/10 to-white/10" />
          </motion.div>

          {/* Progress percentage */}
          <motion.div
            className="mt-4 text-lg font-medium tracking-wider text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {displayProgress}%
          </motion.div>

          {/* Loading text with professional animation */}
          <motion.div
            className="mt-2 font-medium text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {progress < 100 ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-orange-400"
              >
                Welcome to My Portfolio
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-orange-400"
              >
                Welcome to My Portfolio
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
