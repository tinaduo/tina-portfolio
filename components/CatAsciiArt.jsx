import { useState } from 'react';

const AsciiCatArt = () => {
  const [isHovered, setIsHovered] = useState(false);

  const normalCat = `
            
      ＿＿＿＿
    /  ||￣￣||   ∧＿∧
   |...||＿＿|| （    ）
   |￣￣＼三⊂/￣￣￣￣￣/
   |　　　|/　       /
  `;

  const happyCat = `
back to top?
      ＿＿＿＿
    /  ||￣￣||  ∧＿∧ 
   |...||＿＿||（＾ω＾)
   |￣￣＼三⊂/￣￣￣￣￣/
   |　　　|/　       /
  `;

  return (
    <div className="font-mono text-lg">
      <pre 
        className="whitespace-pre select-none transition-all duration-300 hover:-translate-y-2 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? happyCat : normalCat }
      </pre>
    </div>
  );
};

export default AsciiCatArt;