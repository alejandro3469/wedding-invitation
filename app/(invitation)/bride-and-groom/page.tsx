import React from 'react';
import Image from 'next/image';

const Component = () => {
  return (
    <div>
        <Image
          className={''}
          src="/ad-files/wedding-kiss-add-image.jpg"
          alt="Wedding couple"
          width={601.6}
          height={401.6}
          priority
        />
    </div>
  );
};

export default Component;
