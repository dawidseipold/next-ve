// Libs
import Image from 'next/image';

// Types
import type { ReactNode } from 'react';

interface IAvatar {
  size: number;
}

interface IAvatarWithText extends IAvatar {
  text: string;
  src?: never;
}

interface IAvatarWithImage extends IAvatar {
  src: string;
  text?: never;
}

const Avatar = ({ size, src, text }: IAvatarWithText | IAvatarWithImage) => {
  console.log(src);

  if (src === undefined) {
    return <div>{text}</div>;
  }

  return <Image src={src} width={size} height={size} />;
};

export default Avatar;
