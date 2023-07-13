"use client"

import * as React from 'react'
import { Box } from '@/components/box'
import { useConfigurator } from "../../contexts/Configurator";

export default function Test() {
  const { selectedEarsOption } = useConfigurator();
  //console.log(selectedEarsOption)
      return (
        <>
            <Box position={[-13, -13, 6]} color='#0e1a38' />
        </>
      )
}