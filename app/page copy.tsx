"use client"

import Image from 'next/image'
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky, Environment } from "@react-three/drei";
import { Monke } from '@/components/monke/monke'

{/** 
type ComponentProps = JSX.IntrinsicElements['mesh'] & {
  color?: string
}

//function Box(props: JSX.IntrinsicElements['mesh']) {
function Box(props: ComponentProps) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.x += 0.00))

  return (
    <mesh
      {...props}
      
      ref={ref}
      scale={1}
      //scale={clicked ? 1.5 : 1}
      //onClick={(event) => click(!clicked)}
      //onPointerOver={(event) => hover(true)}
      //onPointerOut={(event) => hover(false)}>
      >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'white' : props.color} />
    </mesh>
  )
}
*/}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[600px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">

        {/** Here goes code */}
        <Canvas>
          <ambientLight intensity={0.8} />
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={5} />
          <pointLight position={[-10, -10, -10]} />
          {/*<OrbitControls />*/}
          <OrbitControls makeDefault rotateSpeed={2} minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} />
{/*

*/}
<Monke />
{/** 
          <Box position={[-3, 5, 0]} color='#0e1a38' />
          <Box position={[-2, 5, 0]} color='#0e1a38' />
          <Box position={[-1, 5, 0]} color='#0e1a38' />
          <Box position={[0, 5, 0]} color='#0e1a38' />
          <Box position={[1, 5, 0]} color='#0e1a38' />
          <Box position={[2, 5, 0]} color='#0e1a38' />
          <Box position={[3, 5, 0]} color='#0e1a38' />

          <Box position={[-4, 4, 0]} color='#0e1a38' />
          <Box position={[-3, 4, 0]} color='#3585ba' />
          <Box position={[-2, 4, 0]} color='#4f9dc4' />
          <Box position={[-1, 4, 0]} color='#4f9dc4' />
          <Box position={[0, 4, 0]} color='#4f9dc4' />
          <Box position={[1, 4, 0]} color='#4f9dc4' />
          <Box position={[2, 4, 0]} color='#4f9dc4' />
          <Box position={[3, 4, 0]} color='#4f9dc4' />
          <Box position={[4, 4, 0]} color='#0e1a38' />

          <Box position={[-5, 3, 0]} color='#0e1a38' />
          <Box position={[-4, 3, 0]} color='#3585ba' />
          <Box position={[-3, 3, 0]} color='#4f9dc4' />
          <Box position={[-2, 3, 0]} color='#4f9dc4' />
          <Box position={[-1, 3, 0]} color='#4f9dc4' />
          <Box position={[0, 3, 0]} color='#c3f3f4' />
          <Box position={[1, 3, 0]} color='#c3f3f4' />
          <Box position={[2, 3, 0]} color='#4f9dc4' />
          <Box position={[3, 3, 0]} color='#4f9dc4' />
          <Box position={[4, 3, 0]} color='#c3f3f4' />
          <Box position={[5, 3, 0]} color='#0e1a38' />

          <Box position={[-6, 2, 0]} color='#0e1a38' />
          <Box position={[-5, 2, 0]} color='#3585ba' />
          <Box position={[-4, 2, 0]} color='#4f9dc4' />
          <Box position={[-3, 2, 0]} color='#4f9dc4' />
          <Box position={[-2, 2, 0]} color='#4f9dc4' />
          <Box position={[-1, 2, 0]} color='#c3f3f4' />
          <Box position={[0, 2, 0]} color='#c3f3f4' />
          <Box position={[1, 2, 0]} color='#c3f3f4' />
          <Box position={[2, 2, 0]} color='#c3f3f4' />
          <Box position={[3, 2, 0]} color='#c3f3f4' />
          <Box position={[4, 2, 0]} color='#c3f3f4' />
          <Box position={[5, 2, 0]} color='#c3f3f4' />
          <Box position={[6, 2, 0]} color='#0e1a38' />

          <Box position={[-6, 1, 0]} color='#0e1a38' />
          <Box position={[-5, 1, 0]} color='#3585ba' />
          <Box position={[-4, 1, 0]} color='#4f9dc4' />
          <Box position={[-3, 1, 0]} color='#4f9dc4' />
          <Box position={[-2, 1, 0]} color='#c3f3f4' />
          <Box position={[-1, 1, 0]} color='#c3f3f4' />
          <Box position={[0, 1, 0]} color='#c3f3f4' />
          <Box position={[1, 1, 0]} color='#35d7c0' />
          <Box position={[2, 1, 0]} color='#c3f3f4' />
          <Box position={[3, 1, 0]} color='#c3f3f4' />
          <Box position={[4, 1, 0]} color='#35d7c0' />
          <Box position={[5, 1, 0]} color='#c3f3f4' />
          <Box position={[6, 1, 0]} color='#0e1a38' />

          <Box position={[-6, 0, 0]} color='#0e1a38' />
          <Box position={[-5, 0, 0]} color='#3585ba' />
          <Box position={[-4, 0, 0]} color='#0e1a38' />
          <Box position={[-3, 0, 0]} color='#4f9dc4' />
          <Box position={[-2, 0, 0]} color='#c3f3f4' />
          <Box position={[-1, 0, 0]} color='#c3f3f4' />
          <Box position={[0, 0, 0]} color='#c3f3f4' />
          <Box position={[1, 0, 0]} color='#35d7c0' />
          <Box position={[2, 0, 0]} color='#c3f3f4' />
          <Box position={[3, 0, 0]} color='#c3f3f4' />
          <Box position={[4, 0, 0]} color='#35d7c0' />
          <Box position={[5, 0, 0]} color='#c3f3f4' />
          <Box position={[6, 0, 0]} color='#0e1a38' />


          <Box position={[-6, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -1, 0]} color='#3585ba' />
          <Box position={[-4, -1, 0]} color='#c5cfcb' />
          <Box position={[-3, -1, 0]} color='#4f9dc4' />
          <Box position={[-2, -1, 0]} color='#c3f3f4' />
          <Box position={[-1, -1, 0]} color='#0e1a38' />
          <Box position={[0, -1, 0]} color='#c3f3f4' />
          <Box position={[1, -1, 0]} color='#c3f3f4' />
          <Box position={[2, -1, 0]} color='#c3f3f4' />
          <Box position={[3, -1, 0]} color='#c3f3f4' />
          <Box position={[4, -1, 0]} color='#c3f3f4' />
          <Box position={[5, -1, 0]} color='#c3f3f4' />
          <Box position={[6, -1, 0]} color='#c3f3f4' />
          <Box position={[7, -1, 0]} color='#0e1a38' />

          <Box position={[-5, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -2, 0]} color='#3585ba' />
          <Box position={[-3, -2, 0]} color='#4f9dc4' />
          <Box position={[-2, -2, 0]} color='#0e1a38' />
          <Box position={[-1, -2, 0]} color='#c3f3f4' />
          <Box position={[0, -2, 0]} color='#c3f3f4' />
          <Box position={[1, -2, 0]} color='#c3f3f4' />
          <Box position={[2, -2, 0]} color='#c3f3f4' />
          <Box position={[3, -2, 0]} color='#c3f3f4' />
          <Box position={[4, -2, 0]} color='#c3f3f4' />
          <Box position={[5, -2, 0]} color='#c3f3f4' />
          <Box position={[6, -2, 0]} color='#c3f3f4' />
          <Box position={[7, -2, 0]} color='#c3f3f4' />
          <Box position={[8, -2, 0]} color='#0e1a38' />

          <Box position={[-4, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -3, 0]} color='#4f9dc4' />
          <Box position={[-2, -3, 0]} color='#0e1a38' />
          <Box position={[-1, -3, 0]} color='#c3f3f4' />
          <Box position={[0, -3, 0]} color='#c3f3f4' />
          <Box position={[1, -3, 0]} color='#c3f3f4' />
          <Box position={[2, -3, 0]} color='#c3f3f4' />
          <Box position={[3, -3, 0]} color='#c3f3f4' />
          <Box position={[4, -3, 0]} color='#c3f3f4' />
          <Box position={[5, -3, 0]} color='#c3f3f4' />
          <Box position={[6, -3, 0]} color='#c3f3f4' />
          <Box position={[7, -3, 0]} color='#c3f3f4' />
          <Box position={[8, -3, 0]} color='#0e1a38' />

          <Box position={[-3, -4, 0]} color='#0e1a38' />
          <Box position={[-2, -4, 0]} color='#c3f3f4' />
          <Box position={[-1, -4, 0]} color='#0e1a38' />
          <Box position={[0, -4, 0]} color='#0e1a38' />
          <Box position={[1, -4, 0]} color='#0e1a38' />
          <Box position={[2, -4, 0]} color='#0e1a38' />
          <Box position={[3, -4, 0]} color='#0e1a38' />
          <Box position={[4, -4, 0]} color='#0e1a38' />
          <Box position={[5, -4, 0]} color='#0e1a38' />
          <Box position={[6, -4, 0]} color='#0e1a38' />
          <Box position={[7, -4, 0]} color='#0e1a38' />

          <Box position={[-3, -5, 0]} color='#0e1a38' />
          <Box position={[-2, -5, 0]} color='#0e1a38' />
          <Box position={[-1, -5, 0]} color='#c3f3f4' />
          <Box position={[0, -5, 0]} color='#c3f3f4' />
          <Box position={[1, -5, 0]} color='#c3f3f4' />
          <Box position={[2, -5, 0]} color='#c3f3f4' />
          <Box position={[3, -5, 0]} color='#c3f3f4' />
          <Box position={[4, -5, 0]} color='#c3f3f4' />
          <Box position={[5, -5, 0]} color='#c3f3f4' />
          <Box position={[6, -5, 0]} color='#0e1a38' />

          <Box position={[-4, -6, 0]} color='#0e1a38' />
          <Box position={[-3, -6, 0]} color='#da7219' />
          <Box position={[-2, -6, 0]} color='#da7219' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />

          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#da7219' />
          <Box position={[-3, -7, 0]} color='#ee9d2f' />
          <Box position={[-2, -7, 0]} color='#ee9d2f' />
          <Box position={[-1, -7, 0]} color='#ee9d2f' />
          <Box position={[0, -7, 0]} color='#ee9d2f' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#4f9dc4' />
          <Box position={[3, -7, 0]} color='#4f9dc4' />
          <Box position={[4, -7, 0]} color='#ee9d2f' />
          <Box position={[5, -7, 0]} color='#0e1a38' />

          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#da7219' />
          <Box position={[-4, -8, 0]} color='#ee9d2f' />
          <Box position={[-3, -8, 0]} color='#f2d55e' />
          <Box position={[-2, -8, 0]} color='#ee9d2f' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#ee9d2f' />
          <Box position={[1, -8, 0]} color='#ee9d2f' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#ee9d2f' />
          <Box position={[4, -8, 0]} color='#ee9d2f' />
          <Box position={[5, -8, 0]} color='#ee9d2f' />
          <Box position={[6, -8, 0]} color='#0e1a38' />


          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#da7219' />
          <Box position={[-5, -9, 0]} color='#ee9d2f' />
          <Box position={[-4, -9, 0]} color='#f2d55e' />
          <Box position={[-3, -9, 0]} color='#ee9d2f' />
          <Box position={[-2, -9, 0]} color='#f2d55e' /> 
          <Box position={[-1, -9, 0]} color='#ee9d2f' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#ee9d2f' />
          <Box position={[2, -9, 0]} color='#ee9d2f' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#ee9d2f' />
          <Box position={[5, -9, 0]} color='#ee9d2f' />
          <Box position={[6, -9, 0]} color='#ee9d2f' />
          <Box position={[7, -9, 0]} color='#0e1a38' />


          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#da7219' />
          <Box position={[-6, -10, 0]} color='#ee9d2f' />
          <Box position={[-5, -10, 0]} color='#ee9d2f' />
          <Box position={[-4, -10, 0]} color='#ee9d2f' />
          <Box position={[-3, -10, 0]} color='#f2d55e' /> 
          <Box position={[-2, -10, 0]} color='#ee9d2f' /> 
          <Box position={[-1, -10, 0]} color='#ee9d2f' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#ee9d2f' />
          <Box position={[2, -10, 0]} color='#ee9d2f' />
          <Box position={[3, -10, 0]} color='#ee9d2f' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#ee9d2f' />
          <Box position={[6, -10, 0]} color='#ee9d2f' />
          <Box position={[7, -10, 0]} color='#ee9d2f' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
*/}

{/*
          <Box position={[-11, 12, 0]} color='#9de5b5' />
          <Box position={[12, 12, 0]} color='#9de5b5' />
          <Box position={[-11, -11, 0]} color='#9de5b5' />
          <Box position={[12, -11, 0]} color='#9de5b5' />
*/}
        <Environment preset="city" />
        <Sky />
        </Canvas>

      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
