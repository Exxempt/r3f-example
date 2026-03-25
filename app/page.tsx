"use client"

import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, GizmoHelper, GizmoViewport } from "@react-three/drei";
import Interface from '@/components/Interface'
import { useConfigurator } from "../contexts/Configurator";
import { MonkeEars, MonkeMouth, MonkeType, MonkeHat, MonkeClothes, MonkeEyes } from '@/components/monke/MonkeGen';
import { PivotControls } from '../components/pivotControls/index'
import { SheetDemo } from '@/components/SheetDemo';

export default function Home() {
  const {
    selectedEarsOption,
    selectedEyesOption,
    selectedMouthOption,
    selectedTypeOption,
    selectedHatOption,
    selectedClothesOption,
    selectedBGOption,
  } = useConfigurator();

  const bgColorMap: Record<string, string> = {
    Blue: '#e2e6fe',
    Green: '#9de5b5',
    Orange: '#f5bf93',
    Purple: '#c6aedd',
    Yellow: '#f2e8ac',
    Red: '#f399af',
    White: '#e2e6fe',
  }

  const bgColor = bgColorMap[selectedBGOption] ?? ''
  const colorArgs: [string] | null = bgColor ? [bgColor] : null

  const mainContentStyle = {
    height: 'calc(100vh - 55px)', // Adjust 60px to your navbar height
  };

  return (
    <main className="container w-screen h-screen flex" style={mainContentStyle} >
      <div className=" sm:block sm:w-100 lg:w-3/4">
        <Canvas
          className=''
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            position: [0, 0, 75],
            fov: 20,
          }}>
          {colorArgs && <color attach="background" args={colorArgs} />}
          <ambientLight intensity={0.9} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={5} shadow-mapSize={2048} castShadow />
          <pointLight position={[-10, -10, -10]} />

          <PivotControls visible={false} rotation={[0, -Math.PI / 2, 0]} anchor={[1, -1, -1]} scale={75} depthTest={false} fixed lineWidth={2}>
            <mesh castShadow receiveShadow position={[-1, 0.5, 1]}>
              <MonkeType x={selectedTypeOption} />
              <MonkeEars x={selectedEarsOption} />
              <MonkeEyes x={selectedEyesOption} />
              <MonkeMouth x={selectedMouthOption} />
              <MonkeHat x={selectedHatOption} />
              <MonkeClothes x={selectedClothesOption} />
            </mesh>
          </PivotControls>

          <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
            <GizmoViewport labelColor="white" axisHeadScale={1} />
          </GizmoHelper>

          <OrbitControls makeDefault />
        </Canvas>
        <SheetDemo />
      </div>
      <div className="hidden sm:w-0 md:block md:w-1/4">
        <Interface />
      </div>
    </main>
  )
}
