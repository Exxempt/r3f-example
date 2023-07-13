"use client"

//import { none, silverEarring, goldEarring } from "@/components/monke/ears";
import * as React from 'react'
import { useState, FC } from "react";
import { Box } from '@/components/box'

interface Props {
  x: string;
}

export const MonkeEars: FC<Props> = ({ x }) => {
const [color, setColor] = useState<string>("#f2d55e");
const [save, setSave] = useState<string>("");

if (x != save) {
  if (x == 'None') {
  console.log('RollTide1')
  setSave(x)
  setColor('#0f1a38')
  }
  if (x == 'Silver Earring') {
  console.log('RollTide2')
  setSave(x)
  setColor('#c5cfcb')
  }
  if (x == 'Gold Earring') {
  console.log('RollTide3')
  setSave(x)
  setColor('#f2d55e')
  }
}

  return (
    <>
    <Box position={[-4, -1, 0]} color={color} />
    </>
  )
}

export const MonkeMouth: FC<Props> = ({ x }) => {
  const [save, setSave] = useState<string>("");
  
  if (x != save) {
    if (x == 'None') {
    setSave(x)
    }
    if (x == 'Vape') {
    setSave(x)
    }
    if (x == 'Mask') {
    setSave(x)
    }
  }
  
  const generateMouth = () => {
    if (x == 'Cigarette') {
      return (
        <>
        <Box position={[6, -4, 0]} color='#eceee9' />
        <Box position={[7, -4, 0]} color='#eceee9' />
        <Box position={[8, -4, 0]} color='#eceee9' />
        <Box position={[9, -4, 0]} color='#eceee9' />
        <Box position={[10, -4, 0]} color='#ee9d2f' />
        <Box position={[10, -2, 0]} color='#c5cecb' />
        <Box position={[10, 0, 0]} color='#c5cecb' />
        <Box position={[10, 2, 0]} color='#c5cecb' />
        <Box position={[9, 3, 0]} color='#c5cecb' />
        <Box position={[10, 3, 0]} color='#c5cecb' />
        <Box position={[11, 3, 0]} color='#c5cecb' />
        <Box position={[9, 4, 0]} color='#c5cecb' />
        <Box position={[10, 4, 0]} color='#c5cecb' />
        <Box position={[11, 4, 0]} color='#c5cecb' />
        </>
        )
      }
    if (x == 'Vape') {
      return (
        <>
        <Box position={[6, -4, 0]} color='#4f7177' />
        <Box position={[7, -4, 0]} color='#4f7177' />
        <Box position={[8, -4, 0]} color='#4f7177' />
        <Box position={[9, -4, 0]} color='#4f7177' />
        <Box position={[10, -4, 0]} color='#5cbad4' />

        <Box position={[10, -2, 0]} color='#a5b6b1' />
        <Box position={[10, -1, 0]} color='#a5b6b1' />
        <Box position={[10, 0, 0]} color='#a5b6b1' />
        <Box position={[10, 1, 0]} color='#a5b6b1' />
        </>
        )
      }
      return (
        <>
        </> 
      )
  }

    return (
      <>
      {generateMouth()}
      </>
    )
}

export const MonkeTemp = () => {
  
  const generateTemp = () => {
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

        </>
        )
  }

    return (
      <>
      {generateTemp()}
      </>
    )
}