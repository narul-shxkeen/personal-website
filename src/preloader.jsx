import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [shape, setShape] = useState('circle');

  useEffect(() => {
    const interval = setInterval(() => {
      setShape((prevShape) => (prevShape === 'circle' ? 'square' : 'circle'));
    }, 1000); // Change shape every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`${
          shape === 'circle' ? 'rounded-full' : ''
        } w-16 h-16 bg-green-500 transform transition-transform duration-500 ease-in-out animate-flip`}
      ></div>
    </div>
  );
};

export default Preloader;
