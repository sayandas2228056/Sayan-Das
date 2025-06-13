import { useState, useEffect } from "react";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 3 + 1, 100));
    }, 50);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-orange-500/30 animate-float"
            style={{
              left: `${(index + 1) * 10}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 text-6xl font-bold tracking-wider text-white animate-glow">
          SAYAN DAS
        </div>

        {/* Loading Text */}
        <div className="mb-12 text-xl text-orange-400 animate-fade-in-out">
          Welcome to my portfolio
        </div>

        {/* Spinner */}
        <div className="w-16 h-16 mx-auto mb-8 border-4 rounded-full border-orange-500/30 border-t-orange-500 animate-spin" />

        {/* Progress Bar */}
        <div className="h-1 mx-auto mb-4 overflow-hidden rounded-full w-72 bg-orange-500/20">
          <div
            className="h-full transition-all duration-300 ease-out bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="text-sm font-light tracking-wider text-orange-400">
          {Math.round(progress)}%
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
          }
          to {
            text-shadow: 0 0 30px rgba(249, 115, 22, 0.8),
                         0 0 40px rgba(249, 115, 22, 0.3);
          }
        }

        @keyframes fade-in-out {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
