import React, { useState, useRef, useEffect } from "react";

const LivePhoto = ({
  imageUrl = "/api/placeholder/400/300",
  videoUrl = "#",
  className = "w-[450px] h-[450px]",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transitionState, setTransitionState] = useState("idle"); // "idle", "entering", "playing", "leaving"
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && videoUrl !== "#") {
      videoRef.current.load();
      videoRef.current.onloadeddata = () => {
        setIsLoaded(true);
      };
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [videoUrl]);

  const handleMouseEnter = () => {
    if (isLoaded) {
      setTransitionState("entering");

      timeoutRef.current = setTimeout(() => {
        setIsPlaying(true);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().then(() => {
            timeoutRef.current = setTimeout(() => {
              setTransitionState("playing");
            }, 200);
          });
        }
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    setTransitionState("leaving");

    timeoutRef.current = setTimeout(() => {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }

      timeoutRef.current = setTimeout(() => {
        setTransitionState("idle");
      }, 150);
    }, 100);
  };

  const getImageClasses = () => {
    const baseClasses = "absolute inset-0 w-[450px] h-[450px] object-cover";

    switch (transitionState) {
      case "entering":
        return `${baseClasses} transition-all duration-500 ease-in-out scale-105`;
      case "leaving":
        return `${baseClasses} transition-all duration-500 ease-in-out opacity-30`;
      case "idle":
        return `${baseClasses} transition-all duration-300 ease-in-out opacity-100 scale-100`;
      default:
        return `${baseClasses} transition-all duration-300 ease-in-out opacity-0`;
    }
  };

  const getVideoClasses = () => {
    const baseClasses = "absolute inset-0 w-[450px] h-[450px] object-cover";

    switch (transitionState) {
      case "entering":
        return `${baseClasses} transition-all duration-500 ease-in-out opacity-40`;
      case "playing":
        return `${baseClasses} transition-all duration-800 ease-in-out opacity-100 scale-100`;
      case "leaving":
        return `${baseClasses} transition-all duration-500 ease-in-out opacity-70 scale-105`;
      default:
        return `${baseClasses} transition-all duration-300 ease-in-out opacity-0`;
    }
  };

  return (
    <div
      className={`relative overflow-hidden w-[450px] h-[450px] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* subtle hover effect container */}
      <div className="absolute inset-0 bg-black transition-transform duration-100 ease-in hover:scale-105" />

      <img
        width={450}
        height={450}
        src={imageUrl}
        alt="Live Photo"
        className={getImageClasses()}
      />

      <video
        width={450}
        height={450}
        ref={videoRef}
        className={getVideoClasses()}
        muted
        playsInline
        loop
      >
        {videoUrl !== "#" && <source src={videoUrl} type="video/mp4" />}
      </video>

      {/* gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20 transition-opacity duration-1000 ${isPlaying ? "opacity-10" : "opacity-20"}`}
      />
    </div>
  );
};

export default LivePhoto;
