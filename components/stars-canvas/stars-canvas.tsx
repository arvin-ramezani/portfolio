import { Preload, Points, PointMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, FC } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars: FC = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    if (!ref || !ref.current) return;

    // @ts-ignore
    ref.current.rotation.x -= delta / 10;
    // @ts-ignore
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotaion={[0, 0, Math.PI / 4]}>
      {/* @ts-ignore */}
      <Points
        ref={ref}
        positions={sphere}
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
    <div>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
