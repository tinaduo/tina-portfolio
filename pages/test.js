import { useState, useEffect } from "react";

const Test = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-lg">
      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          transform: `translate(${position.x - (isHovering ? 41 : 16)}px, ${position.y - (isHovering ? 19 : 16)}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {isHovering ? (
          <div
            className="relative animate-in zoom-in-50 duration-300"
            style={{ width: "82px", height: "38px" }}
          >
            {/* Main rectangle */}
            <div
              className="absolute bg-white border border-black"
              style={{
                top: "3.5px",
                left: "3.5px",
                width: "75px",
                height: "31px",
                animation: "expand 0.3s ease-out",
              }}
            />

            {/* Corner squares with staggered animation */}
            <div
              className="absolute bg-white border border-black opacity-0"
              style={{
                top: "0.5px",
                left: "0.5px",
                width: "7px",
                height: "7px",
                animation: "fadeInCorner 0.2s ease-out 0.1s forwards",
              }}
            />
            <div
              className="absolute bg-white border border-black opacity-0"
              style={{
                top: "0.5px",
                right: "0.5px",
                width: "7px",
                height: "7px",
                animation: "fadeInCorner 0.2s ease-out 0.2s forwards",
              }}
            />
            <div
              className="absolute bg-white border border-black opacity-0"
              style={{
                bottom: "0.5px",
                left: "0.5px",
                width: "7px",
                height: "7px",
                animation: "fadeInCorner 0.2s ease-out 0.3s forwards",
              }}
            />
            <div
              className="absolute bg-white border border-black opacity-0"
              style={{
                bottom: "0.5px",
                right: "0.5px",
                width: "7px",
                height: "7px",
                animation: "fadeInCorner 0.2s ease-out 0.4s forwards",
              }}
            />

            {/* Text with fade in animation */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0"
              style={{ animation: "fadeIn 0.3s ease-out 0.2s forwards" }}
            >
              <span
                className="text-black select-none font-roobert text-lg font-medium"
              >
                view
              </span>
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 bg-white rounded-full opacity-30 transition-all duration-300" />
        )}
      </div>

      {/* Interactive element */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-blue-300 p-6 cursor-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <style>{`
          @keyframes expand {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInCorner {
            from {
              opacity: 0;
              transform: scale(0);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
        <h3 className="text-lg font-medium">hover container</h3>
      </div>
    </div>
  );
};

export default Test;
