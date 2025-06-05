import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function Model({ url }) {
  const { scene } = useGLTF(url)

  // Enable shadow casting and receiving on all meshes in the model
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])

  return <primitive object={scene} />
}

function CameraController({ cameraPosition, cameraRotation, enableInteraction = true }) {
  const { camera } = useThree()
  const controlsRef = useRef()

  useEffect(() => {
    console.log('CameraController - Received rotation:', cameraRotation)

    if (controlsRef.current) {
      // Temporarily disable controls
      controlsRef.current.enabled = false

      if (cameraPosition) {
        console.log('Setting camera position:', cameraPosition)
        camera.position.set(...cameraPosition)
      }

      const hasNonZeroRotation = Array.isArray(cameraRotation) &&
        cameraRotation.length === 3 &&
        (cameraRotation[0] !== 0 || cameraRotation[1] !== 0 || cameraRotation[2] !== 0)

      console.log('Has non-zero rotation?', hasNonZeroRotation, cameraRotation)

      if (hasNonZeroRotation) {
        console.log('Applying rotation:', cameraRotation)

        // Apply rotation
        camera.rotation.set(...cameraRotation)
        camera.updateMatrixWorld()

        // Calculate where the camera is looking based on the rotation
        const direction = new THREE.Vector3(0, 0, -1)
        direction.applyQuaternion(camera.quaternion)
        const target = camera.position.clone().add(direction.multiplyScalar(5))

        // Update controls target to match the rotation
        controlsRef.current.target.copy(target)

      } else {
        console.log('Using lookAt instead')
        camera.lookAt(0, 0, 0)
        controlsRef.current.target.set(0, 0, 0)
      }

      // Re-enable controls after a delay, but only if interaction is enabled
      setTimeout(() => {
        if (controlsRef.current) {
          controlsRef.current.enabled = enableInteraction
          controlsRef.current.update()
        }
      }, 100)
    }
  }, [camera, cameraPosition, cameraRotation, enableInteraction])

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={enableInteraction}
      enableZoom={enableInteraction}
      enableRotate={enableInteraction}
      target={[0, 0, 0]}
    />
  )
}

// Enhanced lighting setup component
function EnhancedLighting() {
  return (
    <>
      {/* Ambient light for overall base illumination - slightly warmer */}
      <ambientLight intensity={0.1} color="#fff" />

      {/* Main directional light (warm sunlight) - increased intensity */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        color="#fff" // white light
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-bias={-0.0001}
      />

      {/* Fill light from the opposite side - cool blue tone */}
      <directionalLight
        position={[-8, 6, -8]}
        intensity={0.5}
        color="#a6d8ff" // Cool blue light
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Rim light from behind - cool purple tone for depth */}
      <directionalLight
        position={[-2, 8, -12]}
        intensity={0.6}
        color="#d4c5ff" // Cool purple light
      />

      {/* Top-down light for interior illumination - neutral warm */}
      <directionalLight
        position={[2, 15, -2]}
        intensity={0.2}
        color="#fff" // Soft warm white
      />

      {/* Point lights for interior spaces - varied temperatures */}
      <pointLight
        position={[0, 8, 0]}
        intensity={0.8}
        color="#fff" // Warm white
        distance={25}
        decay={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight
        position={[8, 4, -8]}
        intensity={0.4}
        color="#fff" // light yellow
        distance={20}
        decay={2}
      />
      <pointLight
        position={[-8, 4, -8]}
        intensity={0.5}
        color="#b3d9ff" // Cool blue
        distance={18}
        decay={2}
      />
      <pointLight
        position={[0, 3, -15]}
        intensity={0.4}
        color="#e6ccff" // Cool lavender
        distance={15}
        decay={2}
      />
    </>
  )
}

export default function ModelViewer({ url, cameraPosition, cameraRotation, enableInteraction = true }) {
  console.log('ModelViewer props - rotation:', cameraRotation)

  return (
    <div style={{ width: '100%', height: 500 }}>
      <Canvas
        camera={{ position: cameraPosition || [0, 0, 5], fov: 50 }}
        shadows // Enable shadows for better depth perception
      >
        <EnhancedLighting />
        <Suspense fallback={null}>
          <Model url={url} />
        </Suspense>
        <CameraController
          cameraPosition={cameraPosition}
          cameraRotation={cameraRotation}
          enableInteraction={enableInteraction}
        />
      </Canvas>
    </div>
  )
}


// Usage example
// {typeof window !== "undefined" && (
//   <ModelViewer
//     url='/visual-storytelling-with-genai/hospital-3d-model.glb'
//     cameraPosition={this.state.cameraPosition}
//     cameraRotation={this.state.cameraRotation}
//   />
// )}


//Hotspot button for different camera views
{/* <button
  className="hotspot-button button-one"
  onClick={() => this.handleHotspotClick(
    [3, 1, -3],
    [0, Math.PI / 8, 0]
  )} // Close-up waiting room view

  //Coordinate System Breakdown: [1,2,3]
  // 1 (X-axis): How far left/right the camera is positioned
  // Positive values = camera moves to the right
  // Negative values = camera moves to the left
  // 2 (Y-axis): How high/low the camera is positioned
  // Positive values = camera moves up (higher elevation)
  // Negative values = camera moves down (lower elevation)
  // 3 (Z-axis): How far/close the camera is from the center
  // Positive values = camera moves away from the model (further back)
  // Negative values = camera moves closer to the model (in front)
  //Camera rotation uses radians, not degrees, rotation around the y-axis:
  // [0, Math.PI / 4, 0] - Look to the right (45°)
  // [0, -Math.PI / 4, 0] - Look to the left (45°) 
  // [0, Math.PI / 2, 0] - Look completely to the right (90°)
  // [0, Math.PI, 0] - Look behind (180°)
  title="Waiting Room View"
></button> */}
