import React from 'react';

const HeroVideo: React.FC = () => {
  return (
    <div className="relative mt-4 md:mt-0" aria-hidden="true">
      <video
        className="w-full h-auto rounded-3xl"
        src="/videos/hero-scene.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default HeroVideo;
