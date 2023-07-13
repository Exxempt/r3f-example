"use client"

import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky, Environment } from "@react-three/drei";
import { Monke } from '@/components/monke/monke'
import { CardWithForm } from '@/components/Interface'

export default function Home() {
  return (

<main className="flex min-h-screen flex-col items-center justify-between p-0" >
  <div className="relative flex place-items-center before:absolute before:h-[600px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" style={{ width: "100vw", height: "100vh" }}>
  <Canvas>
  <ambientLight intensity={0.8} />
  {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={5} />
  <pointLight position={[-10, -10, -10]} />
  {/*<OrbitControls />*/}
  <OrbitControls makeDefault rotateSpeed={2} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.5} />

  <Monke />

  <Environment preset="city" />
  <Sky />
  </Canvas>
  <CardWithForm />
  </div>
</main>    
  )
}
