import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"


function App() {

  return (
    <Canvas
      camera={{ position: [0, 20, 30] }} fov={75}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <Experience />
    </Canvas>
  )
}

export default App
