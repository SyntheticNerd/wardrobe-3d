import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

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
