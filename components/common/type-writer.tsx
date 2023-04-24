import React, { FC } from 'react';
import Typewriter from 'typewriter-effect';

interface TypeWriterProps {
  text: string[];
  autoStart?: boolean;
  loop?: boolean;
}

const TypeWriter: FC<TypeWriterProps> = ({
  text,
  autoStart = true,
  loop = true,
}) => {
  return (
    <Typewriter
      options={{
        strings: text,
        autoStart,
        loop,
      }}
    />
  );
};

export default TypeWriter;
