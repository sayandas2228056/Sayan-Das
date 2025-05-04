import { useState, useEffect } from "react";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Logo animation */}
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-orange-400 to-red-500 animate-pulse"></div>
        <div className="absolute flex items-center justify-center overflow-hidden bg-black rounded-full inset-2">
          <img
            src="/Logo.jpg"
            alt="Logo"
            className="object-contain w-full h-full rounded-full cursor-pointer"
          />
        </div>

        {/* Orbiting elements */}
        <div
          className="absolute w-4 h-4 bg-white rounded-full animate-orbit-1"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-orange-400 rounded-full animate-orbit-2"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-red-500 rounded-full animate-orbit-3"
          style={{ animationDuration: "5s" }}
        ></div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 overflow-hidden bg-gray-800 rounded-full">
        <div
          className="h-full transition-all duration-300 ease-out bg-gradient-to-r from-white via-orange-400 to-red-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Loading text */}
      <div className="mt-4 font-medium text-white">
        {progress < 100 ? (
          <div className="flex items-center">
            The Portfolio Site is loading
            <span className="inline-flex ml-2">
              <span className="animate-bounce-delay-1">.</span>
              <span className="animate-bounce-delay-2">.</span>
              <span className="animate-bounce-delay-3">.</span>
            </span>
          </div>
        ) : (
          <div className="animate-pulse">Welcome </div>
        )}
      </div>
    </div>
  );
};

export default LoadingAnimation;
