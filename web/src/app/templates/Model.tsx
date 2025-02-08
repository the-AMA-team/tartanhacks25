// const Model = ({ modelName }) => {
//   return (
//     <div>
//       <div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { ModelType } from "@/types";

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
        scale={0.75}
        position={[0, -3.25, -1.5]}
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
