"use client"

import * as React from 'react'
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, GizmoHelper, GizmoViewport, Sky, Environment, ContactShadows, PresentationControls } from "@react-three/drei";
import Interface from '@/components/Interface'
import { useConfigurator } from "../../contexts/Configurator";
import { MonkeEars, MonkeMouth, MonkeType, MonkeHat, MonkeClothes, MonkeEyes } from '@/components/monke/MonkeGen';
import { PivotControls } from '../../components/pivotControls/index'
import { useControls, button, buttonGroup, folder } from 'leva'
import { traits } from "@/lib/traits";
import { metadata } from '@/lib/metadata';
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

  const [attach, setAttach] = useState<string>('');
  const [args, setArgs] = useState<string>('');
  const [save, setSave] = useState<string>('')


  // traits.filter((item) => item.trait_type == "Background")

  // const values = (traits:string) => {
  //   useControls({
  //     foo: traits,
  //   })
  // }

  function checkBGselection() {
    if (selectedBGOption == "None") {
      setAttach('')
      setArgs('')
    }
    else {
      setAttach('background')
      if (selectedBGOption == "Blue") {
        setArgs('#e2e6fe')
      }
      if (selectedBGOption == "Green") {
        setArgs('#9de5b5')
      }
      if (selectedBGOption == "Orange") {
        setArgs('#f5bf93')
      }
      if (selectedBGOption == "Purple") {
        setArgs('#c6aedd')
      }
      if (selectedBGOption == "Yellow") {
        setArgs('#f2e8ac')
      }
      if (selectedBGOption == "Red") {
        setArgs('#f399af')
      }
    }
  }

  if (save !== selectedBGOption) {
    checkBGselection()
    setSave(selectedBGOption)
  }
  const ref = useRef()
// 
const [toggle, setToggle] = React.useState(true)
const options = toggle ? ['foo', 'bar'] : ['x', 'y', 'z']

// const values = useControls(
//   {
//     select: { value: options[0], options: options },
//   },
//   [options]
// )
// 
  // const { name, aNumber } = useControls({ 
  //   name: traits[0].trait_type, 
  //   aNumber: 0, 
  // })


  // const { } = useControls({
  //   gridSize: [10.5, 10.5],
  //   cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
  //   cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
  //   cellColor: '#6f6f6f',
  //   sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
  //   sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
  //   sectionColor: '#9d4b4b',
  //   fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
  //   fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
  //   followCamera: false,
  //   infiniteGrid: true,
  //   setPosition: folder(
  //     {
  //     },



  //     { collapsed: true }
  //   ),
  // })

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-9" >
      <div className="relative overlap place-items-center before:absolute before:h-[600px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" style={{ width: "100vw", height: `calc(100vh - 150px)` }}>
        {/** relative flex place-items-center */}
        {/* <div>
      Hey {name}, hello! {aNumber}
    </div> */}
        {/* <Interface /> */}
        <Canvas className='wrap'
          // flat dpr={[1, 2]} 
          camera={{
            position: [0, 0, 75],
            fov: 20,
          }}>
          <color attach={attach} args={[args]} />
          <ambientLight intensity={0.9} />
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={5} shadow-mapSize={2048} castShadow />
          <pointLight position={[-10, -10, -10]} />

          {/* <OrbitControls /> */}
          {/* <OrbitControls makeDefault rotateSpeed={2} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.5} /> */}

          {/* <Monke /> */}
          {/* <MonkeTemp /> */}
          {/* <MonkeType x={selectedTypeOption} />
  <MonkeEars x={selectedEarsOption} />  
  <MonkeMouth x={selectedMouthOption} />
  <MonkeHat x={selectedHatOption} />
  <MonkeClothes x={selectedClothesOption} /> */}

          {/* <PivotControls visible={false} rotation={[0, -Math.PI / 2, 0]} anchor={[1, -1, -1]} scale={75} depthTest={false} fixed lineWidth={2}>
        <mesh castShadow receiveShadow position={[-1, 0.5, 1]}>
          <MonkeType x={selectedTypeOption} />
          <MonkeEars x={selectedEarsOption} />  
          <MonkeMouth x={selectedMouthOption} />
          <MonkeHat x={selectedHatOption} />
          <MonkeClothes x={selectedClothesOption} />
          </mesh>
      </PivotControls> */}

          <PivotControls visible={true} rotation={[0, -Math.PI / 2, 0]} anchor={[1, -1, -1]} scale={75} depthTest={false} fixed lineWidth={2}>
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
          {/* <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} /> */}
          {/* <Environment preset="sunset" /> */}
          {/* <Sky /> */}
        </Canvas>
      <Interface />

        < SheetDemo />
      </div>
    </main>
  )
}
