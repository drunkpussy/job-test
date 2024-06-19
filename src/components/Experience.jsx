import { useRef } from 'react';

import { OrbitControls, MeshReflectorMaterial, useHelper } from "@react-three/drei";
import { Stairs } from "./Stairs";
import { BackSide, DoubleSide, Object3D, SpotLightHelper } from "three";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { Papers } from "./Papers";
import { Circle } from "./Circle";
import { Heart } from "./Heart";
import { Face } from "./Face";
import { Emmanuel } from "./Emmanuel";
import { Emmision } from "./Emission";
import { Background } from "./Background";

export const Experience = () => {

  const spotRef = useRef();
  // useHelper(spotRef, SpotLightHelper);
  const spotTarget = new Object3D();
  spotTarget.position.set(-30, 10, -10);

  return (
    <>
      <EffectComposer>
        <Bloom threshold={0.3} luminanceThreshold={1} intensity={0.5}  />
        <Vignette />
      </EffectComposer>
      <OrbitControls />
      <directionalLight position={[3, 2, 2]} intensity={4} castShadow/>
      <spotLight ref={spotRef} position={[0, 35, -3]} angle={0.5} target={spotTarget} intensity={50} castShadow/>
      <ambientLight intensity={0.5} />

      {/* Stairs */}
      <Stairs />

      {/* Papers */}
      <Papers />

      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[60, 60]} />
        {/* <meshStandardMaterial color="#87fffb" /> */}
        <MeshReflectorMaterial
          color={"#87fffb"}
          blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
          mixBlur={0} // How much blur mixes with surface roughness (default = 1)
          mixStrength={1} // Strength of the reflections
          mixContrast={1} // Contrast of the reflections
          resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
          mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
          minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
          maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
          depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
          reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
        />
      </mesh>

      {/* Background */}
      <Background />
     
      {/* Emmision */}
      <Emmision position={[9, 0, 0]} />

      {/* Squares */}
      <Circle castShadow position={[-10, 4, -5]} scale={3} rotation={[0, Math.PI * 0.4, 0]}/>
      <Heart castShadow position={[-8, 20, -8]} scale={3} rotation={[0, Math.PI * 0.3, 0]}/>
      <Face castShadow position={[10, 14, -5]} scale={3} rotation={[0, -Math.PI * 0.3, 0]}/>
    
        {/* Character */}
        <Emmanuel scale={2} />
    </>
  );
};
