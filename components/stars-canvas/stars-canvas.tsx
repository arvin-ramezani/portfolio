import { Preload, Points, PointMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, FC } from 'react';
import styled from 'styled-components';
import * as random from 'maath/random/dist/maath-random.cjs';

const Stars: FC = (props) => {
  const ref = useRef(null);

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    if (!ref || !ref.current) return;

    // @ts-ignore
    ref.current.rotation.x -= delta / 10;
    // @ts-ignore
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <StyledStarsCanvas>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />

        <Preload all />
      </Canvas>
    </StyledStarsCanvas>
  );
};

export const StyledStarsCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default StarsCanvas;
