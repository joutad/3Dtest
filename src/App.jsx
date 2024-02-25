import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {OrbitControls} from "@react-three/drei";
import Island from './Models/Island.jsx'
import './App.css'

function App() {
    return (
    <div className="App">
        <div className='canvas-container'>
            <h1>Your model</h1>
            <Canvas className='canvas' camera={{position: [0, 90, -325]}}>
                <Suspense fallback={null}>
                    <Island position={[0, 0, 0]}/>
                    <OrbitControls/>
                </Suspense>
            </Canvas>
        </div>
    </div>
    )
}

export default App
