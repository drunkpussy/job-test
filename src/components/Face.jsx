/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { DoubleSide } from 'three'

export function Face(props) {
  const { nodes, materials } = useGLTF('/models/face.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.face.geometry}
        material={nodes.face.material}
      >
        <meshStandardMaterial color={"#87fffb"} roughness={0} side={DoubleSide} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/face.glb')