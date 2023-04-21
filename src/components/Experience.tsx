import React, { Suspense } from "react";
import {
	MeshReflectorMaterial,
	PresentationControls,
	Stage,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Chair from "./Chair";
import Josh from "./Josh";

const Experience = () => {
	return (
		<PresentationControls
			speed={1.5}
			global
			zoom={0.7}
			polar={[-0.1, Math.PI / 4]}
		>
			<Stage environment="city" intensity={0.6} castShadow={false}>
				{/* <Suspense fallback={null}> */}
					<Chair />
					{/* <Josh /> */}
				{/* </Suspense> */}
			</Stage>
			<mesh rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[170, 170]} />
				<MeshReflectorMaterial
					blur={[300, 100]}
					resolution={2048}
					mixBlur={10}
					mixStrength={20}
					roughness={1}
					depthScale={1}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color="#1e1e1e"
					metalness={0.5}
					mirror={1}
				/>
			</mesh>
		</PresentationControls>
	);
};

export default Experience;
