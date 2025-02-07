import React, { useState, useRef } from "react";

const AsciiArt = () => {
  const asciiArt = `     
                                           000000000000000 90007  3400000003                        
                                            1800000000000080005800000008842                         
                                                  36890000000027                                    
                                                        00000931  71                                
                                                      2000000 11   73                               
                                                       700000000088800000000091                     
                                                       6000000000000000000000000                    
                                                    760000 00000000000000000000001                  
                                                  70000000 500000002 600000000000007                
                                               6000000000   000002      0000000000000               
                                           50000000000001   9000          000000000006              
           64                      65    000000000000000     77             1000000000              
          0009568000           1900008 10000000000000001                       15980007             
         00000000000          400000008000000000000095                                              
         00000000000        30000000000080000000002                                                 
        500000000008      30000000000000     3                                                      
 01     30000000000     7000000000000000                                                            
900       00000002     80000000000000000                                                            
0000      100005  7 1 00000000000005                                                              10
000007     100014 67 90000000000000                                                              700
0000004      0071723 00000000000009     77                                                       000
00000000006   6076716000009651      19000217                                                     000
7000000000008   6111000074896655900000000000000                                                  000
  00000000000000060044900000000000000000000000007      5000000001                               6000
   300000067   36752 1  2525000000000000000000003  7000000000000000091                          0000
     327     604         2006 75427  60000000000 300000000000000000001           3              0000
          1803            0001       260000000 1000000000000000000000            05             0000
         400              6000          80000000000000000000000000001            00           7 3000
       70002              0000           30000000000000000000000000             9000            7400
      10000              00005   700000000000000000000000000000000              700002            70
     00006              70007    0000000090031377  7                             3000007            
   100001               7007    00000002   00432313                               7000002         12
 200421                 505     0000000    05000000                                7000000621717  38
                        12      400000     07 3555002                                564211566522586
                                 70000     02      50067                                     500000 
                                   200     104      0000002                                8000003  
                                     006    500     000000000                          800000000    
                                      00      40    0000000000                       2000000007     
                                      00       0    60000000000                   300000000006      
                                     551       0     00000000006                 6866800000007      
                                              10     590000000007                       7133        
                                              702          390000                                   
                                               400             409                                  
                                                 04                                                    
`;

  const [hoverPosition, setHoverPosition] = useState({ x: -100, y: -100 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHoverPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoverPosition({ x: -100, y: -100 });
  };

  const renderAsciiArt = () => {
    const radius = 150;
    const charWidth = 7.5; 
    const charHeight = 14;
    const lines = asciiArt.split("\n");

    return lines.map((line, row) => (
      <div key={row} style={{ display: "block" }}>
        {line.split("" ).map((char, col) => {
          const charCenterX = col * charWidth + charWidth / 2;
          const charCenterY = row * charHeight + charHeight / 2;

          const dx = charCenterX - hoverPosition.x;
          const dy = charCenterY - hoverPosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const isWithinRadius = distance <= radius;

          return (
            <span
              key={col}
              style={{
                fontWeight: isWithinRadius ? "bold" : "normal",
                fontStyle: isWithinRadius ? "italic" : "normal",
                color: isWithinRadius ? "#DB0032" : "black",
                transition: "color 0.4s ease-in-out",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    ));
  };

  return (
    <div
      className="select-none"
      ref={containerRef}
      style={{ position: "relative", display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          fontFamily: "monospace",
          whiteSpace: "pre",
          fontSize: "12px",
          lineHeight: "12px",
        }}
      >
        {renderAsciiArt()}
      </div>
    </div>
  );
};

export default AsciiArt;
