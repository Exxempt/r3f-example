"use client"

import * as React from 'react'
import { Box } from '@/components/box'
import { useConfigurator } from "../contexts/Configurator";

//export function Monke() {
export const Monke = () => {
  const { selectedEarsOption } = useConfigurator();
  console.log('monke.tsx')
  console.log(selectedEarsOption)

  return (
    <>
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
        <Box position={[-4, -1, 0]} color='#c5cfcb' id={12345} />
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
    </>
  )
}
