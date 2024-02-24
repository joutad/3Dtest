import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Island from './Models/Island.jsx'

function App() {
  return (
    <div className="App">
        <Canvas>
            <Suspense fallback={null}>
                <Island/>
            </Suspense>
        </Canvas>
    </div>
  )
}

export default App
