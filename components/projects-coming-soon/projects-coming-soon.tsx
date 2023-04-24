import React from 'react';
import Typewriter from 'typewriter-effect';

const ProjectsComingSoon = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: ['Coming', 'Soon', '...'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default ProjectsComingSoon;
