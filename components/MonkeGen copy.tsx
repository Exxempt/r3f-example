"use client"

//import { none, silverEarring, goldEarring } from "@/components/monke/ears";
import { useConfigurator } from "../contexts/Configurator";
import * as React from 'react'
import { useState, FC } from "react";
import { Box } from '@/components/box'
import { traits } from "@/lib/traits"

interface Props {
  x: string;
}

export const MonkeEars: FC<Props> = ({ x }) => {
//export default function MonkeEars(x?: string) {
const {selectedEarsOption} = useConfigurator();
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

const getEars = () => {
  return traits.filter(item => item.trait_type == "Ears")
}

const value = getEars()
const larp = value.filter(item => item.value == selectedEarsOption)
//console.log(larp[0].value)

/*
const [save, setSave] = useState<string>("None");

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
    <Box position={[-4, -1, 0]} color={color} />
    </>
  )
}

