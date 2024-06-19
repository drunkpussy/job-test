
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { DoubleSide } from 'three';

export function Circle(props) {
  const { nodes, materials } = useGLTF('/models/circle.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.circle.geometry}
        material={nodes.circle.material}
      >
        <meshStandardMaterial color={"#87fffb"} roughness={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/circle.glb')