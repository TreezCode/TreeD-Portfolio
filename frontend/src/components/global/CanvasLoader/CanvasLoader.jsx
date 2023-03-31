import { Html, useProgress } from "@react-three/drei"
import './CanvasLoader.css'

const CanvasLoader = () => {
const { progress } = useProgress();

  return (
      <Html wrapperClass="canvas-html">
          <div className="canvas-loader"></div>
          <p className="canvas-loader-text">{progress.toFixed(2)}%</p>
      </Html>
  )
}

export default CanvasLoader