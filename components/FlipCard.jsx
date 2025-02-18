'use client';

import { useState } from 'react';
import clsx from 'clsx';

export default function FlipCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <div
                className="relative w-80 [perspective:1000px] hover:[perspective:1200px]"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div
                    className={clsx(
                        'relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]',
                        isFlipped ? '[transform:rotateY(180deg)]' : ''
                    )}
                >
                    {/* front side */}
                    <div className="absolute rounded-md w-full h-full flex items-center justify-center text-lg font-bold [backface-visibility:hidden] overflow-hidden">
                        <img src="/images/harmony/harmony_id_front.png" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* back side */}
                    <div className="w-full h-full flex items-center justify-center text-lg font-bold [backface-visibility:hidden] [transform:rotateY(180deg)] relative overflow-hidden">
                        <img src="/images/harmony/harmony_id_back.png" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
}
