import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber"

function App() {
	return (
		<div className="App">
			<Canvas>
				<color attach="background" args={["#101010"]} />
				<Experience />
			</Canvas>
		</div>
	);
}

export default App;
