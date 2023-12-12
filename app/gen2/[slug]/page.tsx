"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import * as React from 'react'
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from "@react-three/drei";
import { MonkeEars, MonkeMouth, MonkeType, MonkeHat, MonkeClothes, MonkeEyes } from '@/components/monke/MonkeGen';
import { PivotControls } from '../../../components/pivotControls/index'
import { metadata } from "@/lib/metadata"

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const slug = params.slug; 

  useEffect(() => {
    // Example: Dynamically setting the title and description based on the slug
    // In a real-world scenario, you might fetch this data or compute it
    const pageTitle = slug ? `SMB #${slug}` : 'SMB 3-D';
    const pageDescription = slug ? `Description for ${slug}` : 'Default page description';

    // Set the metadata using the Head component
    if (typeof document !== 'undefined') {
      document.title = pageTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageDescription);
      }
    }
  }, [slug]);

  const [attach, setAttach] = useState<string>('');
  const [args, setArgs] = useState<string>('');
  const [save, setSave] = useState<string>('')

  const monke = metadata.find((monke) => monke.id === params.slug)
  const monkeBG = monke?.background
  const selectedBGOption = monkeBG === "" ? "None" : monke?.background;

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
        setArgs('#e698ab')
      }
      if (selectedBGOption == "White") {
        setArgs('#e2e6fe')
      }
      if (selectedBGOption == "") {
        setArgs('')
      }
    }
  }

  if (save !== selectedBGOption) {
    checkBGselection()
    setSave(selectedBGOption as any)
  }
  const ref = useRef()

  return (
<div>
  <Head>
    {/* Set default metadata which will be overridden by useEffect */}
    <title>Default Page Title</title>
    <meta name="description" content="Default page description" />
    {/* Other meta tags */}
  </Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-9" >
      <div className="relative overlap place-items-center before:absolute before:h-[600px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" style={{ width: "100vw", height: `calc(100vh - 150px)` }}>
        <Canvas className='wrap'
          camera={{
            position: [0, 0, 75],
            fov: 20,
          }}>
          <color attach={attach} args={[args]} />
          <ambientLight intensity={0.9} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={5} shadow-mapSize={2048} castShadow />
          <pointLight position={[-10, -10, -10]} />

          <PivotControls visible={false} rotation={[0, -Math.PI / 2, 0]} anchor={[1, -1, -1]} scale={75} depthTest={false} fixed lineWidth={2}>
            <mesh castShadow receiveShadow position={[-1, 0.5, 1]}>
              <MonkeType x={monke!.type} />
              <MonkeEars x={monke!.ears} />
              <MonkeEyes x={monke!.eyes} />
              <MonkeMouth x={monke!.mouth} />
              <MonkeHat x={monke!.hat} />
              <MonkeClothes x={monke!.clothes} />
            </mesh>
          </PivotControls>
          <OrbitControls makeDefault />
        </Canvas>
      </div>
    </main>
    </div>
  )
}