import { Instance, Instances } from "@react-three/drei";
import { Outline } from "@react-three/postprocessing";
import { useRef } from "react";
import { AdditiveBlending } from "three";

const INSTANCES = 70;

const StairShape = ({position, rotationY}) => {
   const stairRef = useRef();
    return (<Instance ref={stairRef} position={position} rotation-y = {rotationY} >
        {/* <boxGeometry args={[2, 0.2, 1]} />
        <meshBasicMaterial
            color={'#ffffff'}
            blending={AdditiveBlending}
        /> */}
    </Instance>)
}

const stairPos = Array.from({ length: INSTANCES }, (_, i) => ({
    position: [5 * Math.cos(i * 0.25), i * 0.5, 5 * Math.sin(i * 0.25)],
    rotationY: -i * Math.PI * 0.08,
}));

// console.log(stairPos);

export const Stairs = () => {
    return (
        <group>
            <Instances limit={stairPos.length}>
                <boxGeometry args={[2, 0.2, 1]} />
                <meshStandardMaterial
                    color={'#dddddd'}
                    // blending={AdditiveBlending}
                />
                {/* <meshNormalMaterial /> */}
                {stairPos.map((data, key) => (
                    <StairShape key={key} {...data} />
                ))}
            </Instances>
        </group>
    )
}