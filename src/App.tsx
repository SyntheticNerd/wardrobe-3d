import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import Configurator from "./components/Configurator";

function App() {
	return (
		<div className="App">
			<Canvas>
				<color attach="background" args={["#101010"]} />
				<fog attach="fog" args={["#101010", 10, 20]} />
				<Experience />
			</Canvas>
			<Configurator />
		</div>
	);
}

export default App;
