import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { ModelType } from "@/types";

const models = {
  activist: {
    filename: "activist",
    scale: 3,
    position: [-0.01, -3.57, -0.1],
  },
  // this model looks like shit
  athlete: {
    filename: "athlete",
    scale: 0.1,
    position: [-0.01, -3.2, -0.1],
  },
  chef: {
    filename: "chef",
    scale: 2,
    position: [-0.01, -3.2, -0.1],
  },
  coder: {
    filename: "coder",
    scale: 0.75,
    position: [-0.01, -3.25, -1.5],
  },
  creator: {
    filename: "creator",
    scale: 3,
    position: [-0.01, -3.2, -0.1],
  },
  explorer: {
    filename: "explorer",
    scale: 15,
    position: [-0.01, -2.2, -0.1],
  },
  gamer: {
    filename: "gamer",
    scale: 2,
    position: [-0.01, -5.5, -0.1],
  },
  leader: {
    filename: "leader",
    scale: 1,
    position: [-0.01, -3, -1.1],
  },
  math: {
    filename: "math",
    scale: 0.0075,
    position: [-0.01, -3.4, -0.1],
  },
  philosophy: {
    filename: "philosophy",
    scale: 0.15,
    position: [-0.01, -2.2, -0.1],
  },
  scientist: {
    filename: "scientist",
    scale: 0.75,
    position: [-0.01, -5.3, -0.1],
  },
  teacher: {
    filename: "teacher",
    scale: 0.02,
    position: [-0.01, -3.2, -0.1],
  },
};

const Model: React.FC<{ model: ModelType }> = ({ model }) => {
  const computer = useGLTF(`./gltf-models/${model}/scene.gltf`);

  return (
    <mesh>
      <hemisphereLight intensity={3.0} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={models[model].scale}
        position={models[model].position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ModelCanvas: React.FC<{ model: ModelType }> = ({ model }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model model={model} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ModelCanvas;
