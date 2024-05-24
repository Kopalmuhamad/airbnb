import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt={alt} layout="fill" className="rounded-full" />
    </div>
  );
};
