import React, { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

function CameraController({ cameraPosition }) {
  const { camera } = useThree()
  useEffect(() => {
    if (cameraPosition) {
      camera.position.set(...cameraPosition)
      camera.lookAt(0, 0, 0)
    }
  }, [camera, cameraPosition])
  return null
}

export default function ModelViewer({ url, cameraPosition }) {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <Canvas camera={{ position: cameraPosition || [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model url={url} />
        </Suspense>
        <CameraController cameraPosition={cameraPosition} />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  )
}
