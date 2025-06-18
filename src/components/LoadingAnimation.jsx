import { useState, useEffect } from "react";
import Logo from "../assets/Logo.jpg";

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
    <div className="flex overflow-hidden fixed inset-0 z-50 justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(249,115,22,0.1)_50%,_transparent_75%)] bg-[length:20px_20px] animate-shimmer"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-orange-500/30 animate-float"
            style={{
              left: `${(index + 1) * 8}%`,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo and Name */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4 w-24 h-24 animate-float-slow">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse"></div>
            <div className="flex absolute inset-2 justify-center items-center bg-black rounded-full">
              <img 
                src={Logo} 
                alt="Sayan Das Logo" 
                className="object-cover w-16 h-16 rounded-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-spin-slow"></div>
          </div>
          <div className="text-6xl font-bold tracking-wider text-white animate-glow">
            SAYAN DAS
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-12 text-xl text-orange-400 animate-fade-in-out">
          Welcome to my portfolio
        </div>

        {/* Spinner */}
        <div className="relative mx-auto mb-8 w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 animate-spin border-orange-500/30 border-t-orange-500"></div>
          <div className="absolute inset-2 rounded-full border-4 border-orange-400/20 border-t-orange-400 animate-spin-reverse"></div>
        </div>

        {/* Progress Bar */}
        <div className="overflow-hidden mx-auto mb-4 w-72 h-1 rounded-full bg-orange-500/20">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 transition-all duration-300 ease-out"
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

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
