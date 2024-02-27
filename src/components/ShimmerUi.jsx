import React from 'react';

const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill('')
        .map((_, index) => (
          <div key={index} className="w-32 h-3/4 rounded-md mr-4 border border-black bg-pink-50"></div>
        ))}
    </div>
  );
};

export default ShimmerUi;
