"use client"

//import { none, silverEarring, goldEarring } from "@/components/monke/ears";
import * as React from 'react'
import { useState, FC } from "react";
import { Box } from '@/components/box'

interface Props {
  x: string;
}

export const MonkeClothes: FC<Props> = ({ x }) => {
  const [save, setSave] = useState<string>("");

  if (x != save) {
    if (x == 'None') {
    setSave(x)
    }
    if (x == 'Silver Earring') {
    setSave(x)
    }
    if (x == 'Gold Earring') {
    setSave(x)
    }
  }

  const generateClothes = () => {
        if (x == 'Alien') {
        return (
          <>
          <Box position={[-4, -1, 0]} color='#c5cfcb' />
          </>
          )
        }
        if (x == 'Zombie') {
        return (
          <>
          </>
          )
        }
        if (x == 'Solana') {
        return (
          <>
          </>
          )
        }
  }
  return (
    <>
    {generateClothes()} 
    </>
  )
}

export const MonkeEars: FC<Props> = ({ x }) => {
const [save, setSave] = useState<string>("");

if (x != save) {
  if (x == 'None') {
  setSave(x)
  }
  if (x == 'Silver Earring') {
  setSave(x)
  }
  if (x == 'Gold Earring') {
  setSave(x)
  }
}

const generateEars = () => {
      if (x == 'None') {
      return (
        <>
        </>
        )
      }
      if (x == 'Silver Earring') {
      return (
        <>
        <Box position={[-4, -1, 0]} color='#c5cfcb' />
        </>
        )
      }
      if (x == 'Gold Earring') {
      return (
        <>
        <Box position={[-4, -1, 0]} color='#f2d55e' />
        </>
        )
      }
}

  return (
    <>
    {generateEars()} 
    </>
  )
}

export const MonkeHat: FC<Props> = ({ x }) => {
  const [save, setSave] = useState<string>("");

  if (x != save) {
    if (x == 'None') {
    setSave(x)
    }
    if (x == 'Silver Earring') {
    setSave(x)
    }
    if (x == 'Gold Earring') {
    setSave(x)
    }
  }

  const generateHat = () => {
        if (x == 'Alien') {
        return (
          <>
          <Box position={[-4, -1, 0]} color='#c5cfcb' />
          </>
          )
        }
        if (x == 'Zombie') {
        return (
          <>
          </>
          )
        }
        if (x == 'Solana') {
        return (
          <>
          </>
          )
        }
  }
  return (
    <>
    {generateHat()} 
    </>
  )
}

