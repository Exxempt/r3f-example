"use client"

//import { none, silverEarring, goldEarring } from "@/components/monke/ears";
import { useConfigurator } from "../contexts/Configurator";
import * as React from 'react'
import { useState } from "react";
import { Box } from '@/components/box'

export function  MonkeEars() {
  const {selectedEarsOption} = useConfigurator();


const [color, setColor] = useState<string>("#f2d55e");
 // const [save, setSave] = useState<string>("");

/**
  const checkEars = () => {
    setSave(selectedEarsOption);
    if (selectedEarsOption == "None") {
        //none
        setColor('#0f1a38')
    }
    else if (selectedEarsOption == "Silver Earring") {
        //silverEarring
        setColor('#c5cfcb')
    }
    else if (selectedEarsOption == "Gold Earring") {
        //goldEarring
        setColor('#f2d55e')
      }
      console.log(color)
  }
  save !== selectedEarsOption ? checkEars() : null
*/
  return (
    <>
    <Box position={[-15, -15, 8]} color={color} />
    </>
  )

}