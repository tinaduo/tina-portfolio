import React from 'react';

const ChatBubble = ({ message, number, isRight = false }) => {
  return (
    <div className={`relative w-full' ${isRight ? 'flex justify-end' : 'flex justify-start'}`}>
      <div className={`relative rounded-lg px-8 py-8 bg-gray-200 ${isRight ? 'ml-20' : 'mr-20'}`}>
        <p className='font-departure text-md text-black/25 pb-4'>0{number}</p>
        <p className="text-3xl font-roobert">{message}</p>
        <div 
          className={`absolute bottom-0 w-0 h-0 ${isRight ? '-right-2' : '-left-2'}`}
          style={{
            borderTop: '12px solid transparent',
            borderRight: isRight ? 'none' : '14px solid #e5e7eb',
            borderLeft: isRight ? '14px solid #e5e7eb' : 'none',
            borderBottom: '0px solid transparent'
          }} 
        />
      </div>
    </div>
  );
};

export default ChatBubble;