export const MonkeEyes: FC<Props> = ({ x }) => {
  const [save, setSave] = useState<string>("");

  if (x != save) {
    if (x == 'None') {
    setSave(x)
    }
    if (x == 'Silver Earring') {
    setSave(x)
    }
    if (x == 'Gold Earring') {
    setSave(x)
    }
  }

  const generateEyes = () => {
        if (x == 'Alien') {
        return (
          <>
          <Box position={[-4, -1, 0]} color='#c5cfcb' />
          </>
          )
        }
        if (x == 'Zombie') {
        return (
          <>
          </>
          )
        }
        if (x == 'Solana') {
        return (
          <>
          </>
          )
        }
  }
  return (
    <>
    {generateEyes()} 
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
    if (x == 'Pipe') {
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
    if (x == 'Pipe') {
      return (
        <>
        <Box position={[5, -5, 0]} color='#602020' />
        <Box position={[6, -6, 0]} color='#602020' />
        <Box position={[7, -7, 0]} color='#602020' />
        <Box position={[8, -8, 0]} color='#602020' />
        <Box position={[9, -8, 0]} color='#602020' />
        <Box position={[10, -8, 0]} color='#602020' />
        <Box position={[9, -7, 0]} color='#602020' />
        <Box position={[10, -7, 0]} color='#602020' />
        <Box position={[9, -6, 0]} color='#0e1a38' />
        <Box position={[10, -6, 0]} color='#0e1a38' />
        <Box position={[11, -6, 0]} color='#0e1a38' />
        <Box position={[11, -7, 0]} color='#0e1a38' />
        <Box position={[11, -8, 0]} color='#0e1a38' />
        <Box position={[10, -9, 0]} color='#0e1a38' />
        <Box position={[9, -9, 0]} color='#0e1a38' />
        <Box position={[8, -9, 0]} color='#0e1a38' />
        <Box position={[7, -8, 0]} color='#0e1a38' />
        <Box position={[7, -6, 0]} color='#0e1a38' />
        <Box position={[8, -7, 0]} color='#0e1a38' />
        <Box position={[6, -7, 0]} color='#0e1a38' />
        <Box position={[5, -6, 0]} color='#0e1a38' />
        <Box position={[6, -5, 0]} color='#0e1a38' />
        <Box position={[10, -4, 0]} color='#c5cfcb' />
        <Box position={[10, -2, 0]} color='#c5cfcb' />
        <Box position={[10, 2, 0]} color='#c5cfcb' />
        <Box position={[9, 0, 0]} color='#c5cfcb' />
        <Box position={[10, 0, 0]} color='#c5cfcb' />
        <Box position={[11, 0, 0]} color='#c5cfcb' />
        <Box position={[9, 1, 0]} color='#c5cfcb' />
        <Box position={[10, 1, 0]} color='#c5cfcb' />
        <Box position={[11, 1, 0]} color='#c5cfcb' />

        </>
      )
    }
    if (x == 'Mask') {
     return ( 
      <>
        <Box position={[0, -2, 0]} color='#0e1a38' />
        <Box position={[1, -2, 0]} color='#0e1a38' />
        <Box position={[2, -2, 0]} color='#0e1a38' />
        <Box position={[3, -2, 0]} color='#0e1a38' />
        <Box position={[4, -2, 0]} color='#0e1a38' />
        <Box position={[5, -2, 0]} color='#0e1a38' />
        <Box position={[6, -1, 0]} color='#0e1a38' />
        <Box position={[7, -1, 0]} color='#0e1a38' />
        <Box position={[8, -2, 0]} color='#0e1a38' />
        <Box position={[8, -3, 0]} color='#0e1a38' />
        <Box position={[7, -4, 0]} color='#0e1a38' />
        <Box position={[6, -5, 0]} color='#0e1a38' />
        <Box position={[5, -6, 0]} color='#0e1a38' />
        <Box position={[4, -6, 0]} color='#0e1a38' />
        <Box position={[3, -6, 0]} color='#0e1a38' />
        <Box position={[2, -6, 0]} color='#0e1a38' />
        <Box position={[1, -6, 0]} color='#0e1a38' />
        <Box position={[0, -6, 0]} color='#0e1a38' />
        <Box position={[-1, -6, 0]} color='#0e1a38' />
        <Box position={[-2, -5, 0]} color='#0e1a38' />
        <Box position={[-1, -5, 0]} color='#0e1a38' />
        <Box position={[-2, -4, 0]} color='#0e1a38' />
        <Box position={[-3, -4, 0]} color='#0e1a38' />
        <Box position={[-4, -3, 0]} color='#0e1a38' />
        <Box position={[-5, -2, 0]} color='#0e1a38' />
        <Box position={[-3, 0, 0]} color='#0e1a38' />
        <Box position={[-4, 0, 0]} color='#0e1a38' />
        <Box position={[-5, 0, 0]} color='#0e1a38' />
        <Box position={[-1, -1, 0]} color='#0e1a38' />
        <Box position={[-2, -1, 0]} color='#0e1a38' />
        <Box position={[-5, -1, 0]} color='#1a2c37' />
        <Box position={[-4, -2, 0]} color='#1a2c37' />
        <Box position={[-3, -3, 0]} color='#1a2c37' />
        <Box position={[-2, -3, 0]} color='#1a2c37' />
        <Box position={[-1, -4, 0]} color='#1a2c37' />
        <Box position={[0, -5, 0]} color='#1a2c37' />
        <Box position={[1, -5, 0]} color='#1a2c37' />
        <Box position={[2, -5, 0]} color='#1a2c37' />
        <Box position={[3, -5, 0]} color='#1a2c37' />
        <Box position={[4, -5, 0]} color='#1a2c37' />
        <Box position={[5, -5, 0]} color='#1a2c37' />
        <Box position={[6, -4, 0]} color='#1a2c37' />
        <Box position={[7, -3, 0]} color='#1a2c37' />
        <Box position={[-4, -1, 0]} color='#334950' />
        <Box position={[-3, -1, 0]} color='#334950' />
        <Box position={[-3, -2, 0]} color='#334950' />
        <Box position={[-2, -2, 0]} color='#334950' />
        <Box position={[-1, -2, 0]} color='#334950' />
        <Box position={[-1, -3, 0]} color='#334950' />
        <Box position={[0, -3, 0]} color='#334950' />
        <Box position={[1, -3, 0]} color='#334950' />
        <Box position={[2, -3, 0]} color='#334950' />
        <Box position={[3, -3, 0]} color='#334950' />
        <Box position={[4, -3, 0]} color='#334950' />
        <Box position={[5, -3, 0]} color='#334950' />
        <Box position={[6, -3, 0]} color='#334950' />
        <Box position={[6, -2, 0]} color='#334950' />
        <Box position={[7, -2, 0]} color='#334950' />
        <Box position={[0, -4, 0]} color='#334950' />
        <Box position={[1, -4, 0]} color='#334950' />
        <Box position={[2, -4, 0]} color='#334950' />
        <Box position={[3, -4, 0]} color='#334950' />
        <Box position={[4, -4, 0]} color='#334950' />
        <Box position={[5, -4, 0]} color='#334950' />

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

export const MonkeType: FC<Props> = ({ x }) => {
  const [save, setSave] = useState<string>("");

  if (x != save) {
    if (x == 'Alien') {
    setSave(x)
    }
    if (x == 'Zombie') {
    setSave(x)
    }
    if (x == 'Solana') {
    setSave(x)
    }
    if (x == 'Skeleton') {
    setSave(x)
    }
    if (x == 'Brown') {
    setSave(x)
    }
    if (x == 'Orange') {
    setSave(x)
    }
    if (x == 'Dark') {
    setSave(x)
    }
    if (x == 'Red') {
    setSave(x)
    }
    if (x == 'Purple') {
    setSave(x)
    }
  }

  const generateType = () => {
        if (x == 'Alien') {
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
          <Box position={[-4, -1, 0]} color='#0e1a38' />
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
          <Box position={[-3, -6, 0]} color='#3585ba' />
          <Box position={[-2, -6, 0]} color='#4f9dc4' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />
          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#3585ba' />
          <Box position={[-3, -7, 0]} color='#4f9dc4' />
          <Box position={[-2, -7, 0]} color='#4f9dc4' />
          <Box position={[-1, -7, 0]} color='#4f9dc4' />
          <Box position={[0, -7, 0]} color='#4f9dc4' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#4f9dc4' />
          <Box position={[3, -7, 0]} color='#4f9dc4' />
          <Box position={[4, -7, 0]} color='#0e1a38' />
          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#3585ba' />
          <Box position={[-4, -8, 0]} color='#4f9dc4' />
          <Box position={[-3, -8, 0]} color='#4f9dc4' />
          <Box position={[-2, -8, 0]} color='#4f9dc4' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#4f9dc4' />
          <Box position={[1, -8, 0]} color='#4f9dc4' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#4f9dc4' />
          <Box position={[4, -8, 0]} color='#4f9dc4' />
          <Box position={[5, -8, 0]} color='#0e1a38' />
          <Box position={[6, -8, 0]} color='#0e1a38' />
          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#3585ba' />
          <Box position={[-5, -9, 0]} color='#4f9dc4' />
          <Box position={[-4, -9, 0]} color='#4f9dc4' />
          <Box position={[-3, -9, 0]} color='#4f9dc4' />
          <Box position={[-2, -9, 0]} color='#4f9dc4' /> 
          <Box position={[-1, -9, 0]} color='#4f9dc4' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#4f9dc4' />
          <Box position={[2, -9, 0]} color='#4f9dc4' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#4f9dc4' />
          <Box position={[5, -9, 0]} color='#4f9dc4' />
          <Box position={[6, -9, 0]} color='#4f9dc4' />
          <Box position={[7, -9, 0]} color='#0e1a38' />
          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#3585ba' />
          <Box position={[-6, -10, 0]} color='#4f9dc4' />
          <Box position={[-5, -10, 0]} color='#4f9dc4' />
          <Box position={[-4, -10, 0]} color='#4f9dc4' />
          <Box position={[-3, -10, 0]} color='#4f9dc4' /> 
          <Box position={[-2, -10, 0]} color='#4f9dc4' /> 
          <Box position={[-1, -10, 0]} color='#4f9dc4' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#4f9dc4' />
          <Box position={[2, -10, 0]} color='#4f9dc4' />
          <Box position={[3, -10, 0]} color='#4f9dc4' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#4f9dc4' />
          <Box position={[6, -10, 0]} color='#4f9dc4' />
          <Box position={[7, -10, 0]} color='#4f9dc4' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
          </>
          )
        }
        if (x == 'Zombie') {
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
          <Box position={[-3, 4, 0]} color='#195624' />
          <Box position={[-2, 4, 0]} color='#347551' />
          <Box position={[-1, 4, 0]} color='#347551' />
          <Box position={[0, 4, 0]} color='#347551' />
          <Box position={[1, 4, 0]} color='#347551' />
          <Box position={[2, 4, 0]} color='#347551' />
          <Box position={[3, 4, 0]} color='#347551' />
          <Box position={[4, 4, 0]} color='#0e1a38' />
          <Box position={[-5, 3, 0]} color='#0e1a38' />
          <Box position={[-4, 3, 0]} color='#195624' />
          <Box position={[-3, 3, 0]} color='#347551' />
          <Box position={[-2, 3, 0]} color='#347551' />
          <Box position={[-1, 3, 0]} color='#347551' />
          <Box position={[0, 3, 0]} color='#49a66e' />
          <Box position={[1, 3, 0]} color='#49a66e' />
          <Box position={[2, 3, 0]} color='#347551' />
          <Box position={[3, 3, 0]} color='#347551' />
          <Box position={[4, 3, 0]} color='#49a66e' />
          <Box position={[5, 3, 0]} color='#0e1a38' />
          <Box position={[-6, 2, 0]} color='#0e1a38' />
          <Box position={[-5, 2, 0]} color='#195624' />
          <Box position={[-4, 2, 0]} color='#347551' />
          <Box position={[-3, 2, 0]} color='#347551' />
          <Box position={[-2, 2, 0]} color='#347551' />
          <Box position={[-1, 2, 0]} color='#49a66e' />
          <Box position={[0, 2, 0]} color='#49a66e' />
          <Box position={[1, 2, 0]} color='#49a66e' />
          <Box position={[2, 2, 0]} color='#49a66e' />
          <Box position={[3, 2, 0]} color='#49a66e' />
          <Box position={[4, 2, 0]} color='#49a66e' />
          <Box position={[5, 2, 0]} color='#49a66e' />
          <Box position={[6, 2, 0]} color='#0e1a38' />
          <Box position={[-6, 1, 0]} color='#0e1a38' />
          <Box position={[-5, 1, 0]} color='#195624' />
          <Box position={[-4, 1, 0]} color='#347551' />
          <Box position={[-3, 1, 0]} color='#347551' />
          <Box position={[-2, 1, 0]} color='#49a66e' />
          <Box position={[-1, 1, 0]} color='#49a66e' />
          <Box position={[0, 1, 0]} color='#49a66e' />
          <Box position={[1, 1, 0]} color='#f24949' />
          <Box position={[2, 1, 0]} color='#49a66e' />
          <Box position={[3, 1, 0]} color='#49a66e' />
          <Box position={[4, 1, 0]} color='#f24949' />
          <Box position={[5, 1, 0]} color='#49a66e' />
          <Box position={[6, 1, 0]} color='#0e1a38' />
          <Box position={[-6, 0, 0]} color='#0e1a38' />
          <Box position={[-5, 0, 0]} color='#195624' />
          <Box position={[-4, 0, 0]} color='#0e1a38' />
          <Box position={[-3, 0, 0]} color='#347551' />
          <Box position={[-2, 0, 0]} color='#49a66e' />
          <Box position={[-1, 0, 0]} color='#49a66e' />
          <Box position={[0, 0, 0]} color='#49a66e' />
          <Box position={[1, 0, 0]} color='#f24949' />
          <Box position={[2, 0, 0]} color='#49a66e' />
          <Box position={[3, 0, 0]} color='#49a66e' />
          <Box position={[4, 0, 0]} color='#f24949' />
          <Box position={[5, 0, 0]} color='#49a66e' />
          <Box position={[6, 0, 0]} color='#0e1a38' />
          <Box position={[-6, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -1, 0]} color='#195624' />
          <Box position={[-4, -1, 0]} color='#0e1a38' />
          <Box position={[-3, -1, 0]} color='#347551' />
          <Box position={[-2, -1, 0]} color='#49a66e' />
          <Box position={[-1, -1, 0]} color='#0e1a38' />
          <Box position={[0, -1, 0]} color='#49a66e' />
          <Box position={[1, -1, 0]} color='#49a66e' />
          <Box position={[2, -1, 0]} color='#49a66e' />
          <Box position={[3, -1, 0]} color='#49a66e' />
          <Box position={[4, -1, 0]} color='#49a66e' />
          <Box position={[5, -1, 0]} color='#49a66e' />
          <Box position={[6, -1, 0]} color='#49a66e' />
          <Box position={[7, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -2, 0]} color='#195624' />
          <Box position={[-3, -2, 0]} color='#347551' />
          <Box position={[-2, -2, 0]} color='#0e1a38' />
          <Box position={[-1, -2, 0]} color='#49a66e' />
          <Box position={[0, -2, 0]} color='#49a66e' />
          <Box position={[1, -2, 0]} color='#49a66e' />
          <Box position={[2, -2, 0]} color='#49a66e' />
          <Box position={[3, -2, 0]} color='#49a66e' />
          <Box position={[4, -2, 0]} color='#49a66e' />
          <Box position={[5, -2, 0]} color='#49a66e' />
          <Box position={[6, -2, 0]} color='#49a66e' />
          <Box position={[7, -2, 0]} color='#49a66e' />
          <Box position={[8, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -3, 0]} color='#347551' />
          <Box position={[-2, -3, 0]} color='#0e1a38' />
          <Box position={[-1, -3, 0]} color='#49a66e' />
          <Box position={[0, -3, 0]} color='#49a66e' />
          <Box position={[1, -3, 0]} color='#49a66e' />
          <Box position={[2, -3, 0]} color='#49a66e' />
          <Box position={[3, -3, 0]} color='#49a66e' />
          <Box position={[4, -3, 0]} color='#49a66e' />
          <Box position={[5, -3, 0]} color='#49a66e' />
          <Box position={[6, -3, 0]} color='#49a66e' />
          <Box position={[7, -3, 0]} color='#49a66e' />
          <Box position={[8, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -4, 0]} color='#0e1a38' />
          <Box position={[-2, -4, 0]} color='#49a66e' />
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
          <Box position={[-1, -5, 0]} color='#49a66e' />
          <Box position={[0, -5, 0]} color='#49a66e' />
          <Box position={[1, -5, 0]} color='#49a66e' />
          <Box position={[2, -5, 0]} color='#49a66e' />
          <Box position={[3, -5, 0]} color='#49a66e' />
          <Box position={[4, -5, 0]} color='#49a66e' />
          <Box position={[5, -5, 0]} color='#49a66e' />
          <Box position={[6, -5, 0]} color='#0e1a38' />
          <Box position={[-4, -6, 0]} color='#0e1a38' />
          <Box position={[-3, -6, 0]} color='#195624' />
          <Box position={[-2, -6, 0]} color='#347551' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />
          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#195624' />
          <Box position={[-3, -7, 0]} color='#347551' />
          <Box position={[-2, -7, 0]} color='#347551' />
          <Box position={[-1, -7, 0]} color='#347551' />
          <Box position={[0, -7, 0]} color='#347551' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#347551' />
          <Box position={[3, -7, 0]} color='#347551' />
          <Box position={[4, -7, 0]} color='#0e1a38' />
          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#195624' />
          <Box position={[-4, -8, 0]} color='#347551' />
          <Box position={[-3, -8, 0]} color='#347551' />
          <Box position={[-2, -8, 0]} color='#347551' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#347551' />
          <Box position={[1, -8, 0]} color='#347551' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#347551' />
          <Box position={[4, -8, 0]} color='#347551' />
          <Box position={[5, -8, 0]} color='#0e1a38' />
          <Box position={[6, -8, 0]} color='#0e1a38' />
          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#195624' />
          <Box position={[-5, -9, 0]} color='#347551' />
          <Box position={[-4, -9, 0]} color='#347551' />
          <Box position={[-3, -9, 0]} color='#347551' />
          <Box position={[-2, -9, 0]} color='#347551' /> 
          <Box position={[-1, -9, 0]} color='#347551' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#347551' />
          <Box position={[2, -9, 0]} color='#347551' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#347551' />
          <Box position={[5, -9, 0]} color='#347551' />
          <Box position={[6, -9, 0]} color='#347551' />
          <Box position={[7, -9, 0]} color='#0e1a38' />
          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#195624' />
          <Box position={[-6, -10, 0]} color='#347551' />
          <Box position={[-5, -10, 0]} color='#347551' />
          <Box position={[-4, -10, 0]} color='#347551' />
          <Box position={[-3, -10, 0]} color='#347551' /> 
          <Box position={[-2, -10, 0]} color='#347551' /> 
          <Box position={[-1, -10, 0]} color='#347551' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#347551' />
          <Box position={[2, -10, 0]} color='#347551' />
          <Box position={[3, -10, 0]} color='#347551' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#347551' />
          <Box position={[6, -10, 0]} color='#347551' />
          <Box position={[7, -10, 0]} color='#347551' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
          </>
          )
        }
        if (x == 'Solana') {
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
          <Box position={[-3, 4, 0]} color='#aa4eb9' />
          <Box position={[-2, 4, 0]} color='#e368f7' />
          <Box position={[-1, 4, 0]} color='#e368f7' />
          <Box position={[0, 4, 0]} color='#e368f7' />
          <Box position={[1, 4, 0]} color='#e368f7' />
          <Box position={[2, 4, 0]} color='#e368f7' />
          <Box position={[3, 4, 0]} color='#e368f7' />
          <Box position={[4, 4, 0]} color='#0e1a38' />
          
          <Box position={[-5, 3, 0]} color='#0e1a38' />
          <Box position={[-4, 3, 0]} color='#905eb0' />
          <Box position={[-3, 3, 0]} color='#c07eec' />
          <Box position={[-2, 3, 0]} color='#c07eec' />
          <Box position={[-1, 3, 0]} color='#c07eec' />
          <Box position={[0, 3, 0]} color='#d7ad84' />
          <Box position={[1, 3, 0]} color='#d7ad84' />
          <Box position={[2, 3, 0]} color='#c07eec' />
          <Box position={[3, 3, 0]} color='#c07eec' />
          <Box position={[4, 3, 0]} color='#d7ad84' />
          <Box position={[5, 3, 0]} color='#0e1a38' />

          <Box position={[-6, 2, 0]} color='#0e1a38' />
          <Box position={[-5, 2, 0]} color='#7b6caa' />
          <Box position={[-4, 2, 0]} color='#a490e3' />
          <Box position={[-3, 2, 0]} color='#a490e3' />
          <Box position={[-2, 2, 0]} color='#a490e3' />
          <Box position={[-1, 2, 0]} color='#d7ad84' />
          <Box position={[0, 2, 0]} color='#d7ad84' />
          <Box position={[1, 2, 0]} color='#d7ad84' />
          <Box position={[2, 2, 0]} color='#d7ad84' />
          <Box position={[3, 2, 0]} color='#d7ad84' />
          <Box position={[4, 2, 0]} color='#d7ad84' />
          <Box position={[5, 2, 0]} color='#d7ad84' />
          <Box position={[6, 2, 0]} color='#0e1a38' />

          <Box position={[-6, 1, 0]} color='#0e1a38' />
          <Box position={[-5, 1, 0]} color='#6678a3' />
          <Box position={[-4, 1, 0]} color='#88a1da' />
          <Box position={[-3, 1, 0]} color='#88a1da' />
          <Box position={[-2, 1, 0]} color='#d7ad84' />
          <Box position={[-1, 1, 0]} color='#d7ad84' />
          <Box position={[0, 1, 0]} color='#d7ad84' />
          <Box position={[1, 1, 0]} color='#0e1a38' />
          <Box position={[2, 1, 0]} color='#d7ad84' />
          <Box position={[3, 1, 0]} color='#d7ad84' />
          <Box position={[4, 1, 0]} color='#0e1a38' />
          <Box position={[5, 1, 0]} color='#d7ad84' />
          <Box position={[6, 1, 0]} color='#0e1a38' />

          <Box position={[-6, 0, 0]} color='#0e1a38' />
          <Box position={[-5, 0, 0]} color='#51869d' />
          <Box position={[-4, 0, 0]} color='#0e1a38' />
          <Box position={[-3, 0, 0]} color='#6cb3d2' />
          <Box position={[-2, 0, 0]} color='#d7ad84' />
          <Box position={[-1, 0, 0]} color='#d7ad84' />
          <Box position={[0, 0, 0]} color='#d7ad84' />
          <Box position={[1, 0, 0]} color='#0e1a38' />
          <Box position={[2, 0, 0]} color='#d7ad84' />
          <Box position={[3, 0, 0]} color='#d7ad84' />
          <Box position={[4, 0, 0]} color='#0e1a38' />
          <Box position={[5, 0, 0]} color='#d7ad84' />
          <Box position={[6, 0, 0]} color='#0e1a38' />

          <Box position={[-6, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -1, 0]} color='#3c9396' />
          <Box position={[-4, -1, 0]} color='#0e1a38' />
          <Box position={[-3, -1, 0]} color='#50c5c9' />
          <Box position={[-2, -1, 0]} color='#d7ad84' />
          <Box position={[-1, -1, 0]} color='#0e1a38' />
          <Box position={[0, -1, 0]} color='#d7ad84' />
          <Box position={[1, -1, 0]} color='#d7ad84' />
          <Box position={[2, -1, 0]} color='#d7ad84' />
          <Box position={[3, -1, 0]} color='#d7ad84' />
          <Box position={[4, -1, 0]} color='#d7ad84' />
          <Box position={[5, -1, 0]} color='#d7ad84' />
          <Box position={[6, -1, 0]} color='#d7ad84' />
          <Box position={[7, -1, 0]} color='#0e1a38' />

          <Box position={[-5, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -2, 0]} color='#27a190' />
          <Box position={[-3, -2, 0]} color='#34d7c0' />
          <Box position={[-2, -2, 0]} color='#0e1a38' />
          <Box position={[-1, -2, 0]} color='#d7ad84' />
          <Box position={[0, -2, 0]} color='#d7ad84' />
          <Box position={[1, -2, 0]} color='#d7ad84' />
          <Box position={[2, -2, 0]} color='#d7ad84' />
          <Box position={[3, -2, 0]} color='#d7ad84' />
          <Box position={[4, -2, 0]} color='#d7ad84' />
          <Box position={[5, -2, 0]} color='#d7ad84' />
          <Box position={[6, -2, 0]} color='#d7ad84' />
          <Box position={[7, -2, 0]} color='#d7ad84' />
          <Box position={[8, -2, 0]} color='#0e1a38' />

          <Box position={[-4, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -3, 0]} color='#0af2b4' />
          <Box position={[-2, -3, 0]} color='#0e1a38' />
          <Box position={[-1, -3, 0]} color='#d7ad84' />
          <Box position={[0, -3, 0]} color='#d7ad84' />
          <Box position={[1, -3, 0]} color='#d7ad84' />
          <Box position={[2, -3, 0]} color='#d7ad84' />
          <Box position={[3, -3, 0]} color='#d7ad84' />
          <Box position={[4, -3, 0]} color='#d7ad84' />
          <Box position={[5, -3, 0]} color='#d7ad84' />
          <Box position={[6, -3, 0]} color='#d7ad84' />
          <Box position={[7, -3, 0]} color='#d7ad84' />
          <Box position={[8, -3, 0]} color='#0e1a38' />

          <Box position={[-3, -4, 0]} color='#0e1a38' />
          <Box position={[-2, -4, 0]} color='#d7ad84' />
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
          <Box position={[-1, -5, 0]} color='#d7ad84' />
          <Box position={[0, -5, 0]} color='#d7ad84' />
          <Box position={[1, -5, 0]} color='#d7ad84' />
          <Box position={[2, -5, 0]} color='#d7ad84' />
          <Box position={[3, -5, 0]} color='#d7ad84' />
          <Box position={[4, -5, 0]} color='#d7ad84' />
          <Box position={[5, -5, 0]} color='#d7ad84' />
          <Box position={[6, -5, 0]} color='#0e1a38' />

          <Box position={[-4, -6, 0]} color='#0e1a38' />
          <Box position={[-3, -6, 0]} color='#aa4eb9' />
          <Box position={[-2, -6, 0]} color='#e368f7' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />

          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#7b6caa' />
          <Box position={[-3, -7, 0]} color='#a490e3' />
          <Box position={[-2, -7, 0]} color='#a490e3' />
          <Box position={[-1, -7, 0]} color='#a490e3' />
          <Box position={[0, -7, 0]} color='#a490e3' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#a490e3' />
          <Box position={[3, -7, 0]} color='#a490e3' />
          <Box position={[4, -7, 0]} color='#0e1a38' />

          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#51869d' />
          <Box position={[-4, -8, 0]} color='#6cb3d2' />
          <Box position={[-3, -8, 0]} color='#6cb3d2' />
          <Box position={[-2, -8, 0]} color='#6cb3d2' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#6cb3d2' />
          <Box position={[1, -8, 0]} color='#6cb3d2' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#6cb3d2' />
          <Box position={[4, -8, 0]} color='#6cb3d2' />
          <Box position={[5, -8, 0]} color='#0e1a38' />
          <Box position={[6, -8, 0]} color='#0e1a38' />

          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#27a190' />
          <Box position={[-5, -9, 0]} color='#34d7c0' />
          <Box position={[-4, -9, 0]} color='#34d7c0' />
          <Box position={[-3, -9, 0]} color='#34d7c0' />
          <Box position={[-2, -9, 0]} color='#34d7c0' /> 
          <Box position={[-1, -9, 0]} color='#34d7c0' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#34d7c0' />
          <Box position={[2, -9, 0]} color='#34d7c0' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#34d7c0' />
          <Box position={[5, -9, 0]} color='#34d7c0' />
          <Box position={[6, -9, 0]} color='#34d7c0' />
          <Box position={[7, -9, 0]} color='#0e1a38' />

          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#08b587' />
          <Box position={[-6, -10, 0]} color='#0af2b4' />
          <Box position={[-5, -10, 0]} color='#0af2b4' />
          <Box position={[-4, -10, 0]} color='#0af2b4' />
          <Box position={[-3, -10, 0]} color='#0af2b4' /> 
          <Box position={[-2, -10, 0]} color='#0af2b4' /> 
          <Box position={[-1, -10, 0]} color='#0af2b4' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#0af2b4' />
          <Box position={[2, -10, 0]} color='#0af2b4' />
          <Box position={[3, -10, 0]} color='#0af2b4' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#0af2b4' />
          <Box position={[6, -10, 0]} color='#0af2b4' />
          <Box position={[7, -10, 0]} color='#0af2b4' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
          </>
          )
        }
        if (x == 'Skeleton') {
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
          <Box position={[-3, 4, 0]} color='#c5cfcb' />
          <Box position={[-2, 4, 0]} color='#c5cfcb' />
          <Box position={[-1, 4, 0]} color='#c5cfcb' />
          <Box position={[0, 4, 0]} color='#c5cfcb' />
          <Box position={[1, 4, 0]} color='#c5cfcb' />
          <Box position={[2, 4, 0]} color='#ebede8' />
          <Box position={[3, 4, 0]} color='#ebede8' />
          <Box position={[4, 4, 0]} color='#0e1a38' />
          <Box position={[-5, 3, 0]} color='#0e1a38' />
          <Box position={[-4, 3, 0]} color='#c5cfcb' />
          <Box position={[-3, 3, 0]} color='#c5cfcb' />
          <Box position={[-2, 3, 0]} color='#c5cfcb' />
          <Box position={[-1, 3, 0]} color='#c5cfcb' />
          <Box position={[0, 3, 0]} color='#c5cfcb' />
          <Box position={[1, 3, 0]} color='#c5cfcb' />
          <Box position={[2, 3, 0]} color='#c5cfcb' />
          <Box position={[3, 3, 0]} color='#c5cfcb' />
          <Box position={[4, 3, 0]} color='#ebede8' />
          <Box position={[5, 3, 0]} color='#0e1a38' />
          <Box position={[-6, 2, 0]} color='#0e1a38' />
          <Box position={[-5, 2, 0]} color='#c5cfcb' />
          <Box position={[-4, 2, 0]} color='#c5cfcb' />
          <Box position={[-3, 2, 0]} color='#c5cfcb' />
          <Box position={[-2, 2, 0]} color='#7c9796' />
          <Box position={[-1, 2, 0]} color='#c5cfcb' />
          <Box position={[0, 2, 0]} color='#c5cfcb' />
          <Box position={[1, 2, 0]} color='#c5cfcb' />
          <Box position={[2, 2, 0]} color='#c5cfcb' />
          <Box position={[3, 2, 0]} color='#c5cfcb' />
          <Box position={[4, 2, 0]} color='#c5cfcb' />
          <Box position={[5, 2, 0]} color='#c5cfcb' />
          <Box position={[6, 2, 0]} color='#0e1a38' />
          <Box position={[-6, 1, 0]} color='#0e1a38' />
          <Box position={[-5, 1, 0]} color='#7c9796' />
          <Box position={[-4, 1, 0]} color='#c5cfcb' />
          <Box position={[-3, 1, 0]} color='#7c9796' />
          <Box position={[-2, 1, 0]} color='#c5cfcb' />
          <Box position={[-1, 1, 0]} color='#c5cfcb' />
          <Box position={[0, 1, 0]} color='#c5cfcb' />
          <Box position={[1, 1, 0]} color='#0e1a38' />
          <Box position={[2, 1, 0]} color='#0e1a38' />
          <Box position={[3, 1, 0]} color='#c5cfcb' />
          <Box position={[4, 1, 0]} color='#0e1a38' />
          <Box position={[5, 1, 0]} color='#0e1a38' />
          <Box position={[6, 1, 0]} color='#0e1a38' />
          <Box position={[-6, 0, 0]} color='#0e1a38' />
          <Box position={[-5, 0, 0]} color='#7c9796' />
          <Box position={[-4, 0, 0]} color='#c5cfcb' />
          <Box position={[-3, 0, 0]} color='#7c9796' />
          <Box position={[-2, 0, 0]} color='#c5cfcb' />
          <Box position={[-1, 0, 0]} color='#c5cfcb' />
          <Box position={[0, 0, 0]} color='#c5cfcb' />
          <Box position={[1, 0, 0]} color='#0e1a38' />
          <Box position={[2, 0, 0]} color='#c5cfcb' />
          <Box position={[3, 0, 0]} color='#c5cfcb' />
          <Box position={[4, 0, 0]} color='#0e1a38' />
          <Box position={[5, 0, 0]} color='#c5cfcb' />
          <Box position={[6, 0, 0]} color='#0e1a38' />
          <Box position={[-6, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -1, 0]} color='#7c9796' />
          <Box position={[-4, -1, 0]} color='#7c9796' />
          <Box position={[-3, -1, 0]} color='#c5cfcb' />
          <Box position={[-2, -1, 0]} color='#c5cfcb' />
          <Box position={[-1, -1, 0]} color='#0e1a38' />
          <Box position={[0, -1, 0]} color='#c5cfcb' />
          <Box position={[1, -1, 0]} color='#c5cfcb' />
          <Box position={[2, -1, 0]} color='#c5cfcb' />
          <Box position={[3, -1, 0]} color='#0e1a38' />
          <Box position={[4, -1, 0]} color='#c5cfcb' />
          <Box position={[5, -1, 0]} color='#c5cfcb' />
          <Box position={[6, -1, 0]} color='#c5cfcb' />
          <Box position={[7, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -2, 0]} color='#7c9796' />
          <Box position={[-3, -2, 0]} color='#7c9796' />
          <Box position={[-2, -2, 0]} color='#0e1a38' />
          <Box position={[-1, -2, 0]} color='#c5cfcb' />
          <Box position={[0, -2, 0]} color='#c5cfcb' />
          <Box position={[1, -2, 0]} color='#c5cfcb' />
          <Box position={[2, -2, 0]} color='#c5cfcb' />
          <Box position={[3, -2, 0]} color='#c5cfcb' />
          <Box position={[4, -2, 0]} color='#c5cfcb' />
          <Box position={[5, -2, 0]} color='#c5cfcb' />
          <Box position={[6, -2, 0]} color='#c5cfcb' />
          <Box position={[7, -2, 0]} color='#c5cfcb' />
          <Box position={[8, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -3, 0]} color='#7c9796' />
          <Box position={[-2, -3, 0]} color='#0e1a38' />
          <Box position={[-1, -3, 0]} color='#c5cfcb' />
          <Box position={[0, -3, 0]} color='#0e1a38' />
          <Box position={[1, -3, 0]} color='#c5cfcb' />
          <Box position={[2, -3, 0]} color='#0e1a38' />
          <Box position={[3, -3, 0]} color='#c5cfcb' />
          <Box position={[4, -3, 0]} color='#0e1a38' />
          <Box position={[5, -3, 0]} color='#c5cfcb' />
          <Box position={[6, -3, 0]} color='#0e1a38' />
          <Box position={[7, -3, 0]} color='#c5cfcb' />
          <Box position={[8, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -4, 0]} color='#0e1a38' />
          <Box position={[-2, -4, 0]} color='#7c9796' />
          <Box position={[-1, -4, 0]} color='#0e1a38' />
          <Box position={[0, -4, 0]} color='#c5cfcb' />
          <Box position={[1, -4, 0]} color='#0e1a38' />
          <Box position={[2, -4, 0]} color='#c5cfcb' />
          <Box position={[3, -4, 0]} color='#0e1a38' />
          <Box position={[4, -4, 0]} color='#c5cfcb' />
          <Box position={[5, -4, 0]} color='#0e1a38' />
          <Box position={[6, -4, 0]} color='#c5cfcb' />
          <Box position={[7, -4, 0]} color='#0e1a38' />
          <Box position={[-3, -5, 0]} color='#0e1a38' />
          <Box position={[-2, -5, 0]} color='#0e1a38' />
          <Box position={[-1, -5, 0]} color='#7c9796' />
          <Box position={[0, -5, 0]} color='#7c9796' />
          <Box position={[1, -5, 0]} color='#c5cfcb' />
          <Box position={[2, -5, 0]} color='#c5cfcb' />
          <Box position={[3, -5, 0]} color='#c5cfcb' />
          <Box position={[4, -5, 0]} color='#c5cfcb' />
          <Box position={[5, -5, 0]} color='#c5cfcb' />
          <Box position={[6, -5, 0]} color='#0e1a38' />
          <Box position={[-4, -6, 0]} color='#0e1a38' />
          <Box position={[-3, -6, 0]} color='#c5cfcb' />
          <Box position={[-2, -6, 0]} color='#ebede8' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />
          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#7c9796' />
          <Box position={[-3, -7, 0]} color='#c5cfcb' />
          <Box position={[-2, -7, 0]} color='#c5cfcb' />
          <Box position={[-1, -7, 0]} color='#ebede8' />
          <Box position={[0, -7, 0]} color='#ebede8' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#7c9796' />
          <Box position={[3, -7, 0]} color='#ebede8' />
          <Box position={[4, -7, 0]} color='#0e1a38' />
          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#c5cfcb' />
          <Box position={[-4, -8, 0]} color='#c5cfcb' />
          <Box position={[-3, -8, 0]} color='#7c9796' />
          <Box position={[-2, -8, 0]} color='#7c9796' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#7c9796' />
          <Box position={[1, -8, 0]} color='#ebede8' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#7c9796' />
          <Box position={[4, -8, 0]} color='#ebede8' />
          <Box position={[5, -8, 0]} color='#0e1a38' />
          <Box position={[6, -8, 0]} color='#0e1a38' />
          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#c5cfcb' />
          <Box position={[-5, -9, 0]} color='#7c9796' />
          <Box position={[-4, -9, 0]} color='#c5cfcb' />
          <Box position={[-3, -9, 0]} color='#c5cfcb' />
          <Box position={[-2, -9, 0]} color='#c5cfcb' /> 
          <Box position={[-1, -9, 0]} color='#c5cfcb' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#7c9796' />
          <Box position={[2, -9, 0]} color='#ebede8' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#7c9796' />
          <Box position={[5, -9, 0]} color='#ebede8' />
          <Box position={[6, -9, 0]} color='#ebede8' />
          <Box position={[7, -9, 0]} color='#0e1a38' />
          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#7c9796' />
          <Box position={[-6, -10, 0]} color='#c5cfcb' />
          <Box position={[-5, -10, 0]} color='#c5cfcb' />
          <Box position={[-4, -10, 0]} color='#7c9796' />
          <Box position={[-3, -10, 0]} color='#7c9796' /> 
          <Box position={[-2, -10, 0]} color='#7c9796' /> 
          <Box position={[-1, -10, 0]} color='#7c9796' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#7c9796' />
          <Box position={[2, -10, 0]} color='#7c9796' />
          <Box position={[3, -10, 0]} color='#ebede8' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#7c9796' />
          <Box position={[6, -10, 0]} color='#7c9796' />
          <Box position={[7, -10, 0]} color='#ebede8' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
          </>
          )
        }
        if (x == 'Brown') {
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
          <Box position={[-3, 4, 0]} color='#602020' />
          <Box position={[-2, 4, 0]} color='#7a3c33' />
          <Box position={[-1, 4, 0]} color='#7a3c33' />
          <Box position={[0, 4, 0]} color='#7a3c33' />
          <Box position={[1, 4, 0]} color='#7a3c33' />
          <Box position={[2, 4, 0]} color='#7a3c33' />
          <Box position={[3, 4, 0]} color='#7a3c33' />
          <Box position={[4, 4, 0]} color='#0e1a38' />
          <Box position={[-5, 3, 0]} color='#0e1a38' />
          <Box position={[-4, 3, 0]} color='#602020' />
          <Box position={[-3, 3, 0]} color='#7a3c33' />
          <Box position={[-2, 3, 0]} color='#7a3c33' />
          <Box position={[-1, 3, 0]} color='#7a3c33' />
          <Box position={[0, 3, 0]} color='#d7ad84' />
          <Box position={[1, 3, 0]} color='#d7ad84' />
          <Box position={[2, 3, 0]} color='#7a3c33' />
          <Box position={[3, 3, 0]} color='#7a3c33' />
          <Box position={[4, 3, 0]} color='#d7ad84' />
          <Box position={[5, 3, 0]} color='#0e1a38' />
          <Box position={[-6, 2, 0]} color='#0e1a38' />
          <Box position={[-5, 2, 0]} color='#602020' />
          <Box position={[-4, 2, 0]} color='#7a3c33' />
          <Box position={[-3, 2, 0]} color='#7a3c33' />
          <Box position={[-2, 2, 0]} color='#7a3c33' />
          <Box position={[-1, 2, 0]} color='#d7ad84' />
          <Box position={[0, 2, 0]} color='#d7ad84' />
          <Box position={[1, 2, 0]} color='#d7ad84' />
          <Box position={[2, 2, 0]} color='#d7ad84' />
          <Box position={[3, 2, 0]} color='#d7ad84' />
          <Box position={[4, 2, 0]} color='#d7ad84' />
          <Box position={[5, 2, 0]} color='#d7ad84' />
          <Box position={[6, 2, 0]} color='#0e1a38' />
          <Box position={[-6, 1, 0]} color='#0e1a38' />
          <Box position={[-5, 1, 0]} color='#602020' />
          <Box position={[-4, 1, 0]} color='#7a3c33' />
          <Box position={[-3, 1, 0]} color='#7a3c33' />
          <Box position={[-2, 1, 0]} color='#d7ad84' />
          <Box position={[-1, 1, 0]} color='#d7ad84' />
          <Box position={[0, 1, 0]} color='#d7ad84' />
          <Box position={[1, 1, 0]} color='#0e1a38' />
          <Box position={[2, 1, 0]} color='#d7ad84' />
          <Box position={[3, 1, 0]} color='#d7ad84' />
          <Box position={[4, 1, 0]} color='#0e1a38' />
          <Box position={[5, 1, 0]} color='#d7ad84' />
          <Box position={[6, 1, 0]} color='#0e1a38' />
          <Box position={[-6, 0, 0]} color='#0e1a38' />
          <Box position={[-5, 0, 0]} color='#602020' />
          <Box position={[-4, 0, 0]} color='#0e1a38' />
          <Box position={[-3, 0, 0]} color='#7a3c33' />
          <Box position={[-2, 0, 0]} color='#d7ad84' />
          <Box position={[-1, 0, 0]} color='#d7ad84' />
          <Box position={[0, 0, 0]} color='#d7ad84' />
          <Box position={[1, 0, 0]} color='#0e1a38' />
          <Box position={[2, 0, 0]} color='#d7ad84' />
          <Box position={[3, 0, 0]} color='#d7ad84' />
          <Box position={[4, 0, 0]} color='#0e1a38' />
          <Box position={[5, 0, 0]} color='#d7ad84' />
          <Box position={[6, 0, 0]} color='#0e1a38' />
          <Box position={[-6, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -1, 0]} color='#602020' />
          <Box position={[-4, -1, 0]} color='#0e1a38' />
          <Box position={[-3, -1, 0]} color='#7a3c33' />
          <Box position={[-2, -1, 0]} color='#d7ad84' />
          <Box position={[-1, -1, 0]} color='#0e1a38' />
          <Box position={[0, -1, 0]} color='#d7ad84' />
          <Box position={[1, -1, 0]} color='#d7ad84' />
          <Box position={[2, -1, 0]} color='#d7ad84' />
          <Box position={[3, -1, 0]} color='#d7ad84' />
          <Box position={[4, -1, 0]} color='#d7ad84' />
          <Box position={[5, -1, 0]} color='#d7ad84' />
          <Box position={[6, -1, 0]} color='#d7ad84' />
          <Box position={[7, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -2, 0]} color='#602020' />
          <Box position={[-3, -2, 0]} color='#7a3c33' />
          <Box position={[-2, -2, 0]} color='#0e1a38' />
          <Box position={[-1, -2, 0]} color='#d7ad84' />
          <Box position={[0, -2, 0]} color='#d7ad84' />
          <Box position={[1, -2, 0]} color='#d7ad84' />
          <Box position={[2, -2, 0]} color='#d7ad84' />
          <Box position={[3, -2, 0]} color='#d7ad84' />
          <Box position={[4, -2, 0]} color='#d7ad84' />
          <Box position={[5, -2, 0]} color='#d7ad84' />
          <Box position={[6, -2, 0]} color='#d7ad84' />
          <Box position={[7, -2, 0]} color='#d7ad84' />
          <Box position={[8, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -3, 0]} color='#7a3c33' />
          <Box position={[-2, -3, 0]} color='#0e1a38' />
          <Box position={[-1, -3, 0]} color='#d7ad84' />
          <Box position={[0, -3, 0]} color='#d7ad84' />
          <Box position={[1, -3, 0]} color='#d7ad84' />
          <Box position={[2, -3, 0]} color='#d7ad84' />
          <Box position={[3, -3, 0]} color='#d7ad84' />
          <Box position={[4, -3, 0]} color='#d7ad84' />
          <Box position={[5, -3, 0]} color='#d7ad84' />
          <Box position={[6, -3, 0]} color='#d7ad84' />
          <Box position={[7, -3, 0]} color='#d7ad84' />
          <Box position={[8, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -4, 0]} color='#0e1a38' />
          <Box position={[-2, -4, 0]} color='#d7ad84' />
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
          <Box position={[-1, -5, 0]} color='#d7ad84' />
          <Box position={[0, -5, 0]} color='#d7ad84' />
          <Box position={[1, -5, 0]} color='#d7ad84' />
          <Box position={[2, -5, 0]} color='#d7ad84' />
          <Box position={[3, -5, 0]} color='#d7ad84' />
          <Box position={[4, -5, 0]} color='#d7ad84' />
          <Box position={[5, -5, 0]} color='#d7ad84' />
          <Box position={[6, -5, 0]} color='#0e1a38' />
          <Box position={[-4, -6, 0]} color='#0e1a38' />
          <Box position={[-3, -6, 0]} color='#602020' />
          <Box position={[-2, -6, 0]} color='#7a3c33' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />
          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#602020' />
          <Box position={[-3, -7, 0]} color='#7a3c33' />
          <Box position={[-2, -7, 0]} color='#7a3c33' />
          <Box position={[-1, -7, 0]} color='#7a3c33' />
          <Box position={[0, -7, 0]} color='#7a3c33' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#7a3c33' />
          <Box position={[3, -7, 0]} color='#7a3c33' />
          <Box position={[4, -7, 0]} color='#0e1a38' />
          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#602020' />
          <Box position={[-4, -8, 0]} color='#7a3c33' />
          <Box position={[-3, -8, 0]} color='#7a3c33' />
          <Box position={[-2, -8, 0]} color='#7a3c33' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#7a3c33' />
          <Box position={[1, -8, 0]} color='#7a3c33' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#7a3c33' />
          <Box position={[4, -8, 0]} color='#7a3c33' />
          <Box position={[5, -8, 0]} color='#0e1a38' />
          <Box position={[6, -8, 0]} color='#0e1a38' />
          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#602020' />
          <Box position={[-5, -9, 0]} color='#7a3c33' />
          <Box position={[-4, -9, 0]} color='#7a3c33' />
          <Box position={[-3, -9, 0]} color='#7a3c33' />
          <Box position={[-2, -9, 0]} color='#7a3c33' /> 
          <Box position={[-1, -9, 0]} color='#7a3c33' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#7a3c33' />
          <Box position={[2, -9, 0]} color='#7a3c33' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#7a3c33' />
          <Box position={[5, -9, 0]} color='#7a3c33' />
          <Box position={[6, -9, 0]} color='#7a3c33' />
          <Box position={[7, -9, 0]} color='#0e1a38' />
          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#602020' />
          <Box position={[-6, -10, 0]} color='#7a3c33' />
          <Box position={[-5, -10, 0]} color='#7a3c33' />
          <Box position={[-4, -10, 0]} color='#7a3c33' />
          <Box position={[-3, -10, 0]} color='#7a3c33' /> 
          <Box position={[-2, -10, 0]} color='#7a3c33' /> 
          <Box position={[-1, -10, 0]} color='#7a3c33' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#7a3c33' />
          <Box position={[2, -10, 0]} color='#7a3c33' />
          <Box position={[3, -10, 0]} color='#7a3c33' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#7a3c33' />
          <Box position={[6, -10, 0]} color='#7a3c33' />
          <Box position={[7, -10, 0]} color='#7a3c33' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
          </>
          )
        }
        if (x == 'Orange') {
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
          <Box position={[-3, 4, 0]} color='#da7219' />
          <Box position={[-2, 4, 0]} color='#ed9e2f' />
          <Box position={[-1, 4, 0]} color='#ed9e2f' />
          <Box position={[0, 4, 0]} color='#ed9e2f' />
          <Box position={[1, 4, 0]} color='#ed9e2f' />
          <Box position={[2, 4, 0]} color='#ed9e2f' />
          <Box position={[3, 4, 0]} color='#ed9e2f' />
          <Box position={[4, 4, 0]} color='#0e1a38' />
          <Box position={[-5, 3, 0]} color='#0e1a38' />
          <Box position={[-4, 3, 0]} color='#da7219' />
          <Box position={[-3, 3, 0]} color='#ed9e2f' />
          <Box position={[-2, 3, 0]} color='#ed9e2f' />
          <Box position={[-1, 3, 0]} color='#ed9e2f' />
          <Box position={[0, 3, 0]} color='#d7ad84' />
          <Box position={[1, 3, 0]} color='#d7ad84' />
          <Box position={[2, 3, 0]} color='#ed9e2f' />
          <Box position={[3, 3, 0]} color='#ed9e2f' />
          <Box position={[4, 3, 0]} color='#d7ad84' />
          <Box position={[5, 3, 0]} color='#0e1a38' />
          <Box position={[-6, 2, 0]} color='#0e1a38' />
          <Box position={[-5, 2, 0]} color='#da7219' />
          <Box position={[-4, 2, 0]} color='#ed9e2f' />
          <Box position={[-3, 2, 0]} color='#ed9e2f' />
          <Box position={[-2, 2, 0]} color='#ed9e2f' />
          <Box position={[-1, 2, 0]} color='#d7ad84' />
          <Box position={[0, 2, 0]} color='#d7ad84' />
          <Box position={[1, 2, 0]} color='#d7ad84' />
          <Box position={[2, 2, 0]} color='#d7ad84' />
          <Box position={[3, 2, 0]} color='#d7ad84' />
          <Box position={[4, 2, 0]} color='#d7ad84' />
          <Box position={[5, 2, 0]} color='#d7ad84' />
          <Box position={[6, 2, 0]} color='#0e1a38' />
          <Box position={[-6, 1, 0]} color='#0e1a38' />
          <Box position={[-5, 1, 0]} color='#da7219' />
          <Box position={[-4, 1, 0]} color='#ed9e2f' />
          <Box position={[-3, 1, 0]} color='#ed9e2f' />
          <Box position={[-2, 1, 0]} color='#d7ad84' />
          <Box position={[-1, 1, 0]} color='#d7ad84' />
          <Box position={[0, 1, 0]} color='#d7ad84' />
          <Box position={[1, 1, 0]} color='#0e1a38' />
          <Box position={[2, 1, 0]} color='#d7ad84' />
          <Box position={[3, 1, 0]} color='#d7ad84' />
          <Box position={[4, 1, 0]} color='#0e1a38' />
          <Box position={[5, 1, 0]} color='#d7ad84' />
          <Box position={[6, 1, 0]} color='#0e1a38' />
          <Box position={[-6, 0, 0]} color='#0e1a38' />
          <Box position={[-5, 0, 0]} color='#da7219' />
          <Box position={[-4, 0, 0]} color='#0e1a38' />
          <Box position={[-3, 0, 0]} color='#ed9e2f' />
          <Box position={[-2, 0, 0]} color='#d7ad84' />
          <Box position={[-1, 0, 0]} color='#d7ad84' />
          <Box position={[0, 0, 0]} color='#d7ad84' />
          <Box position={[1, 0, 0]} color='#0e1a38' />
          <Box position={[2, 0, 0]} color='#d7ad84' />
          <Box position={[3, 0, 0]} color='#d7ad84' />
          <Box position={[4, 0, 0]} color='#0e1a38' />
          <Box position={[5, 0, 0]} color='#d7ad84' />
          <Box position={[6, 0, 0]} color='#0e1a38' />
          <Box position={[-6, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -1, 0]} color='#da7219' />
          <Box position={[-4, -1, 0]} color='#0e1a38' />
          <Box position={[-3, -1, 0]} color='#ed9e2f' />
          <Box position={[-2, -1, 0]} color='#d7ad84' />
          <Box position={[-1, -1, 0]} color='#0e1a38' />
          <Box position={[0, -1, 0]} color='#d7ad84' />
          <Box position={[1, -1, 0]} color='#d7ad84' />
          <Box position={[2, -1, 0]} color='#d7ad84' />
          <Box position={[3, -1, 0]} color='#d7ad84' />
          <Box position={[4, -1, 0]} color='#d7ad84' />
          <Box position={[5, -1, 0]} color='#d7ad84' />
          <Box position={[6, -1, 0]} color='#d7ad84' />
          <Box position={[7, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -2, 0]} color='#da7219' />
          <Box position={[-3, -2, 0]} color='#ed9e2f' />
          <Box position={[-2, -2, 0]} color='#0e1a38' />
          <Box position={[-1, -2, 0]} color='#d7ad84' />
          <Box position={[0, -2, 0]} color='#d7ad84' />
          <Box position={[1, -2, 0]} color='#d7ad84' />
          <Box position={[2, -2, 0]} color='#d7ad84' />
          <Box position={[3, -2, 0]} color='#d7ad84' />
          <Box position={[4, -2, 0]} color='#d7ad84' />
          <Box position={[5, -2, 0]} color='#d7ad84' />
          <Box position={[6, -2, 0]} color='#d7ad84' />
          <Box position={[7, -2, 0]} color='#d7ad84' />
          <Box position={[8, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -3, 0]} color='#ed9e2f' />
          <Box position={[-2, -3, 0]} color='#0e1a38' />
          <Box position={[-1, -3, 0]} color='#d7ad84' />
          <Box position={[0, -3, 0]} color='#d7ad84' />
          <Box position={[1, -3, 0]} color='#d7ad84' />
          <Box position={[2, -3, 0]} color='#d7ad84' />
          <Box position={[3, -3, 0]} color='#d7ad84' />
          <Box position={[4, -3, 0]} color='#d7ad84' />
          <Box position={[5, -3, 0]} color='#d7ad84' />
          <Box position={[6, -3, 0]} color='#d7ad84' />
          <Box position={[7, -3, 0]} color='#d7ad84' />
          <Box position={[8, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -4, 0]} color='#0e1a38' />
          <Box position={[-2, -4, 0]} color='#d7ad84' />
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
          <Box position={[-1, -5, 0]} color='#d7ad84' />
          <Box position={[0, -5, 0]} color='#d7ad84' />
          <Box position={[1, -5, 0]} color='#d7ad84' />
          <Box position={[2, -5, 0]} color='#d7ad84' />
          <Box position={[3, -5, 0]} color='#d7ad84' />
          <Box position={[4, -5, 0]} color='#d7ad84' />
          <Box position={[5, -5, 0]} color='#d7ad84' />
          <Box position={[6, -5, 0]} color='#0e1a38' />
          <Box position={[-4, -6, 0]} color='#0e1a38' />
          <Box position={[-3, -6, 0]} color='#da7219' />
          <Box position={[-2, -6, 0]} color='#ed9e2f' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />
          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#da7219' />
          <Box position={[-3, -7, 0]} color='#ed9e2f' />
          <Box position={[-2, -7, 0]} color='#ed9e2f' />
          <Box position={[-1, -7, 0]} color='#ed9e2f' />
          <Box position={[0, -7, 0]} color='#ed9e2f' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#ed9e2f' />
          <Box position={[3, -7, 0]} color='#ed9e2f' />
          <Box position={[4, -7, 0]} color='#0e1a38' />
          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#da7219' />
          <Box position={[-4, -8, 0]} color='#ed9e2f' />
          <Box position={[-3, -8, 0]} color='#ed9e2f' />
          <Box position={[-2, -8, 0]} color='#ed9e2f' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#ed9e2f' />
          <Box position={[1, -8, 0]} color='#ed9e2f' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#ed9e2f' />
          <Box position={[4, -8, 0]} color='#ed9e2f' />
          <Box position={[5, -8, 0]} color='#0e1a38' />
          <Box position={[6, -8, 0]} color='#0e1a38' />
          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#da7219' />
          <Box position={[-5, -9, 0]} color='#ed9e2f' />
          <Box position={[-4, -9, 0]} color='#ed9e2f' />
          <Box position={[-3, -9, 0]} color='#ed9e2f' />
          <Box position={[-2, -9, 0]} color='#ed9e2f' /> 
          <Box position={[-1, -9, 0]} color='#ed9e2f' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#ed9e2f' />
          <Box position={[2, -9, 0]} color='#ed9e2f' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#ed9e2f' />
          <Box position={[5, -9, 0]} color='#ed9e2f' />
          <Box position={[6, -9, 0]} color='#ed9e2f' />
          <Box position={[7, -9, 0]} color='#0e1a38' />
          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#da7219' />
          <Box position={[-6, -10, 0]} color='#ed9e2f' />
          <Box position={[-5, -10, 0]} color='#ed9e2f' />
          <Box position={[-4, -10, 0]} color='#ed9e2f' />
          <Box position={[-3, -10, 0]} color='#ed9e2f' /> 
          <Box position={[-2, -10, 0]} color='#ed9e2f' /> 
          <Box position={[-1, -10, 0]} color='#ed9e2f' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#ed9e2f' />
          <Box position={[2, -10, 0]} color='#ed9e2f' />
          <Box position={[3, -10, 0]} color='#ed9e2f' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#ed9e2f' />
          <Box position={[6, -10, 0]} color='#ed9e2f' />
          <Box position={[7, -10, 0]} color='#ed9e2f' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
          </>
          )
        }
        if (x == 'Dark') {
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
          <Box position={[-3, 4, 0]} color='#1a2c37' />
          <Box position={[-2, 4, 0]} color='#334950' />
          <Box position={[-1, 4, 0]} color='#334950' />
          <Box position={[0, 4, 0]} color='#334950' />
          <Box position={[1, 4, 0]} color='#334950' />
          <Box position={[2, 4, 0]} color='#334950' />
          <Box position={[3, 4, 0]} color='#334950' />
          <Box position={[4, 4, 0]} color='#0e1a38' />
          <Box position={[-5, 3, 0]} color='#0e1a38' />
          <Box position={[-4, 3, 0]} color='#1a2c37' />
          <Box position={[-3, 3, 0]} color='#334950' />
          <Box position={[-2, 3, 0]} color='#334950' />
          <Box position={[-1, 3, 0]} color='#334950' />
          <Box position={[0, 3, 0]} color='#d7ad84' />
          <Box position={[1, 3, 0]} color='#d7ad84' />
          <Box position={[2, 3, 0]} color='#334950' />
          <Box position={[3, 3, 0]} color='#334950' />
          <Box position={[4, 3, 0]} color='#d7ad84' />
          <Box position={[5, 3, 0]} color='#0e1a38' />
          <Box position={[-6, 2, 0]} color='#0e1a38' />
          <Box position={[-5, 2, 0]} color='#1a2c37' />
          <Box position={[-4, 2, 0]} color='#334950' />
          <Box position={[-3, 2, 0]} color='#334950' />
          <Box position={[-2, 2, 0]} color='#334950' />
          <Box position={[-1, 2, 0]} color='#d7ad84' />
          <Box position={[0, 2, 0]} color='#d7ad84' />
          <Box position={[1, 2, 0]} color='#d7ad84' />
          <Box position={[2, 2, 0]} color='#d7ad84' />
          <Box position={[3, 2, 0]} color='#d7ad84' />
          <Box position={[4, 2, 0]} color='#d7ad84' />
          <Box position={[5, 2, 0]} color='#d7ad84' />
          <Box position={[6, 2, 0]} color='#0e1a38' />
          <Box position={[-6, 1, 0]} color='#0e1a38' />
          <Box position={[-5, 1, 0]} color='#1a2c37' />
          <Box position={[-4, 1, 0]} color='#334950' />
          <Box position={[-3, 1, 0]} color='#334950' />
          <Box position={[-2, 1, 0]} color='#d7ad84' />
          <Box position={[-1, 1, 0]} color='#d7ad84' />
          <Box position={[0, 1, 0]} color='#d7ad84' />
          <Box position={[1, 1, 0]} color='#0e1a38' />
          <Box position={[2, 1, 0]} color='#d7ad84' />
          <Box position={[3, 1, 0]} color='#d7ad84' />
          <Box position={[4, 1, 0]} color='#0e1a38' />
          <Box position={[5, 1, 0]} color='#d7ad84' />
          <Box position={[6, 1, 0]} color='#0e1a38' />
          <Box position={[-6, 0, 0]} color='#0e1a38' />
          <Box position={[-5, 0, 0]} color='#1a2c37' />
          <Box position={[-4, 0, 0]} color='#0e1a38' />
          <Box position={[-3, 0, 0]} color='#334950' />
          <Box position={[-2, 0, 0]} color='#d7ad84' />
          <Box position={[-1, 0, 0]} color='#d7ad84' />
          <Box position={[0, 0, 0]} color='#d7ad84' />
          <Box position={[1, 0, 0]} color='#0e1a38' />
          <Box position={[2, 0, 0]} color='#d7ad84' />
          <Box position={[3, 0, 0]} color='#d7ad84' />
          <Box position={[4, 0, 0]} color='#0e1a38' />
          <Box position={[5, 0, 0]} color='#d7ad84' />
          <Box position={[6, 0, 0]} color='#0e1a38' />
          <Box position={[-6, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -1, 0]} color='#1a2c37' />
          <Box position={[-4, -1, 0]} color='#0e1a38' />
          <Box position={[-3, -1, 0]} color='#334950' />
          <Box position={[-2, -1, 0]} color='#d7ad84' />
          <Box position={[-1, -1, 0]} color='#0e1a38' />
          <Box position={[0, -1, 0]} color='#d7ad84' />
          <Box position={[1, -1, 0]} color='#d7ad84' />
          <Box position={[2, -1, 0]} color='#d7ad84' />
          <Box position={[3, -1, 0]} color='#d7ad84' />
          <Box position={[4, -1, 0]} color='#d7ad84' />
          <Box position={[5, -1, 0]} color='#d7ad84' />
          <Box position={[6, -1, 0]} color='#d7ad84' />
          <Box position={[7, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -2, 0]} color='#1a2c37' />
          <Box position={[-3, -2, 0]} color='#334950' />
          <Box position={[-2, -2, 0]} color='#0e1a38' />
          <Box position={[-1, -2, 0]} color='#d7ad84' />
          <Box position={[0, -2, 0]} color='#d7ad84' />
          <Box position={[1, -2, 0]} color='#d7ad84' />
          <Box position={[2, -2, 0]} color='#d7ad84' />
          <Box position={[3, -2, 0]} color='#d7ad84' />
          <Box position={[4, -2, 0]} color='#d7ad84' />
          <Box position={[5, -2, 0]} color='#d7ad84' />
          <Box position={[6, -2, 0]} color='#d7ad84' />
          <Box position={[7, -2, 0]} color='#d7ad84' />
          <Box position={[8, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -3, 0]} color='#334950' />
          <Box position={[-2, -3, 0]} color='#0e1a38' />
          <Box position={[-1, -3, 0]} color='#d7ad84' />
          <Box position={[0, -3, 0]} color='#d7ad84' />
          <Box position={[1, -3, 0]} color='#d7ad84' />
          <Box position={[2, -3, 0]} color='#d7ad84' />
          <Box position={[3, -3, 0]} color='#d7ad84' />
          <Box position={[4, -3, 0]} color='#d7ad84' />
          <Box position={[5, -3, 0]} color='#d7ad84' />
          <Box position={[6, -3, 0]} color='#d7ad84' />
          <Box position={[7, -3, 0]} color='#d7ad84' />
          <Box position={[8, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -4, 0]} color='#0e1a38' />
          <Box position={[-2, -4, 0]} color='#d7ad84' />
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
          <Box position={[-1, -5, 0]} color='#d7ad84' />
          <Box position={[0, -5, 0]} color='#d7ad84' />
          <Box position={[1, -5, 0]} color='#d7ad84' />
          <Box position={[2, -5, 0]} color='#d7ad84' />
          <Box position={[3, -5, 0]} color='#d7ad84' />
          <Box position={[4, -5, 0]} color='#d7ad84' />
          <Box position={[5, -5, 0]} color='#d7ad84' />
          <Box position={[6, -5, 0]} color='#0e1a38' />
          <Box position={[-4, -6, 0]} color='#0e1a38' />
          <Box position={[-3, -6, 0]} color='#1a2c37' />
          <Box position={[-2, -6, 0]} color='#334950' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />
          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#1a2c37' />
          <Box position={[-3, -7, 0]} color='#334950' />
          <Box position={[-2, -7, 0]} color='#334950' />
          <Box position={[-1, -7, 0]} color='#334950' />
          <Box position={[0, -7, 0]} color='#334950' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#334950' />
          <Box position={[3, -7, 0]} color='#334950' />
          <Box position={[4, -7, 0]} color='#0e1a38' />
          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#1a2c37' />
          <Box position={[-4, -8, 0]} color='#334950' />
          <Box position={[-3, -8, 0]} color='#334950' />
          <Box position={[-2, -8, 0]} color='#334950' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#334950' />
          <Box position={[1, -8, 0]} color='#334950' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#334950' />
          <Box position={[4, -8, 0]} color='#334950' />
          <Box position={[5, -8, 0]} color='#0e1a38' />
          <Box position={[6, -8, 0]} color='#0e1a38' />
          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#1a2c37' />
          <Box position={[-5, -9, 0]} color='#334950' />
          <Box position={[-4, -9, 0]} color='#334950' />
          <Box position={[-3, -9, 0]} color='#334950' />
          <Box position={[-2, -9, 0]} color='#334950' /> 
          <Box position={[-1, -9, 0]} color='#334950' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#334950' />
          <Box position={[2, -9, 0]} color='#334950' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#334950' />
          <Box position={[5, -9, 0]} color='#334950' />
          <Box position={[6, -9, 0]} color='#334950' />
          <Box position={[7, -9, 0]} color='#0e1a38' />
          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#1a2c37' />
          <Box position={[-6, -10, 0]} color='#334950' />
          <Box position={[-5, -10, 0]} color='#334950' />
          <Box position={[-4, -10, 0]} color='#334950' />
          <Box position={[-3, -10, 0]} color='#334950' /> 
          <Box position={[-2, -10, 0]} color='#334950' /> 
          <Box position={[-1, -10, 0]} color='#334950' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#334950' />
          <Box position={[2, -10, 0]} color='#334950' />
          <Box position={[3, -10, 0]} color='#334950' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#334950' />
          <Box position={[6, -10, 0]} color='#334950' />
          <Box position={[7, -10, 0]} color='#334950' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
          </>
          )
        }
        if (x == 'Red') {
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
          <Box position={[-3, 4, 0]} color='#a51414' />
          <Box position={[-2, 4, 0]} color='#f24949' />
          <Box position={[-1, 4, 0]} color='#f24949' />
          <Box position={[0, 4, 0]} color='#f24949' />
          <Box position={[1, 4, 0]} color='#f24949' />
          <Box position={[2, 4, 0]} color='#f24949' />
          <Box position={[3, 4, 0]} color='#f24949' />
          <Box position={[4, 4, 0]} color='#0e1a38' />
          <Box position={[-5, 3, 0]} color='#0e1a38' />
          <Box position={[-4, 3, 0]} color='#a51414' />
          <Box position={[-3, 3, 0]} color='#f24949' />
          <Box position={[-2, 3, 0]} color='#f24949' />
          <Box position={[-1, 3, 0]} color='#f24949' />
          <Box position={[0, 3, 0]} color='#d7ad84' />
          <Box position={[1, 3, 0]} color='#d7ad84' />
          <Box position={[2, 3, 0]} color='#f24949' />
          <Box position={[3, 3, 0]} color='#f24949' />
          <Box position={[4, 3, 0]} color='#d7ad84' />
          <Box position={[5, 3, 0]} color='#0e1a38' />
          <Box position={[-6, 2, 0]} color='#0e1a38' />
          <Box position={[-5, 2, 0]} color='#a51414' />
          <Box position={[-4, 2, 0]} color='#f24949' />
          <Box position={[-3, 2, 0]} color='#f24949' />
          <Box position={[-2, 2, 0]} color='#f24949' />
          <Box position={[-1, 2, 0]} color='#d7ad84' />
          <Box position={[0, 2, 0]} color='#d7ad84' />
          <Box position={[1, 2, 0]} color='#d7ad84' />
          <Box position={[2, 2, 0]} color='#d7ad84' />
          <Box position={[3, 2, 0]} color='#d7ad84' />
          <Box position={[4, 2, 0]} color='#d7ad84' />
          <Box position={[5, 2, 0]} color='#d7ad84' />
          <Box position={[6, 2, 0]} color='#0e1a38' />
          <Box position={[-6, 1, 0]} color='#0e1a38' />
          <Box position={[-5, 1, 0]} color='#a51414' />
          <Box position={[-4, 1, 0]} color='#f24949' />
          <Box position={[-3, 1, 0]} color='#f24949' />
          <Box position={[-2, 1, 0]} color='#d7ad84' />
          <Box position={[-1, 1, 0]} color='#d7ad84' />
          <Box position={[0, 1, 0]} color='#d7ad84' />
          <Box position={[1, 1, 0]} color='#0e1a38' />
          <Box position={[2, 1, 0]} color='#d7ad84' />
          <Box position={[3, 1, 0]} color='#d7ad84' />
          <Box position={[4, 1, 0]} color='#0e1a38' />
          <Box position={[5, 1, 0]} color='#d7ad84' />
          <Box position={[6, 1, 0]} color='#0e1a38' />
          <Box position={[-6, 0, 0]} color='#0e1a38' />
          <Box position={[-5, 0, 0]} color='#a51414' />
          <Box position={[-4, 0, 0]} color='#0e1a38' />
          <Box position={[-3, 0, 0]} color='#f24949' />
          <Box position={[-2, 0, 0]} color='#d7ad84' />
          <Box position={[-1, 0, 0]} color='#d7ad84' />
          <Box position={[0, 0, 0]} color='#d7ad84' />
          <Box position={[1, 0, 0]} color='#0e1a38' />
          <Box position={[2, 0, 0]} color='#d7ad84' />
          <Box position={[3, 0, 0]} color='#d7ad84' />
          <Box position={[4, 0, 0]} color='#0e1a38' />
          <Box position={[5, 0, 0]} color='#d7ad84' />
          <Box position={[6, 0, 0]} color='#0e1a38' />
          <Box position={[-6, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -1, 0]} color='#a51414' />
          <Box position={[-4, -1, 0]} color='#0e1a38' />
          <Box position={[-3, -1, 0]} color='#f24949' />
          <Box position={[-2, -1, 0]} color='#d7ad84' />
          <Box position={[-1, -1, 0]} color='#0e1a38' />
          <Box position={[0, -1, 0]} color='#d7ad84' />
          <Box position={[1, -1, 0]} color='#d7ad84' />
          <Box position={[2, -1, 0]} color='#d7ad84' />
          <Box position={[3, -1, 0]} color='#d7ad84' />
          <Box position={[4, -1, 0]} color='#d7ad84' />
          <Box position={[5, -1, 0]} color='#d7ad84' />
          <Box position={[6, -1, 0]} color='#d7ad84' />
          <Box position={[7, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -2, 0]} color='#a51414' />
          <Box position={[-3, -2, 0]} color='#f24949' />
          <Box position={[-2, -2, 0]} color='#0e1a38' />
          <Box position={[-1, -2, 0]} color='#d7ad84' />
          <Box position={[0, -2, 0]} color='#d7ad84' />
          <Box position={[1, -2, 0]} color='#d7ad84' />
          <Box position={[2, -2, 0]} color='#d7ad84' />
          <Box position={[3, -2, 0]} color='#d7ad84' />
          <Box position={[4, -2, 0]} color='#d7ad84' />
          <Box position={[5, -2, 0]} color='#d7ad84' />
          <Box position={[6, -2, 0]} color='#d7ad84' />
          <Box position={[7, -2, 0]} color='#d7ad84' />
          <Box position={[8, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -3, 0]} color='#f24949' />
          <Box position={[-2, -3, 0]} color='#0e1a38' />
          <Box position={[-1, -3, 0]} color='#d7ad84' />
          <Box position={[0, -3, 0]} color='#d7ad84' />
          <Box position={[1, -3, 0]} color='#d7ad84' />
          <Box position={[2, -3, 0]} color='#d7ad84' />
          <Box position={[3, -3, 0]} color='#d7ad84' />
          <Box position={[4, -3, 0]} color='#d7ad84' />
          <Box position={[5, -3, 0]} color='#d7ad84' />
          <Box position={[6, -3, 0]} color='#d7ad84' />
          <Box position={[7, -3, 0]} color='#d7ad84' />
          <Box position={[8, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -4, 0]} color='#0e1a38' />
          <Box position={[-2, -4, 0]} color='#d7ad84' />
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
          <Box position={[-1, -5, 0]} color='#d7ad84' />
          <Box position={[0, -5, 0]} color='#d7ad84' />
          <Box position={[1, -5, 0]} color='#d7ad84' />
          <Box position={[2, -5, 0]} color='#d7ad84' />
          <Box position={[3, -5, 0]} color='#d7ad84' />
          <Box position={[4, -5, 0]} color='#d7ad84' />
          <Box position={[5, -5, 0]} color='#d7ad84' />
          <Box position={[6, -5, 0]} color='#0e1a38' />
          <Box position={[-4, -6, 0]} color='#0e1a38' />
          <Box position={[-3, -6, 0]} color='#a51414' />
          <Box position={[-2, -6, 0]} color='#f24949' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />
          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#a51414' />
          <Box position={[-3, -7, 0]} color='#f24949' />
          <Box position={[-2, -7, 0]} color='#f24949' />
          <Box position={[-1, -7, 0]} color='#f24949' />
          <Box position={[0, -7, 0]} color='#f24949' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#f24949' />
          <Box position={[3, -7, 0]} color='#f24949' />
          <Box position={[4, -7, 0]} color='#0e1a38' />
          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#a51414' />
          <Box position={[-4, -8, 0]} color='#f24949' />
          <Box position={[-3, -8, 0]} color='#f24949' />
          <Box position={[-2, -8, 0]} color='#f24949' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#f24949' />
          <Box position={[1, -8, 0]} color='#f24949' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#f24949' />
          <Box position={[4, -8, 0]} color='#f24949' />
          <Box position={[5, -8, 0]} color='#0e1a38' />
          <Box position={[6, -8, 0]} color='#0e1a38' />
          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#a51414' />
          <Box position={[-5, -9, 0]} color='#f24949' />
          <Box position={[-4, -9, 0]} color='#f24949' />
          <Box position={[-3, -9, 0]} color='#f24949' />
          <Box position={[-2, -9, 0]} color='#f24949' /> 
          <Box position={[-1, -9, 0]} color='#f24949' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#f24949' />
          <Box position={[2, -9, 0]} color='#f24949' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#f24949' />
          <Box position={[5, -9, 0]} color='#f24949' />
          <Box position={[6, -9, 0]} color='#f24949' />
          <Box position={[7, -9, 0]} color='#0e1a38' />
          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#a51414' />
          <Box position={[-6, -10, 0]} color='#f24949' />
          <Box position={[-5, -10, 0]} color='#f24949' />
          <Box position={[-4, -10, 0]} color='#f24949' />
          <Box position={[-3, -10, 0]} color='#f24949' /> 
          <Box position={[-2, -10, 0]} color='#f24949' /> 
          <Box position={[-1, -10, 0]} color='#f24949' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#f24949' />
          <Box position={[2, -10, 0]} color='#f24949' />
          <Box position={[3, -10, 0]} color='#f24949' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#f24949' />
          <Box position={[6, -10, 0]} color='#f24949' />
          <Box position={[7, -10, 0]} color='#f24949' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
          </>
          )
        }
        if (x == 'Purple') {
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
          <Box position={[-3, 4, 0]} color='#502370' />
          <Box position={[-2, 4, 0]} color='#6c2987' />
          <Box position={[-1, 4, 0]} color='#6c2987' />
          <Box position={[0, 4, 0]} color='#6c2987' />
          <Box position={[1, 4, 0]} color='#6c2987' />
          <Box position={[2, 4, 0]} color='#6c2987' />
          <Box position={[3, 4, 0]} color='#6c2987' />
          <Box position={[4, 4, 0]} color='#0e1a38' />
          <Box position={[-5, 3, 0]} color='#0e1a38' />
          <Box position={[-4, 3, 0]} color='#502370' />
          <Box position={[-3, 3, 0]} color='#6c2987' />
          <Box position={[-2, 3, 0]} color='#6c2987' />
          <Box position={[-1, 3, 0]} color='#6c2987' />
          <Box position={[0, 3, 0]} color='#d7ad84' />
          <Box position={[1, 3, 0]} color='#d7ad84' />
          <Box position={[2, 3, 0]} color='#6c2987' />
          <Box position={[3, 3, 0]} color='#6c2987' />
          <Box position={[4, 3, 0]} color='#d7ad84' />
          <Box position={[5, 3, 0]} color='#0e1a38' />
          <Box position={[-6, 2, 0]} color='#0e1a38' />
          <Box position={[-5, 2, 0]} color='#502370' />
          <Box position={[-4, 2, 0]} color='#6c2987' />
          <Box position={[-3, 2, 0]} color='#6c2987' />
          <Box position={[-2, 2, 0]} color='#6c2987' />
          <Box position={[-1, 2, 0]} color='#d7ad84' />
          <Box position={[0, 2, 0]} color='#d7ad84' />
          <Box position={[1, 2, 0]} color='#d7ad84' />
          <Box position={[2, 2, 0]} color='#d7ad84' />
          <Box position={[3, 2, 0]} color='#d7ad84' />
          <Box position={[4, 2, 0]} color='#d7ad84' />
          <Box position={[5, 2, 0]} color='#d7ad84' />
          <Box position={[6, 2, 0]} color='#0e1a38' />
          <Box position={[-6, 1, 0]} color='#0e1a38' />
          <Box position={[-5, 1, 0]} color='#502370' />
          <Box position={[-4, 1, 0]} color='#6c2987' />
          <Box position={[-3, 1, 0]} color='#6c2987' />
          <Box position={[-2, 1, 0]} color='#d7ad84' />
          <Box position={[-1, 1, 0]} color='#d7ad84' />
          <Box position={[0, 1, 0]} color='#d7ad84' />
          <Box position={[1, 1, 0]} color='#0e1a38' />
          <Box position={[2, 1, 0]} color='#d7ad84' />
          <Box position={[3, 1, 0]} color='#d7ad84' />
          <Box position={[4, 1, 0]} color='#0e1a38' />
          <Box position={[5, 1, 0]} color='#d7ad84' />
          <Box position={[6, 1, 0]} color='#0e1a38' />
          <Box position={[-6, 0, 0]} color='#0e1a38' />
          <Box position={[-5, 0, 0]} color='#502370' />
          <Box position={[-4, 0, 0]} color='#0e1a38' />
          <Box position={[-3, 0, 0]} color='#6c2987' />
          <Box position={[-2, 0, 0]} color='#d7ad84' />
          <Box position={[-1, 0, 0]} color='#d7ad84' />
          <Box position={[0, 0, 0]} color='#d7ad84' />
          <Box position={[1, 0, 0]} color='#0e1a38' />
          <Box position={[2, 0, 0]} color='#d7ad84' />
          <Box position={[3, 0, 0]} color='#d7ad84' />
          <Box position={[4, 0, 0]} color='#0e1a38' />
          <Box position={[5, 0, 0]} color='#d7ad84' />
          <Box position={[6, 0, 0]} color='#0e1a38' />
          <Box position={[-6, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -1, 0]} color='#502370' />
          <Box position={[-4, -1, 0]} color='#0e1a38' />
          <Box position={[-3, -1, 0]} color='#6c2987' />
          <Box position={[-2, -1, 0]} color='#d7ad84' />
          <Box position={[-1, -1, 0]} color='#0e1a38' />
          <Box position={[0, -1, 0]} color='#d7ad84' />
          <Box position={[1, -1, 0]} color='#d7ad84' />
          <Box position={[2, -1, 0]} color='#d7ad84' />
          <Box position={[3, -1, 0]} color='#d7ad84' />
          <Box position={[4, -1, 0]} color='#d7ad84' />
          <Box position={[5, -1, 0]} color='#d7ad84' />
          <Box position={[6, -1, 0]} color='#d7ad84' />
          <Box position={[7, -1, 0]} color='#0e1a38' />
          <Box position={[-5, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -2, 0]} color='#502370' />
          <Box position={[-3, -2, 0]} color='#6c2987' />
          <Box position={[-2, -2, 0]} color='#0e1a38' />
          <Box position={[-1, -2, 0]} color='#d7ad84' />
          <Box position={[0, -2, 0]} color='#d7ad84' />
          <Box position={[1, -2, 0]} color='#d7ad84' />
          <Box position={[2, -2, 0]} color='#d7ad84' />
          <Box position={[3, -2, 0]} color='#d7ad84' />
          <Box position={[4, -2, 0]} color='#d7ad84' />
          <Box position={[5, -2, 0]} color='#d7ad84' />
          <Box position={[6, -2, 0]} color='#d7ad84' />
          <Box position={[7, -2, 0]} color='#d7ad84' />
          <Box position={[8, -2, 0]} color='#0e1a38' />
          <Box position={[-4, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -3, 0]} color='#6c2987' />
          <Box position={[-2, -3, 0]} color='#0e1a38' />
          <Box position={[-1, -3, 0]} color='#d7ad84' />
          <Box position={[0, -3, 0]} color='#d7ad84' />
          <Box position={[1, -3, 0]} color='#d7ad84' />
          <Box position={[2, -3, 0]} color='#d7ad84' />
          <Box position={[3, -3, 0]} color='#d7ad84' />
          <Box position={[4, -3, 0]} color='#d7ad84' />
          <Box position={[5, -3, 0]} color='#d7ad84' />
          <Box position={[6, -3, 0]} color='#d7ad84' />
          <Box position={[7, -3, 0]} color='#d7ad84' />
          <Box position={[8, -3, 0]} color='#0e1a38' />
          <Box position={[-3, -4, 0]} color='#0e1a38' />
          <Box position={[-2, -4, 0]} color='#d7ad84' />
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
          <Box position={[-1, -5, 0]} color='#d7ad84' />
          <Box position={[0, -5, 0]} color='#d7ad84' />
          <Box position={[1, -5, 0]} color='#d7ad84' />
          <Box position={[2, -5, 0]} color='#d7ad84' />
          <Box position={[3, -5, 0]} color='#d7ad84' />
          <Box position={[4, -5, 0]} color='#d7ad84' />
          <Box position={[5, -5, 0]} color='#d7ad84' />
          <Box position={[6, -5, 0]} color='#0e1a38' />
          <Box position={[-4, -6, 0]} color='#0e1a38' />
          <Box position={[-3, -6, 0]} color='#502370' />
          <Box position={[-2, -6, 0]} color='#6c2987' />
          <Box position={[-1, -6, 0]} color='#0e1a38' />
          <Box position={[0, -6, 0]} color='#0e1a38' />
          <Box position={[1, -6, 0]} color='#0e1a38' />
          <Box position={[2, -6, 0]} color='#0e1a38' />
          <Box position={[3, -6, 0]} color='#0e1a38' />
          <Box position={[4, -6, 0]} color='#0e1a38' />
          <Box position={[5, -6, 0]} color='#0e1a38' />
          <Box position={[-5, -7, 0]} color='#0e1a38' />
          <Box position={[-4, -7, 0]} color='#502370' />
          <Box position={[-3, -7, 0]} color='#6c2987' />
          <Box position={[-2, -7, 0]} color='#6c2987' />
          <Box position={[-1, -7, 0]} color='#6c2987' />
          <Box position={[0, -7, 0]} color='#6c2987' />
          <Box position={[1, -7, 0]} color='#0e1a38' />
          <Box position={[2, -7, 0]} color='#6c2987' />
          <Box position={[3, -7, 0]} color='#6c2987' />
          <Box position={[4, -7, 0]} color='#0e1a38' />
          <Box position={[-6, -8, 0]} color='#0e1a38' />
          <Box position={[-5, -8, 0]} color='#502370' />
          <Box position={[-4, -8, 0]} color='#6c2987' />
          <Box position={[-3, -8, 0]} color='#6c2987' />
          <Box position={[-2, -8, 0]} color='#6c2987' />
          <Box position={[-1, -8, 0]} color='#0e1a38' />
          <Box position={[0, -8, 0]} color='#6c2987' />
          <Box position={[1, -8, 0]} color='#6c2987' />
          <Box position={[2, -8, 0]} color='#0e1a38' />
          <Box position={[3, -8, 0]} color='#6c2987' />
          <Box position={[4, -8, 0]} color='#6c2987' />
          <Box position={[5, -8, 0]} color='#0e1a38' />
          <Box position={[6, -8, 0]} color='#0e1a38' />
          <Box position={[-7, -9, 0]} color='#0e1a38' />
          <Box position={[-6, -9, 0]} color='#502370' />
          <Box position={[-5, -9, 0]} color='#6c2987' />
          <Box position={[-4, -9, 0]} color='#6c2987' />
          <Box position={[-3, -9, 0]} color='#6c2987' />
          <Box position={[-2, -9, 0]} color='#6c2987' /> 
          <Box position={[-1, -9, 0]} color='#6c2987' /> 
          <Box position={[0, -9, 0]} color='#0e1a38' />
          <Box position={[1, -9, 0]} color='#6c2987' />
          <Box position={[2, -9, 0]} color='#6c2987' />
          <Box position={[3, -9, 0]} color='#0e1a38' />
          <Box position={[4, -9, 0]} color='#6c2987' />
          <Box position={[5, -9, 0]} color='#6c2987' />
          <Box position={[6, -9, 0]} color='#6c2987' />
          <Box position={[7, -9, 0]} color='#0e1a38' />
          <Box position={[-8, -10, 0]} color='#0e1a38' />
          <Box position={[-7, -10, 0]} color='#502370' />
          <Box position={[-6, -10, 0]} color='#6c2987' />
          <Box position={[-5, -10, 0]} color='#6c2987' />
          <Box position={[-4, -10, 0]} color='#6c2987' />
          <Box position={[-3, -10, 0]} color='#6c2987' /> 
          <Box position={[-2, -10, 0]} color='#6c2987' /> 
          <Box position={[-1, -10, 0]} color='#6c2987' /> 
          <Box position={[0, -10, 0]} color='#0e1a38' />
          <Box position={[1, -10, 0]} color='#6c2987' />
          <Box position={[2, -10, 0]} color='#6c2987' />
          <Box position={[3, -10, 0]} color='#6c2987' />
          <Box position={[4, -10, 0]} color='#0e1a38' />
          <Box position={[5, -10, 0]} color='#6c2987' />
          <Box position={[6, -10, 0]} color='#6c2987' />
          <Box position={[7, -10, 0]} color='#6c2987' />
          <Box position={[8, -10, 0]} color='#0e1a38' />
          </>
          )
        }
  }
  return (
    <>
    {generateType()} 
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
        <Box position={[-4, -1, 0]} color='#0e1a38' />
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

    return (
      <>
      {generateTemp()}
      </>
    )
}