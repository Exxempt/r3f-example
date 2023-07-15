"use client";

import * as React from "react";
import { FC } from "react";
import { Box } from "@/components/box";

interface Props {
  x: string;
}

export const MonkeClothes: FC<Props> = ({ x }) => {
  const generateClothes = () => {
    if (x == "Beige Smoking") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Orange Kimono") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Orange Shirt") {
      return (
        <>
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
      );
    }
    if (x == "Green Jacket") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Biker Vest") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Cop Vest") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Orange Jacket") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Black Smoking") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "White Shirt") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Military Vest") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Poncho") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Sailor Vest") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Black Kimono") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Green Shirt") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Brown Jacket") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Purple Shirt") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Green Smoking") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Pirate Vest") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Blue Shirt") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "None") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Roman Armor") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Red Shirt") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
  };
  return <>{generateClothes()}</>;
};

export const MonkeEars: FC<Props> = ({ x }) => {
  const generateEars = () => {
    if (x == "None") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Silver Earring") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Gold Earring") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#f2d55e" />
        </>
      );
    }
  };
  return <>{generateEars()}</>;
};

export const MonkeHat: FC<Props> = ({ x }) => {
  const generateHat = () => {
    if (x == "Black Backwards Cap") {
      return (
        <>
          <Box position={[-3, 8, 0]} color="#0e1938" />
          <Box position={[-2, 8, 0]} color="#0e1938" />
          <Box position={[-1, 8, 0]} color="#0e1938" />
          <Box position={[0, 8, 0]} color="#0e1938" />
          <Box position={[1, 8, 0]} color="#0e1938" />
          <Box position={[2, 8, 0]} color="#0e1938" />
          <Box position={[3, 8, 0]} color="#0e1938" />
        </>
      );
    }
    if (x == "White Fedora 2") {
      return (
        <>
          <Box position={[-3, 9, 0]} color="#0e1a38" />
          <Box position={[-2, 9, 0]} color="#0e1a38" />
          <Box position={[-1, 9, 0]} color="#0e1a38" />
          <Box position={[0, 9, 0]} color="#0e1a38" />
          <Box position={[1, 9, 0]} color="#0e1a38" />
          <Box position={[3, 9, 0]} color="#0e1a38" />

          <Box position={[-4, 8, 0]} color="#0e1a38" />
          <Box position={[-3, 8, 0]} color="#c18961" />
          <Box position={[-2, 8, 0]} color="#e7d1a6" />
          <Box position={[-1, 8, 0]} color="#e7d1a6" />
          <Box position={[0, 8, 0]} color="#e7d1a6" />
          <Box position={[1, 8, 0]} color="#e7d1a6" />
          <Box position={[2, 8, 0]} color="#0e1a38" />
          <Box position={[3, 8, 0]} color="#e7d1a6" />
          <Box position={[4, 8, 0]} color="#0e1a38" />

          <Box position={[-5, 7, 0]} color="#0e1a38" />
          <Box position={[-4, 7, 0]} color="#c18961" />
          <Box position={[-3, 7, 0]} color="#e7d1a6" />
          <Box position={[-2, 7, 0]} color="#e7d1a6" />
          <Box position={[-1, 7, 0]} color="#e7d1a6" />
          <Box position={[0, 7, 0]} color="#e7d1a6" />
          <Box position={[1, 7, 0]} color="#e7d1a6" />
          <Box position={[2, 7, 0]} color="#e7d1a6" />
          <Box position={[3, 7, 0]} color="#e7d1a6" />
          <Box position={[4, 7, 0]} color="#e7d1a6" />
          <Box position={[5, 7, 0]} color="#0e1a38" />

          <Box position={[-5, 6, 0]} color="#0e1a38" />
          <Box position={[-4, 6, 0]} color="#1a2c38" />
          <Box position={[-3, 6, 0]} color="#1a2c38" />
          <Box position={[-2, 6, 0]} color="#1a2c38" />
          <Box position={[-1, 6, 0]} color="#1a2c38" />
          <Box position={[0, 6, 0]} color="#1a2c38" />
          <Box position={[1, 6, 0]} color="#1a2c38" />
          <Box position={[2, 6, 0]} color="#1a2c38" />
          <Box position={[3, 6, 0]} color="#1a2c38" />
          <Box position={[4, 6, 0]} color="#1a2c38" />
          <Box position={[5, 6, 0]} color="#0e1a38" />
          <Box position={[8, 6, 0]} color="#0e1a38" />

          <Box position={[-8, 5, 0]} color="#0e1a38" />
          <Box position={[-7, 5, 0]} color="#0e1a38" />
          <Box position={[-6, 5, 0]} color="#0e1a38" />
          <Box position={[-5, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 5, 0]} color="#1a2c38" />
          <Box position={[-3, 5, 0]} color="#1a2c38" />
          <Box position={[-2, 5, 0]} color="#1a2c38" />
          <Box position={[-1, 5, 0]} color="#1a2c38" />
          <Box position={[0, 5, 0]} color="#1a2c38" />
          <Box position={[1, 5, 0]} color="#1a2c38" />
          <Box position={[2, 5, 0]} color="#1a2c38" />
          <Box position={[3, 5, 0]} color="#1a2c38" />
          <Box position={[4, 5, 0]} color="#1a2c38" />
          <Box position={[5, 5, 0]} color="#0e1a38" />
          <Box position={[6, 5, 0]} color="#0e1a38" />
          <Box position={[7, 5, 0]} color="#0e1a38" />
          <Box position={[8, 5, 0]} color="#e7d1a6" />
          <Box position={[9, 5, 0]} color="#0e1a38" />

          <Box position={[-8, 4, 0]} color="#0e1a38" />
          <Box position={[-7, 4, 0]} color="#c18961" />
          <Box position={[-6, 4, 0]} color="#e7d1a6" />
          <Box position={[-5, 4, 0]} color="#e7d1a6" />
          <Box position={[-4, 4, 0]} color="#e7d1a6" />
          <Box position={[-3, 4, 0]} color="#e7d1a6" />
          <Box position={[-2, 4, 0]} color="#e7d1a6" />
          <Box position={[-1, 4, 0]} color="#e7d1a6" />
          <Box position={[0, 4, 0]} color="#e7d1a6" />
          <Box position={[1, 4, 0]} color="#e7d1a6" />
          <Box position={[2, 4, 0]} color="#e7d1a6" />
          <Box position={[3, 4, 0]} color="#e7d1a6" />
          <Box position={[4, 4, 0]} color="#e7d1a6" />
          <Box position={[5, 4, 0]} color="#e7d1a6" />
          <Box position={[6, 4, 0]} color="#e7d1a6" />
          <Box position={[7, 4, 0]} color="#e7d1a6" />
          <Box position={[8, 4, 0]} color="#0e1a38" />

          <Box position={[-7, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 3, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#0e1a38" />
          <Box position={[-3, 3, 0]} color="#0e1a38" />
          <Box position={[-2, 3, 0]} color="#0e1a38" />
          <Box position={[-1, 3, 0]} color="#0e1a38" />
          <Box position={[0, 3, 0]} color="#0e1a38" />
          <Box position={[1, 3, 0]} color="#0e1a38" />
          <Box position={[2, 3, 0]} color="#0e1a38" />
          <Box position={[3, 3, 0]} color="#0e1a38" />
          <Box position={[4, 3, 0]} color="#0e1a38" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[6, 3, 0]} color="#0e1a38" />
          <Box position={[7, 3, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Black Cap") {
      return (
        <>
          <Box position={[-3, 8, 0]} color="#0e1938" />
          <Box position={[-2, 8, 0]} color="#0e1938" />
          <Box position={[-1, 8, 0]} color="#0e1938" />
          <Box position={[0, 8, 0]} color="#0e1938" />
          <Box position={[1, 8, 0]} color="#0e1938" />
          <Box position={[2, 8, 0]} color="#0e1938" />
          <Box position={[3, 8, 0]} color="#0e1938" />

          <Box position={[-4, 7, 0]} color="#0e1938" />
          <Box position={[-3, 7, 0]} color="#1a2b37" />
          <Box position={[-2, 7, 0]} color="#334951" />
          <Box position={[-1, 7, 0]} color="#334951" />
          <Box position={[0, 7, 0]} color="#334951" />
          <Box position={[1, 7, 0]} color="#334951" />
          <Box position={[2, 7, 0]} color="#eceeea" />
          <Box position={[3, 7, 0]} color="#eceeea" />
          <Box position={[4, 7, 0]} color="#0e1938" />

          <Box position={[-5, 6, 0]} color="#0e1938" />
          <Box position={[-4, 6, 0]} color="#1a2b37" />
          <Box position={[-3, 6, 0]} color="#334951" />
          <Box position={[-2, 6, 0]} color="#334951" />
          <Box position={[-1, 6, 0]} color="#334951" />
          <Box position={[0, 6, 0]} color="#334951" />
          <Box position={[1, 6, 0]} color="#eceeea" />
          <Box position={[2, 6, 0]} color="#7c9796" />
          <Box position={[3, 6, 0]} color="#eceeea" />
          <Box position={[4, 6, 0]} color="#eceeea" />
          <Box position={[5, 6, 0]} color="#0e1938" />

          <Box position={[-6, 5, 0]} color="#0e1938" />
          <Box position={[-5, 5, 0]} color="#1a2b37" />
          <Box position={[-4, 5, 0]} color="#334951" />
          <Box position={[-3, 5, 0]} color="#334951" />
          <Box position={[-2, 5, 0]} color="#334951" />
          <Box position={[-1, 5, 0]} color="#334951" />
          <Box position={[0, 5, 0]} color="#eceeea" />
          <Box position={[1, 5, 0]} color="#7c9796" />
          <Box position={[2, 5, 0]} color="#eceeea" />
          <Box position={[3, 5, 0]} color="#eceeea" />
          <Box position={[4, 5, 0]} color="#eceeea" />
          <Box position={[5, 5, 0]} color="#eceeea" />
          <Box position={[6, 5, 0]} color="#0e1938" />

          <Box position={[-6, 4, 0]} color="#0e1938" />
          <Box position={[-5, 4, 0]} color="#334951" />
          <Box position={[-4, 4, 0]} color="#334951" />
          <Box position={[-3, 4, 0]} color="#334951" />
          <Box position={[-2, 4, 0]} color="#334951" />
          <Box position={[-1, 4, 0]} color="#334951" />
          <Box position={[0, 4, 0]} color="#eceeea" />
          <Box position={[1, 4, 0]} color="#eceeea" />
          <Box position={[2, 4, 0]} color="#7c9796" />
          <Box position={[3, 4, 0]} color="#7c9796" />
          <Box position={[4, 4, 0]} color="#7c9796" />
          <Box position={[5, 4, 0]} color="#7c9796" />
          <Box position={[6, 4, 0]} color="#0e1938" />
          <Box position={[7, 4, 0]} color="#0e1938" />
          <Box position={[8, 4, 0]} color="#0e1938" />

          <Box position={[-6, 3, 0]} color="#0e1938" />
          <Box position={[-5, 3, 0]} color="#334951" />
          <Box position={[-4, 3, 0]} color="#334951" />
          <Box position={[-3, 3, 0]} color="#334951" />
          <Box position={[-2, 3, 0]} color="#334951" />
          <Box position={[-1, 3, 0]} color="#334951" />
          <Box position={[0, 3, 0]} color="#eceeea" />
          <Box position={[1, 3, 0]} color="#eceeea" />
          <Box position={[2, 3, 0]} color="#eceeea" />
          <Box position={[3, 3, 0]} color="#eceeea" />
          <Box position={[4, 3, 0]} color="#eceeea" />
          <Box position={[5, 3, 0]} color="#eceeea" />
          <Box position={[6, 3, 0]} color="#334951" />
          <Box position={[7, 3, 0]} color="#334951" />
          <Box position={[8, 3, 0]} color="#334951" />
          <Box position={[9, 3, 0]} color="#0e1938" />

          <Box position={[-6, 2, 0]} color="#0e1938" />
          <Box position={[-5, 2, 0]} color="#0e1938" />
          <Box position={[-4, 2, 0]} color="#0e1938" />
          <Box position={[-3, 2, 0]} color="#0e1938" />
          <Box position={[-2, 2, 0]} color="#0e1938" />
          <Box position={[-1, 2, 0]} color="#0e1938" />
          <Box position={[0, 2, 0]} color="#0e1938" />
          <Box position={[1, 2, 0]} color="#0e1938" />
          <Box position={[2, 2, 0]} color="#0e1938" />
          <Box position={[3, 2, 0]} color="#0e1938" />
          <Box position={[4, 2, 0]} color="#0e1938" />
          <Box position={[5, 2, 0]} color="#0e1938" />
          <Box position={[6, 2, 0]} color="#0e1938" />
          <Box position={[7, 2, 0]} color="#0e1938" />
          <Box position={[8, 2, 0]} color="#0e1938" />
          <Box position={[9, 2, 0]} color="#0e1938" />
        </>
      );
    }
    if (x == "None") {
      return (
        <>
        </>
      );
    }
    if (x == "Horns") {
      return (
        <>
          <Box position={[-6, 10, 0]} color="#0e1938" />
          <Box position={[7, 10, 0]} color="#0e1938" />
          <Box position={[-7, 9, 0]} color="#0e1938" />
          <Box position={[-6, 9, 0]} color="#f24949" />
          <Box position={[7, 9, 0]} color="#f24949" />
          <Box position={[8, 9, 0]} color="#0e1938" />
          <Box position={[-7, 8, 0]} color="#0e1938" />
          <Box position={[-6, 8, 0]} color="#f24949" />
          <Box position={[7, 8, 0]} color="#f24949" />
          <Box position={[8, 8, 0]} color="#0e1938" />
          <Box position={[-7, 7, 0]} color="#0e1938" />
          <Box position={[-6, 7, 0]} color="#a41314" />
          <Box position={[-5, 7, 0]} color="#f24949" />
          <Box position={[6, 7, 0]} color="#f24949" />
          <Box position={[7, 7, 0]} color="#a41314" />
          <Box position={[8, 7, 0]} color="#0e1938" />
          <Box position={[-7, 6, 0]} color="#0e1938" />
          <Box position={[-6, 6, 0]} color="#a41314" />
          <Box position={[-5, 6, 0]} color="#a41314" />
          <Box position={[-4, 6, 0]} color="#751129" />
          <Box position={[5, 6, 0]} color="#751129" />
          <Box position={[6, 6, 0]} color="#a41314" />
          <Box position={[7, 6, 0]} color="#a41314" />
          <Box position={[8, 6, 0]} color="#0e1938" />
          <Box position={[-6, 5, 0]} color="#0e1938" />
          <Box position={[-5, 5, 0]} color="#a41314" />
          <Box position={[-4, 5, 0]} color="#751129" />
          <Box position={[-3, 5, 0]} color="#751129" />
          <Box position={[4, 5, 0]} color="#751129" />
          <Box position={[5, 5, 0]} color="#751129" />
          <Box position={[6, 5, 0]} color="#a41314" />
          <Box position={[7, 5, 0]} color="#0e1938" />
          <Box position={[-5, 4, 0]} color="#0e1938" />
          <Box position={[-4, 4, 0]} color="#751129" />
          <Box position={[-3, 4, 0]} color="#0e1938" />
          <Box position={[4, 4, 0]} color="#0e1938" />
          <Box position={[5, 4, 0]} color="#751129" />
          <Box position={[6, 4, 0]} color="#0e1938" />
          <Box position={[-4, 3, 0]} color="#0e1938" />
          <Box position={[5, 3, 0]} color="#0e1938" />
        </>
      );
    }
    if (x == "Pirate Bandana") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Blue Cap") {
      return (
        <>
          <Box position={[-3, 8, 0]} color="#0e1938" />
          <Box position={[-2, 8, 0]} color="#0e1938" />
          <Box position={[-1, 8, 0]} color="#0e1938" />
          <Box position={[0, 8, 0]} color="#0e1938" />
          <Box position={[1, 8, 0]} color="#0e1938" />
          <Box position={[2, 8, 0]} color="#0e1938" />
          <Box position={[3, 8, 0]} color="#0e1938" />
          <Box position={[-4, 7, 0]} color="#0e1938" />
          <Box position={[-3, 7, 0]} color="#29528b" />
          <Box position={[-2, 7, 0]} color="#3585ba" />
          <Box position={[-1, 7, 0]} color="#3585ba" />
          <Box position={[0, 7, 0]} color="#3585ba" />
          <Box position={[1, 7, 0]} color="#3585ba" />
          <Box position={[2, 7, 0]} color="#eceeea" />
          <Box position={[3, 7, 0]} color="#eceeea" />
          <Box position={[4, 7, 0]} color="#0e1938" />
          <Box position={[-5, 6, 0]} color="#0e1938" />
          <Box position={[-4, 6, 0]} color="#29528b" />
          <Box position={[-3, 6, 0]} color="#3585ba" />
          <Box position={[-2, 6, 0]} color="#3585ba" />
          <Box position={[-1, 6, 0]} color="#3585ba" />
          <Box position={[0, 6, 0]} color="#3585ba" />
          <Box position={[1, 6, 0]} color="#eceeea" />
          <Box position={[2, 6, 0]} color="#7c9796" />
          <Box position={[3, 6, 0]} color="#eceeea" />
          <Box position={[4, 6, 0]} color="#eceeea" />
          <Box position={[5, 6, 0]} color="#0e1938" />
          <Box position={[-6, 5, 0]} color="#0e1938" />
          <Box position={[-5, 5, 0]} color="#29528b" />
          <Box position={[-4, 5, 0]} color="#3585ba" />
          <Box position={[-3, 5, 0]} color="#3585ba" />
          <Box position={[-2, 5, 0]} color="#3585ba" />
          <Box position={[-1, 5, 0]} color="#3585ba" />
          <Box position={[0, 5, 0]} color="#eceeea" />
          <Box position={[1, 5, 0]} color="#7c9796" />
          <Box position={[2, 5, 0]} color="#eceeea" />
          <Box position={[3, 5, 0]} color="#eceeea" />
          <Box position={[4, 5, 0]} color="#eceeea" />
          <Box position={[5, 5, 0]} color="#eceeea" />
          <Box position={[6, 5, 0]} color="#0e1938" />
          <Box position={[-6, 4, 0]} color="#0e1938" />
          <Box position={[-5, 4, 0]} color="#3585ba" />
          <Box position={[-4, 4, 0]} color="#3585ba" />
          <Box position={[-3, 4, 0]} color="#3585ba" />
          <Box position={[-2, 4, 0]} color="#3585ba" />
          <Box position={[-1, 4, 0]} color="#3585ba" />
          <Box position={[0, 4, 0]} color="#eceeea" />
          <Box position={[1, 4, 0]} color="#eceeea" />
          <Box position={[2, 4, 0]} color="#7c9796" />
          <Box position={[3, 4, 0]} color="#7c9796" />
          <Box position={[4, 4, 0]} color="#7c9796" />
          <Box position={[5, 4, 0]} color="#7c9796" />
          <Box position={[6, 4, 0]} color="#0e1938" />
          <Box position={[7, 4, 0]} color="#0e1938" />
          <Box position={[8, 4, 0]} color="#0e1938" />
          <Box position={[-6, 3, 0]} color="#0e1938" />
          <Box position={[-5, 3, 0]} color="#3585ba" />
          <Box position={[-4, 3, 0]} color="#3585ba" />
          <Box position={[-3, 3, 0]} color="#3585ba" />
          <Box position={[-2, 3, 0]} color="#3585ba" />
          <Box position={[-1, 3, 0]} color="#3585ba" />
          <Box position={[0, 3, 0]} color="#eceeea" />
          <Box position={[1, 3, 0]} color="#eceeea" />
          <Box position={[2, 3, 0]} color="#eceeea" />
          <Box position={[3, 3, 0]} color="#eceeea" />
          <Box position={[4, 3, 0]} color="#eceeea" />
          <Box position={[5, 3, 0]} color="#eceeea" />
          <Box position={[6, 3, 0]} color="#95dddb" />
          <Box position={[7, 3, 0]} color="#95dddb" />
          <Box position={[8, 3, 0]} color="#95dddb" />
          <Box position={[9, 3, 0]} color="#0e1938" />
          <Box position={[-6, 2, 0]} color="#0e1938" />
          <Box position={[-5, 2, 0]} color="#0e1938" />
          <Box position={[-4, 2, 0]} color="#0e1938" />
          <Box position={[-3, 2, 0]} color="#0e1938" />
          <Box position={[-2, 2, 0]} color="#0e1938" />
          <Box position={[-1, 2, 0]} color="#0e1938" />
          <Box position={[0, 2, 0]} color="#0e1938" />
          <Box position={[1, 2, 0]} color="#0e1938" />
          <Box position={[2, 2, 0]} color="#0e1938" />
          <Box position={[3, 2, 0]} color="#0e1938" />
          <Box position={[4, 2, 0]} color="#0e1938" />
          <Box position={[5, 2, 0]} color="#0e1938" />
          <Box position={[6, 2, 0]} color="#0e1938" />
          <Box position={[7, 2, 0]} color="#0e1938" />
          <Box position={[8, 2, 0]} color="#0e1938" />
          <Box position={[9, 2, 0]} color="#0e1938" />
        </>
      );
    }
    if (x == "White Headset") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Blue Backwards Cap") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Green Backwards Cap") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Thief Hat") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Ninja Bandana") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Red Punk Hair") {
      return (
        <>
          <Box position={[0, 5, 0]} color="#a51313" />
          <Box position={[1, 5, 0]} color="#a51313" />
          <Box position={[2, 5, 0]} color="#a51313" />
          <Box position={[-1, 6, 0]} color="#a51313" />
          <Box position={[0, 6, 0]} color="#a51313" />
          <Box position={[1, 6, 0]} color="#a51313" />
          <Box position={[2, 6, 0]} color="#a51313" />
          <Box position={[0, 7, 0]} color="#a51313" />
          <Box position={[1, 7, 0]} color="#a51313" />
          <Box position={[2, 7, 0]} color="#a51313" />
          <Box position={[1, 8, 0]} color="#a51313" />
          <Box position={[2, 8, 0]} color="#a51313" />
          <Box position={[2, 9, 0]} color="#a51313" />
        </>
      );
    }
    if (x == "Military Helmet") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "White Fedora 1") {
      return (
        <>
          <Box position={[-3, 9, 0]} color="#0e1a38" />
          <Box position={[-2, 9, 0]} color="#0e1a38" />
          <Box position={[-1, 9, 0]} color="#0e1a38" />
          <Box position={[0, 9, 0]} color="#0e1a38" />
          <Box position={[1, 9, 0]} color="#0e1a38" />
          <Box position={[2, 9, 0]} color="#0e1a38" />
          <Box position={[3, 9, 0]} color="#0e1a38" />

          <Box position={[-4, 8, 0]} color="#0e1a38" />
          <Box position={[-3, 8, 0]} color="#c18961" />
          <Box position={[-2, 8, 0]} color="#e7d1a6" />
          <Box position={[-1, 8, 0]} color="#e7d1a6" />
          <Box position={[0, 8, 0]} color="#e7d1a6" />
          <Box position={[1, 8, 0]} color="#e7d1a6" />
          <Box position={[2, 8, 0]} color="#e7d1a6" />
          <Box position={[3, 8, 0]} color="#e7d1a6" />
          <Box position={[4, 8, 0]} color="#0e1a38" />

          <Box position={[-5, 7, 0]} color="#0e1a38" />
          <Box position={[-4, 7, 0]} color="#c18961" />
          <Box position={[-3, 7, 0]} color="#e7d1a6" />
          <Box position={[-2, 7, 0]} color="#e7d1a6" />
          <Box position={[-1, 7, 0]} color="#e7d1a6" />
          <Box position={[0, 7, 0]} color="#e7d1a6" />
          <Box position={[1, 7, 0]} color="#e7d1a6" />
          <Box position={[2, 7, 0]} color="#e7d1a6" />
          <Box position={[3, 7, 0]} color="#e7d1a6" />
          <Box position={[4, 7, 0]} color="#e7d1a6" />
          <Box position={[5, 7, 0]} color="#0e1a38" />

          <Box position={[-5, 6, 0]} color="#0e1a38" />
          <Box position={[-4, 6, 0]} color="#1a2c38" />
          <Box position={[-3, 6, 0]} color="#1a2c38" />
          <Box position={[-2, 6, 0]} color="#1a2c38" />
          <Box position={[-1, 6, 0]} color="#1a2c38" />
          <Box position={[0, 6, 0]} color="#1a2c38" />
          <Box position={[1, 6, 0]} color="#1a2c38" />
          <Box position={[2, 6, 0]} color="#1a2c38" />
          <Box position={[3, 6, 0]} color="#1a2c38" />
          <Box position={[4, 6, 0]} color="#1a2c38" />
          <Box position={[5, 6, 0]} color="#0e1a38" />

          <Box position={[-8, 5, 0]} color="#0e1a38" />
          <Box position={[-7, 5, 0]} color="#0e1a38" />
          <Box position={[-6, 5, 0]} color="#0e1a38" />
          <Box position={[-5, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 5, 0]} color="#1a2c38" />
          <Box position={[-3, 5, 0]} color="#1a2c38" />
          <Box position={[-2, 5, 0]} color="#1a2c38" />
          <Box position={[-1, 5, 0]} color="#1a2c38" />
          <Box position={[0, 5, 0]} color="#1a2c38" />
          <Box position={[1, 5, 0]} color="#1a2c38" />
          <Box position={[2, 5, 0]} color="#1a2c38" />
          <Box position={[3, 5, 0]} color="#1a2c38" />
          <Box position={[4, 5, 0]} color="#1a2c38" />
          <Box position={[5, 5, 0]} color="#0e1a38" />
          <Box position={[6, 5, 0]} color="#0e1a38" />
          <Box position={[7, 5, 0]} color="#0e1a38" />
          <Box position={[8, 5, 0]} color="#0e1a38" />

          <Box position={[-8, 4, 0]} color="#0e1a38" />
          <Box position={[-7, 4, 0]} color="#c18961" />
          <Box position={[-6, 4, 0]} color="#e7d1a6" />
          <Box position={[-5, 4, 0]} color="#e7d1a6" />
          <Box position={[-4, 4, 0]} color="#e7d1a6" />
          <Box position={[-3, 4, 0]} color="#e7d1a6" />
          <Box position={[-2, 4, 0]} color="#e7d1a6" />
          <Box position={[-1, 4, 0]} color="#e7d1a6" />
          <Box position={[0, 4, 0]} color="#e7d1a6" />
          <Box position={[1, 4, 0]} color="#e7d1a6" />
          <Box position={[2, 4, 0]} color="#e7d1a6" />
          <Box position={[3, 4, 0]} color="#e7d1a6" />
          <Box position={[4, 4, 0]} color="#e7d1a6" />
          <Box position={[5, 4, 0]} color="#e7d1a6" />
          <Box position={[6, 4, 0]} color="#e7d1a6" />
          <Box position={[7, 4, 0]} color="#e7d1a6" />
          <Box position={[8, 4, 0]} color="#0e1a38" />

          <Box position={[-7, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 3, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#0e1a38" />
          <Box position={[-3, 3, 0]} color="#0e1a38" />
          <Box position={[-2, 3, 0]} color="#0e1a38" />
          <Box position={[-1, 3, 0]} color="#0e1a38" />
          <Box position={[0, 3, 0]} color="#0e1a38" />
          <Box position={[1, 3, 0]} color="#0e1a38" />
          <Box position={[2, 3, 0]} color="#0e1a38" />
          <Box position={[3, 3, 0]} color="#0e1a38" />
          <Box position={[4, 3, 0]} color="#0e1a38" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[6, 3, 0]} color="#0e1a38" />
          <Box position={[7, 3, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Admiral Hat") {
      return (
        <>
          <Box position={[-1, 10, 0]} color="#0e1938" />
          <Box position={[0, 10, 0]} color="#0e1938" />
          <Box position={[1, 10, 0]} color="#0e1938" />
          <Box position={[2, 10, 0]} color="#0e1938" />
          <Box position={[3, 10, 0]} color="#0e1938" />
          <Box position={[4, 10, 0]} color="#0e1938" />

          <Box position={[-3, 9, 0]} color="#0e1938" />
          <Box position={[-2, 9, 0]} color="#0e1938" />
          <Box position={[-1, 9, 0]} color="#ef9e30" />
          <Box position={[0, 9, 0]} color="#ef9e30" />
          <Box position={[1, 9, 0]} color="#ef9e30" />
          <Box position={[2, 9, 0]} color="#ebba53" />
          <Box position={[3, 9, 0]} color="#ebba53" />
          <Box position={[4, 9, 0]} color="#eaede9" />
          <Box position={[5, 9, 0]} color="#0e1938" />

          <Box position={[-4, 8, 0]} color="#0e1938" />
          <Box position={[-3, 8, 0]} color="#c5cfcb" />
          <Box position={[-2, 8, 0]} color="#ef9e30" />
          <Box position={[-1, 8, 0]} color="#c5cfcb" />
          <Box position={[0, 8, 0]} color="#c5cfcb" />
          <Box position={[1, 8, 0]} color="#eaede9" />
          <Box position={[2, 8, 0]} color="#eaede9" />
          <Box position={[3, 8, 0]} color="#eaede9" />
          <Box position={[4, 8, 0]} color="#ebba53" />
          <Box position={[5, 8, 0]} color="#0e1938" />

          <Box position={[-4, 7, 0]} color="#0e1938" />
          <Box position={[-3, 7, 0]} color="#c5cfcb" />
          <Box position={[-2, 7, 0]} color="#ef9e30" />
          <Box position={[-1, 7, 0]} color="#c5cfcb" />
          <Box position={[0, 7, 0]} color="#c5cfcb" />
          <Box position={[1, 7, 0]} color="#eaede9" />
          <Box position={[2, 7, 0]} color="#eaede9" />
          <Box position={[3, 7, 0]} color="#2a548d" />
          <Box position={[4, 7, 0]} color="#eaede9" />
          <Box position={[5, 7, 0]} color="#ebba53" />
          <Box position={[6, 7, 0]} color="#0e1938" />

          <Box position={[-5, 6, 0]} color="#0e1938" />
          <Box position={[-4, 6, 0]} color="#c5cfcb" />
          <Box position={[-3, 6, 0]} color="#ef9e30" />
          <Box position={[-2, 6, 0]} color="#c5cfcb" />
          <Box position={[-1, 6, 0]} color="#c5cfcb" />
          <Box position={[0, 6, 0]} color="#2a548d" />
          <Box position={[1, 6, 0]} color="#eaede9" />
          <Box position={[2, 6, 0]} color="#2a548d" />
          <Box position={[3, 6, 0]} color="#eaede9" />
          <Box position={[4, 6, 0]} color="#eaede9" />
          <Box position={[5, 6, 0]} color="#ebba53" />
          <Box position={[6, 6, 0]} color="#0e1938" />

          <Box position={[-7, 5, 0]} color="#0e1938" />
          <Box position={[-6, 5, 0]} color="#0e1938" />
          <Box position={[-5, 5, 0]} color="#ef9e30" />
          <Box position={[-4, 5, 0]} color="#ef9e30" />
          <Box position={[-3, 5, 0]} color="#c5cfcb" />
          <Box position={[-2, 5, 0]} color="#c5cfcb" />
          <Box position={[-1, 5, 0]} color="#eaede9" />
          <Box position={[0, 5, 0]} color="#2a548d" />
          <Box position={[1, 5, 0]} color="#2a548d" />
          <Box position={[2, 5, 0]} color="#eaede9" />
          <Box position={[3, 5, 0]} color="#eaede9" />
          <Box position={[4, 5, 0]} color="#eaede9" />
          <Box position={[5, 5, 0]} color="#eaede9" />
          <Box position={[6, 5, 0]} color="#ebba53" />
          <Box position={[7, 5, 0]} color="#0e1938" />
          <Box position={[8, 5, 0]} color="#0e1938" />

          <Box position={[-8, 4, 0]} color="#0e1938" />
          <Box position={[-7, 4, 0]} color="#ef9e30" />
          <Box position={[-6, 4, 0]} color="#ef9e30" />
          <Box position={[-5, 4, 0]} color="#c5cfcb" />
          <Box position={[-4, 4, 0]} color="#c5cfcb" />
          <Box position={[-3, 4, 0]} color="#c5cfcb" />
          <Box position={[-2, 4, 0]} color="#c5cfcb" />
          <Box position={[-1, 4, 0]} color="#c5cfcb" />
          <Box position={[0, 4, 0]} color="#eaede9" />
          <Box position={[1, 4, 0]} color="#2a548d" />
          <Box position={[2, 4, 0]} color="#2a548d" />
          <Box position={[3, 4, 0]} color="#eaede9" />
          <Box position={[4, 4, 0]} color="#eaede9" />
          <Box position={[5, 4, 0]} color="#eaede9" />
          <Box position={[6, 4, 0]} color="#eaede9" />
          <Box position={[7, 4, 0]} color="#ebba53" />
          <Box position={[8, 4, 0]} color="#ebba53" />
          <Box position={[9, 4, 0]} color="#0e1938" />

          <Box position={[-7, 3, 0]} color="#0e1938" />
          <Box position={[-6, 3, 0]} color="#0e1938" />
          <Box position={[-5, 3, 0]} color="#c5cfcb" />
          <Box position={[-4, 3, 0]} color="#c5cfcb" />
          <Box position={[-3, 3, 0]} color="#c5cfcb" />
          <Box position={[-2, 3, 0]} color="#c5cfcb" />
          <Box position={[-1, 3, 0]} color="#c5cfcb" />
          <Box position={[0, 3, 0]} color="#c5cfcb" />
          <Box position={[1, 3, 0]} color="#c5cfcb" />
          <Box position={[2, 3, 0]} color="#eaede9" />
          <Box position={[3, 3, 0]} color="#eaede9" />
          <Box position={[4, 3, 0]} color="#eaede9" />
          <Box position={[5, 3, 0]} color="#eaede9" />
          <Box position={[6, 3, 0]} color="#eaede9" />
          <Box position={[7, 3, 0]} color="#eaede9" />
          <Box position={[8, 3, 0]} color="#0e1938" />
        </>
      );
    }
    if (x == "Sombrero") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Cop Hat") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Viking Helmet") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Protagonist White Hat") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Purple Backwards Cap") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Pink Headset") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Cowboy Hat") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
  };
  if (x == "Mining Hat") {
    return (
      <>
        <Box position={[-4, -1, 0]} color="#c5cfcb" />
      </>
    );
  }
  if (x == "Angel Ring") {
    return (
      <>
        <Box position={[-4, 11, 0]} color="#f3d75e" />
        <Box position={[-3, 11, 0]} color="#f3d75e" />
        <Box position={[-2, 11, 0]} color="#f3d75e" />
        <Box position={[-1, 11, 0]} color="#f3d75e" />
        <Box position={[0, 11, 0]} color="#faf9c2" />
        <Box position={[1, 11, 0]} color="#faf9c2" />
        <Box position={[2, 11, 0]} color="#f3d75e" />
        <Box position={[3, 11, 0]} color="#f3d75e" />
        <Box position={[-5, 10, 0]} color="#f3d75e" />
        <Box position={[-4, 10, 0]} color="#f3d75e" />
        <Box position={[-3, 10, 0]} color="#5f4a22" />
        <Box position={[-2, 10, 0]} color="#5f4a22" />
        <Box position={[-1, 10, 0]} color="#5f4a22" />
        <Box position={[0, 10, 0]} color="#5f4a22" />
        <Box position={[1, 10, 0]} color="#5f4a22" />
        <Box position={[2, 10, 0]} color="#5f4a22" />
        <Box position={[3, 10, 0]} color="#f3d75e" />
        <Box position={[4, 10, 0]} color="#f3d75e" />
        <Box position={[-5, 9, 0]} color="#e7ba53" />
        <Box position={[-4, 9, 0]} color="#5f4a22" />
        <Box position={[3, 9, 0]} color="#5f4a22" />
        <Box position={[4, 9, 0]} color="#e7ba53" />
        <Box position={[-5, 8, 0]} color="#e7ba53" />
        <Box position={[-4, 8, 0]} color="#f3d75e" />
        <Box position={[-3, 8, 0]} color="#5f4a22" />
        <Box position={[-2, 8, 0]} color="#5f4a22" />
        <Box position={[-1, 8, 0]} color="#5f4a22" />
        <Box position={[0, 8, 0]} color="#5f4a22" />
        <Box position={[1, 8, 0]} color="#5f4a22" />
        <Box position={[2, 8, 0]} color="#5f4a22" />
        <Box position={[3, 8, 0]} color="#e7ba53" />
        <Box position={[4, 8, 0]} color="#e7ba53" />
        <Box position={[-4, 7, 0]} color="#e7ba53" />
        <Box position={[-3, 7, 0]} color="#f3d75e" />
        <Box position={[-2, 7, 0]} color="#faf9c2" />
        <Box position={[-1, 7, 0]} color="#faf9c2" />
        <Box position={[0, 7, 0]} color="#faf9c2" />
        <Box position={[1, 7, 0]} color="#f3d75e" />
        <Box position={[2, 7, 0]} color="#e7ba53" />
        <Box position={[3, 7, 0]} color="#e7ba53" />
      </>
    );
  }
  if (x == "Orange Cap") {
    return (
      <>
        <Box position={[-3, 8, 0]} color="#0e1938" />
        <Box position={[-2, 8, 0]} color="#0e1938" />
        <Box position={[-1, 8, 0]} color="#0e1938" />
        <Box position={[0, 8, 0]} color="#0e1938" />
        <Box position={[1, 8, 0]} color="#0e1938" />
        <Box position={[2, 8, 0]} color="#0e1938" />
        <Box position={[3, 8, 0]} color="#0e1938" />

        <Box position={[-4, 7, 0]} color="#0e1938" />
        <Box position={[-3, 7, 0]} color="#da721a" />
        <Box position={[-2, 7, 0]} color="#ee9e30" />
        <Box position={[-1, 7, 0]} color="#ee9e30" />
        <Box position={[0, 7, 0]} color="#ee9e30" />
        <Box position={[1, 7, 0]} color="#ee9e30" />
        <Box position={[2, 7, 0]} color="#eceeea" />
        <Box position={[3, 7, 0]} color="#eceeea" />
        <Box position={[4, 7, 0]} color="#0e1938" />

        <Box position={[-5, 6, 0]} color="#0e1938" />
        <Box position={[-4, 6, 0]} color="#da721a" />
        <Box position={[-3, 6, 0]} color="#ee9e30" />
        <Box position={[-2, 6, 0]} color="#ee9e30" />
        <Box position={[-1, 6, 0]} color="#ee9e30" />
        <Box position={[0, 6, 0]} color="#ee9e30" />
        <Box position={[1, 6, 0]} color="#eceeea" />
        <Box position={[2, 6, 0]} color="#7c9796" />
        <Box position={[3, 6, 0]} color="#eceeea" />
        <Box position={[4, 6, 0]} color="#eceeea" />
        <Box position={[5, 6, 0]} color="#0e1938" />

        <Box position={[-6, 5, 0]} color="#0e1938" />
        <Box position={[-5, 5, 0]} color="#da721a" />
        <Box position={[-4, 5, 0]} color="#ee9e30" />
        <Box position={[-3, 5, 0]} color="#ee9e30" />
        <Box position={[-2, 5, 0]} color="#ee9e30" />
        <Box position={[-1, 5, 0]} color="#ee9e30" />
        <Box position={[0, 5, 0]} color="#eceeea" />
        <Box position={[1, 5, 0]} color="#7c9796" />
        <Box position={[2, 5, 0]} color="#eceeea" />
        <Box position={[3, 5, 0]} color="#eceeea" />
        <Box position={[4, 5, 0]} color="#eceeea" />
        <Box position={[5, 5, 0]} color="#eceeea" />
        <Box position={[6, 5, 0]} color="#0e1938" />

        <Box position={[-6, 4, 0]} color="#0e1938" />
        <Box position={[-5, 4, 0]} color="#ee9e30" />
        <Box position={[-4, 4, 0]} color="#ee9e30" />
        <Box position={[-3, 4, 0]} color="#ee9e30" />
        <Box position={[-2, 4, 0]} color="#ee9e30" />
        <Box position={[-1, 4, 0]} color="#ee9e30" />
        <Box position={[0, 4, 0]} color="#eceeea" />
        <Box position={[1, 4, 0]} color="#eceeea" />
        <Box position={[2, 4, 0]} color="#7c9796" />
        <Box position={[3, 4, 0]} color="#7c9796" />
        <Box position={[4, 4, 0]} color="#7c9796" />
        <Box position={[5, 4, 0]} color="#7c9796" />
        <Box position={[6, 4, 0]} color="#0e1938" />
        <Box position={[7, 4, 0]} color="#0e1938" />
        <Box position={[8, 4, 0]} color="#0e1938" />

        <Box position={[-6, 3, 0]} color="#0e1938" />
        <Box position={[-5, 3, 0]} color="#ee9e30" />
        <Box position={[-4, 3, 0]} color="#ee9e30" />
        <Box position={[-3, 3, 0]} color="#ee9e30" />
        <Box position={[-2, 3, 0]} color="#ee9e30" />
        <Box position={[-1, 3, 0]} color="#ee9e30" />
        <Box position={[0, 3, 0]} color="#eceeea" />
        <Box position={[1, 3, 0]} color="#eceeea" />
        <Box position={[2, 3, 0]} color="#eceeea" />
        <Box position={[3, 3, 0]} color="#eceeea" />
        <Box position={[4, 3, 0]} color="#eceeea" />
        <Box position={[5, 3, 0]} color="#eceeea" />
        <Box position={[6, 3, 0]} color="#ee9e30" />
        <Box position={[7, 3, 0]} color="#ee9e30" />
        <Box position={[8, 3, 0]} color="#ee9e30" />
        <Box position={[9, 3, 0]} color="#0e1938" />

        <Box position={[-6, 2, 0]} color="#0e1938" />
        <Box position={[-5, 2, 0]} color="#0e1938" />
        <Box position={[-4, 2, 0]} color="#0e1938" />
        <Box position={[-3, 2, 0]} color="#0e1938" />
        <Box position={[-2, 2, 0]} color="#0e1938" />
        <Box position={[-1, 2, 0]} color="#0e1938" />
        <Box position={[0, 2, 0]} color="#0e1938" />
        <Box position={[1, 2, 0]} color="#0e1938" />
        <Box position={[2, 2, 0]} color="#0e1938" />
        <Box position={[3, 2, 0]} color="#0e1938" />
        <Box position={[4, 2, 0]} color="#0e1938" />
        <Box position={[5, 2, 0]} color="#0e1938" />
        <Box position={[6, 2, 0]} color="#0e1938" />
        <Box position={[7, 2, 0]} color="#0e1938" />
        <Box position={[8, 2, 0]} color="#0e1938" />
        <Box position={[9, 2, 0]} color="#0e1938" />
      </>
    );
  }
  if (x == "Green Cap") {
    return (
      <>
        <Box position={[-3, 8, 0]} color="#0e1938" />
        <Box position={[-2, 8, 0]} color="#0e1938" />
        <Box position={[-1, 8, 0]} color="#0e1938" />
        <Box position={[0, 8, 0]} color="#0e1938" />
        <Box position={[1, 8, 0]} color="#0e1938" />
        <Box position={[2, 8, 0]} color="#0e1938" />
        <Box position={[3, 8, 0]} color="#0e1938" />

        <Box position={[-4, 7, 0]} color="#0e1938" />
        <Box position={[-3, 7, 0]} color="#38821f" />
        <Box position={[-2, 7, 0]} color="#6aa72b" />
        <Box position={[-1, 7, 0]} color="#6aa72b" />
        <Box position={[0, 7, 0]} color="#6aa72b" />
        <Box position={[1, 7, 0]} color="#6aa72b" />
        <Box position={[2, 7, 0]} color="#eceeea" />
        <Box position={[3, 7, 0]} color="#eceeea" />
        <Box position={[4, 7, 0]} color="#0e1938" />

        <Box position={[-5, 6, 0]} color="#0e1938" />
        <Box position={[-4, 6, 0]} color="#38821f" />
        <Box position={[-3, 6, 0]} color="#6aa72b" />
        <Box position={[-2, 6, 0]} color="#6aa72b" />
        <Box position={[-1, 6, 0]} color="#6aa72b" />
        <Box position={[0, 6, 0]} color="#6aa72b" />
        <Box position={[1, 6, 0]} color="#eceeea" />
        <Box position={[2, 6, 0]} color="#7c9796" />
        <Box position={[3, 6, 0]} color="#eceeea" />
        <Box position={[4, 6, 0]} color="#eceeea" />
        <Box position={[5, 6, 0]} color="#0e1938" />

        <Box position={[-6, 5, 0]} color="#0e1938" />
        <Box position={[-5, 5, 0]} color="#38821f" />
        <Box position={[-4, 5, 0]} color="#6aa72b" />
        <Box position={[-3, 5, 0]} color="#6aa72b" />
        <Box position={[-2, 5, 0]} color="#6aa72b" />
        <Box position={[-1, 5, 0]} color="#6aa72b" />
        <Box position={[0, 5, 0]} color="#eceeea" />
        <Box position={[1, 5, 0]} color="#7c9796" />
        <Box position={[2, 5, 0]} color="#eceeea" />
        <Box position={[3, 5, 0]} color="#eceeea" />
        <Box position={[4, 5, 0]} color="#eceeea" />
        <Box position={[5, 5, 0]} color="#eceeea" />
        <Box position={[6, 5, 0]} color="#0e1938" />

        <Box position={[-6, 4, 0]} color="#0e1938" />
        <Box position={[-5, 4, 0]} color="#6aa72b" />
        <Box position={[-4, 4, 0]} color="#6aa72b" />
        <Box position={[-3, 4, 0]} color="#6aa72b" />
        <Box position={[-2, 4, 0]} color="#6aa72b" />
        <Box position={[-1, 4, 0]} color="#6aa72b" />
        <Box position={[0, 4, 0]} color="#eceeea" />
        <Box position={[1, 4, 0]} color="#eceeea" />
        <Box position={[2, 4, 0]} color="#7c9796" />
        <Box position={[3, 4, 0]} color="#7c9796" />
        <Box position={[4, 4, 0]} color="#7c9796" />
        <Box position={[5, 4, 0]} color="#7c9796" />
        <Box position={[6, 4, 0]} color="#0e1938" />
        <Box position={[7, 4, 0]} color="#0e1938" />
        <Box position={[8, 4, 0]} color="#0e1938" />

        <Box position={[-6, 3, 0]} color="#0e1938" />
        <Box position={[-5, 3, 0]} color="#6aa72b" />
        <Box position={[-4, 3, 0]} color="#6aa72b" />
        <Box position={[-3, 3, 0]} color="#6aa72b" />
        <Box position={[-2, 3, 0]} color="#6aa72b" />
        <Box position={[-1, 3, 0]} color="#6aa72b" />
        <Box position={[0, 3, 0]} color="#eceeea" />
        <Box position={[1, 3, 0]} color="#eceeea" />
        <Box position={[2, 3, 0]} color="#eceeea" />
        <Box position={[3, 3, 0]} color="#eceeea" />
        <Box position={[4, 3, 0]} color="#eceeea" />
        <Box position={[5, 3, 0]} color="#eceeea" />
        <Box position={[6, 3, 0]} color="#6aa72b" />
        <Box position={[7, 3, 0]} color="#6aa72b" />
        <Box position={[8, 3, 0]} color="#6aa72b" />
        <Box position={[9, 3, 0]} color="#0e1938" />

        <Box position={[-6, 2, 0]} color="#0e1938" />
        <Box position={[-5, 2, 0]} color="#0e1938" />
        <Box position={[-4, 2, 0]} color="#0e1938" />
        <Box position={[-3, 2, 0]} color="#0e1938" />
        <Box position={[-2, 2, 0]} color="#0e1938" />
        <Box position={[-1, 2, 0]} color="#0e1938" />
        <Box position={[0, 2, 0]} color="#0e1938" />
        <Box position={[1, 2, 0]} color="#0e1938" />
        <Box position={[2, 2, 0]} color="#0e1938" />
        <Box position={[3, 2, 0]} color="#0e1938" />
        <Box position={[4, 2, 0]} color="#0e1938" />
        <Box position={[5, 2, 0]} color="#0e1938" />
        <Box position={[6, 2, 0]} color="#0e1938" />
        <Box position={[7, 2, 0]} color="#0e1938" />
        <Box position={[8, 2, 0]} color="#0e1938" />
        <Box position={[9, 2, 0]} color="#0e1938" />
      </>
    );
  }
  if (x == "Roman Helmet") {
    return (
      <>
        <Box position={[-4, -1, 0]} color="#c5cfcb" />
      </>
    );
  }
  if (x == "Protagonist Black Hat") {
    return (
      <>
        <Box position={[-4, -1, 0]} color="#c5cfcb" />
      </>
    );
  }
  if (x == "Green Beret") {
    return (
      <>
        <Box position={[-4, -1, 0]} color="#c5cfcb" />
      </>
    );
  }
  if (x == "Orange Backwards Cap") {
    return (
      <>
        <Box position={[-4, -1, 0]} color="#c5cfcb" />
      </>
    );
  }
  if (x == "Black Fedora 2") {
    return (
      <>
        <Box position={[-3, 9, 0]} color="#0e1a38" />
        <Box position={[-2, 9, 0]} color="#0e1a38" />
        <Box position={[-1, 9, 0]} color="#0e1a38" />
        <Box position={[0, 9, 0]} color="#0e1a38" />
        <Box position={[1, 9, 0]} color="#0e1a38" />
        <Box position={[3, 9, 0]} color="#0e1a38" />

        <Box position={[-4, 8, 0]} color="#0e1a38" />
        <Box position={[-3, 8, 0]} color="#1b2b37" />
        <Box position={[-2, 8, 0]} color="#334951" />
        <Box position={[-1, 8, 0]} color="#334951" />
        <Box position={[0, 8, 0]} color="#334951" />
        <Box position={[1, 8, 0]} color="#334951" />
        <Box position={[2, 8, 0]} color="#0e1a38" />
        <Box position={[3, 8, 0]} color="#334951" />
        <Box position={[4, 8, 0]} color="#0e1a38" />

        <Box position={[-5, 7, 0]} color="#0e1a38" />
        <Box position={[-4, 7, 0]} color="#1b2b37" />
        <Box position={[-3, 7, 0]} color="#334951" />
        <Box position={[-2, 7, 0]} color="#334951" />
        <Box position={[-1, 7, 0]} color="#334951" />
        <Box position={[0, 7, 0]} color="#334951" />
        <Box position={[1, 7, 0]} color="#334951" />
        <Box position={[2, 7, 0]} color="#334951" />
        <Box position={[3, 7, 0]} color="#334951" />
        <Box position={[4, 7, 0]} color="#334951" />
        <Box position={[5, 7, 0]} color="#0e1a38" />

        <Box position={[-5, 6, 0]} color="#0e1a38" />
        <Box position={[-4, 6, 0]} color="#0e1a38" />
        <Box position={[-3, 6, 0]} color="#0e1a38" />
        <Box position={[-2, 6, 0]} color="#0e1a38" />
        <Box position={[-1, 6, 0]} color="#0e1a38" />
        <Box position={[0, 6, 0]} color="#0e1a38" />
        <Box position={[1, 6, 0]} color="#0e1a38" />
        <Box position={[2, 6, 0]} color="#0e1a38" />
        <Box position={[3, 6, 0]} color="#0e1a38" />
        <Box position={[4, 6, 0]} color="#0e1a38" />
        <Box position={[5, 6, 0]} color="#0e1a38" />
        <Box position={[8, 6, 0]} color="#0e1a38" />

        <Box position={[-8, 5, 0]} color="#0e1a38" />
        <Box position={[-7, 5, 0]} color="#0e1a38" />
        <Box position={[-6, 5, 0]} color="#0e1a38" />
        <Box position={[-5, 5, 0]} color="#0e1a38" />
        <Box position={[-4, 5, 0]} color="#0e1a38" />
        <Box position={[-3, 5, 0]} color="#0e1a38" />
        <Box position={[-2, 5, 0]} color="#0e1a38" />
        <Box position={[-1, 5, 0]} color="#0e1a38" />
        <Box position={[0, 5, 0]} color="#0e1a38" />
        <Box position={[1, 5, 0]} color="#0e1a38" />
        <Box position={[2, 5, 0]} color="#0e1a38" />
        <Box position={[3, 5, 0]} color="#0e1a38" />
        <Box position={[4, 5, 0]} color="#0e1a38" />
        <Box position={[5, 5, 0]} color="#0e1a38" />
        <Box position={[6, 5, 0]} color="#0e1a38" />
        <Box position={[7, 5, 0]} color="#0e1a38" />
        <Box position={[8, 5, 0]} color="#334951" />
        <Box position={[9, 5, 0]} color="#0e1a38" />

        <Box position={[-8, 4, 0]} color="#0e1a38" />
        <Box position={[-7, 4, 0]} color="#1b2b37" />
        <Box position={[-6, 4, 0]} color="#334951" />
        <Box position={[-5, 4, 0]} color="#334951" />
        <Box position={[-4, 4, 0]} color="#334951" />
        <Box position={[-3, 4, 0]} color="#334951" />
        <Box position={[-2, 4, 0]} color="#334951" />
        <Box position={[-1, 4, 0]} color="#334951" />
        <Box position={[0, 4, 0]} color="#334951" />
        <Box position={[1, 4, 0]} color="#334951" />
        <Box position={[2, 4, 0]} color="#334951" />
        <Box position={[3, 4, 0]} color="#334951" />
        <Box position={[4, 4, 0]} color="#334951" />
        <Box position={[5, 4, 0]} color="#334951" />
        <Box position={[6, 4, 0]} color="#334951" />
        <Box position={[7, 4, 0]} color="#334951" />
        <Box position={[8, 4, 0]} color="#0e1a38" />

        <Box position={[-7, 3, 0]} color="#0e1a38" />
        <Box position={[-6, 3, 0]} color="#0e1a38" />
        <Box position={[-5, 3, 0]} color="#0e1a38" />
        <Box position={[-4, 3, 0]} color="#0e1a38" />
        <Box position={[-3, 3, 0]} color="#0e1a38" />
        <Box position={[-2, 3, 0]} color="#0e1a38" />
        <Box position={[-1, 3, 0]} color="#0e1a38" />
        <Box position={[0, 3, 0]} color="#0e1a38" />
        <Box position={[1, 3, 0]} color="#0e1a38" />
        <Box position={[2, 3, 0]} color="#0e1a38" />
        <Box position={[3, 3, 0]} color="#0e1a38" />
        <Box position={[4, 3, 0]} color="#0e1a38" />
        <Box position={[5, 3, 0]} color="#0e1a38" />
        <Box position={[6, 3, 0]} color="#0e1a38" />
        <Box position={[7, 3, 0]} color="#0e1a38" />
      </>
    );
  }
  if (x == "Green Punk Hair") {
    return (
      <>
        <Box position={[0, 5, 0]} color="#337551" />
        <Box position={[1, 5, 0]} color="#337551" />
        <Box position={[2, 5, 0]} color="#337551" />
        <Box position={[-1, 6, 0]} color="#337551" />
        <Box position={[0, 6, 0]} color="#337551" />
        <Box position={[1, 6, 0]} color="#337551" />
        <Box position={[2, 6, 0]} color="#337551" />
        <Box position={[0, 7, 0]} color="#337551" />
        <Box position={[1, 7, 0]} color="#337551" />
        <Box position={[2, 7, 0]} color="#337551" />
        <Box position={[1, 8, 0]} color="#337551" />
        <Box position={[2, 8, 0]} color="#337551" />
        <Box position={[2, 9, 0]} color="#337551" />
      </>
    );
  }
  if (x == "Blue Punk Hair") {
    return (
      <>
        <Box position={[0, 5, 0]} color="#28518b" />
        <Box position={[1, 5, 0]} color="#28518b" />
        <Box position={[2, 5, 0]} color="#28518b" />
        <Box position={[-1, 6, 0]} color="#28518b" />
        <Box position={[0, 6, 0]} color="#28518b" />
        <Box position={[1, 6, 0]} color="#28518b" />
        <Box position={[2, 6, 0]} color="#28518b" />
        <Box position={[0, 7, 0]} color="#28518b" />
        <Box position={[1, 7, 0]} color="#28518b" />
        <Box position={[2, 7, 0]} color="#28518b" />
        <Box position={[1, 8, 0]} color="#28518b" />
        <Box position={[2, 8, 0]} color="#28518b" />
        <Box position={[2, 9, 0]} color="#28518b" />
      </>
    );
  }
  if (x == "Red Beret") {
    return (
      <>
        <Box position={[-4, -1, 0]} color="#c5cfcb" />
      </>
    );
  }
  if (x == "Green Top Hat") {
    return (
      <>
        <Box position={[-4, -1, 0]} color="#c5cfcb" />
      </>
    );
  }
  if (x == "Pirate Hat") {
    return (
      <>
        <Box position={[-1, 10, 0]} color="#0e1938" />
        <Box position={[0, 10, 0]} color="#0e1938" />
        <Box position={[1, 10, 0]} color="#0e1938" />
        <Box position={[2, 10, 0]} color="#0e1938" />
        <Box position={[3, 10, 0]} color="#0e1938" />
        <Box position={[4, 10, 0]} color="#0e1938" />

        <Box position={[-3, 9, 0]} color="#0e1938" />
        <Box position={[-2, 9, 0]} color="#0e1938" />
        <Box position={[-1, 9, 0]} color="#ef9e30" />
        <Box position={[0, 9, 0]} color="#ef9e30" />
        <Box position={[1, 9, 0]} color="#ef9e30" />
        <Box position={[2, 9, 0]} color="#ebba53" />
        <Box position={[3, 9, 0]} color="#ebba53" />
        <Box position={[4, 9, 0]} color="#334951" />
        <Box position={[5, 9, 0]} color="#0e1938" />

        <Box position={[-4, 8, 0]} color="#0e1938" />
        <Box position={[-3, 8, 0]} color="#1a2c38" />
        <Box position={[-2, 8, 0]} color="#ef9e30" />
        <Box position={[-1, 8, 0]} color="#1a2c38" />
        <Box position={[0, 8, 0]} color="#1a2c38" />
        <Box position={[1, 8, 0]} color="#334951" />
        <Box position={[2, 8, 0]} color="#334951" />
        <Box position={[3, 8, 0]} color="#334951" />
        <Box position={[4, 8, 0]} color="#ebba53" />
        <Box position={[5, 8, 0]} color="#0e1938" />

        <Box position={[-4, 7, 0]} color="#0e1938" />
        <Box position={[-3, 7, 0]} color="#1a2c38" />
        <Box position={[-2, 7, 0]} color="#ef9e30" />
        <Box position={[-1, 7, 0]} color="#1a2c38" />
        <Box position={[0, 7, 0]} color="#1a2c38" />
        <Box position={[1, 7, 0]} color="#334951" />
        <Box position={[2, 7, 0]} color="#334951" />
        <Box position={[3, 7, 0]} color="#334951" />
        <Box position={[4, 7, 0]} color="#334951" />
        <Box position={[5, 7, 0]} color="#ebba53" />
        <Box position={[6, 7, 0]} color="#0e1938" />

        <Box position={[-5, 6, 0]} color="#0e1938" />
        <Box position={[-4, 6, 0]} color="#1a2c38" />
        <Box position={[-3, 6, 0]} color="#ef9e30" />
        <Box position={[-2, 6, 0]} color="#1a2c38" />
        <Box position={[-1, 6, 0]} color="#1a2c38" />
        <Box position={[0, 6, 0]} color="#334951" />
        <Box position={[1, 6, 0]} color="#edefeb" />
        <Box position={[2, 6, 0]} color="#edefeb" />
        <Box position={[3, 6, 0]} color="#edefeb" />
        <Box position={[4, 6, 0]} color="#334951" />
        <Box position={[5, 6, 0]} color="#ebba53" />
        <Box position={[6, 6, 0]} color="#0e1938" />

        <Box position={[-7, 5, 0]} color="#0e1938" />
        <Box position={[-6, 5, 0]} color="#0e1938" />
        <Box position={[-5, 5, 0]} color="#ef9e30" />
        <Box position={[-4, 5, 0]} color="#ef9e30" />
        <Box position={[-3, 5, 0]} color="#1a2c38" />
        <Box position={[-2, 5, 0]} color="#1a2c38" />
        <Box position={[-1, 5, 0]} color="#334951" />
        <Box position={[0, 5, 0]} color="#edefeb" />
        <Box position={[1, 5, 0]} color="#334951" />
        <Box position={[2, 5, 0]} color="#edefeb" />
        <Box position={[3, 5, 0]} color="#334951" />
        <Box position={[4, 5, 0]} color="#edefeb" />
        <Box position={[5, 5, 0]} color="#334951" />
        <Box position={[6, 5, 0]} color="#ebba53" />
        <Box position={[7, 5, 0]} color="#0e1938" />
        <Box position={[8, 5, 0]} color="#0e1938" />

        <Box position={[-8, 4, 0]} color="#0e1938" />
        <Box position={[-7, 4, 0]} color="#ef9e30" />
        <Box position={[-6, 4, 0]} color="#ef9e30" />
        <Box position={[-5, 4, 0]} color="#1a2c38" />
        <Box position={[-4, 4, 0]} color="#1a2c38" />
        <Box position={[-3, 4, 0]} color="#1a2c38" />
        <Box position={[-2, 4, 0]} color="#1a2c38" />
        <Box position={[-1, 4, 0]} color="#1a2c38" />
        <Box position={[0, 4, 0]} color="#334951" />
        <Box position={[1, 4, 0]} color="#edefeb" />
        <Box position={[2, 4, 0]} color="#334951" />
        <Box position={[3, 4, 0]} color="#edefeb" />
        <Box position={[4, 4, 0]} color="#334951" />
        <Box position={[5, 4, 0]} color="#334951" />
        <Box position={[6, 4, 0]} color="#334951" />
        <Box position={[7, 4, 0]} color="#ebba53" />
        <Box position={[8, 4, 0]} color="#ebba53" />
        <Box position={[9, 4, 0]} color="#0e1938" />

        <Box position={[-7, 3, 0]} color="#0e1938" />
        <Box position={[-6, 3, 0]} color="#0e1938" />
        <Box position={[-5, 3, 0]} color="#1a2c38" />
        <Box position={[-4, 3, 0]} color="#1a2c38" />
        <Box position={[-3, 3, 0]} color="#1a2c38" />
        <Box position={[-2, 3, 0]} color="#1a2c38" />
        <Box position={[-1, 3, 0]} color="#1a2c38" />
        <Box position={[0, 3, 0]} color="#1a2c38" />
        <Box position={[1, 3, 0]} color="#1a2c38" />
        <Box position={[2, 3, 0]} color="#334951" />
        <Box position={[3, 3, 0]} color="#334951" />
        <Box position={[4, 3, 0]} color="#334951" />
        <Box position={[5, 3, 0]} color="#334951" />
        <Box position={[6, 3, 0]} color="#334951" />
        <Box position={[7, 3, 0]} color="#334951" />
        <Box position={[8, 3, 0]} color="#0e1938" />
      </>
    );
  }
  if (x == "Red Cap") {
    return (
      <>
        <Box position={[-3, 8, 0]} color="#0e1938" />
        <Box position={[-2, 8, 0]} color="#0e1938" />
        <Box position={[-1, 8, 0]} color="#0e1938" />
        <Box position={[0, 8, 0]} color="#0e1938" />
        <Box position={[1, 8, 0]} color="#0e1938" />
        <Box position={[2, 8, 0]} color="#0e1938" />
        <Box position={[3, 8, 0]} color="#0e1938" />

        <Box position={[-4, 7, 0]} color="#0e1938" />
        <Box position={[-3, 7, 0]} color="#751129" />
        <Box position={[-2, 7, 0]} color="#a51313" />
        <Box position={[-1, 7, 0]} color="#a51313" />
        <Box position={[0, 7, 0]} color="#a51313" />
        <Box position={[1, 7, 0]} color="#a51313" />
        <Box position={[2, 7, 0]} color="#eceeea" />
        <Box position={[3, 7, 0]} color="#eceeea" />
        <Box position={[4, 7, 0]} color="#0e1938" />

        <Box position={[-5, 6, 0]} color="#0e1938" />
        <Box position={[-4, 6, 0]} color="#751129" />
        <Box position={[-3, 6, 0]} color="#a51313" />
        <Box position={[-2, 6, 0]} color="#a51313" />
        <Box position={[-1, 6, 0]} color="#a51313" />
        <Box position={[0, 6, 0]} color="#a51313" />
        <Box position={[1, 6, 0]} color="#eceeea" />
        <Box position={[2, 6, 0]} color="#eceeea" />
        <Box position={[3, 6, 0]} color="#69a62a" />
        <Box position={[4, 6, 0]} color="#eceeea" />
        <Box position={[5, 6, 0]} color="#0e1938" />

        <Box position={[-6, 5, 0]} color="#0e1938" />
        <Box position={[-5, 5, 0]} color="#751129" />
        <Box position={[-4, 5, 0]} color="#a51313" />
        <Box position={[-3, 5, 0]} color="#a51313" />
        <Box position={[-2, 5, 0]} color="#a51313" />
        <Box position={[-1, 5, 0]} color="#a51313" />
        <Box position={[0, 5, 0]} color="#eceeea" />
        <Box position={[1, 5, 0]} color="#eceeea" />
        <Box position={[2, 5, 0]} color="#69a62a" />
        <Box position={[3, 5, 0]} color="#eceeea" />
        <Box position={[4, 5, 0]} color="#eceeea" />
        <Box position={[5, 5, 0]} color="#eceeea" />
        <Box position={[6, 5, 0]} color="#0e1938" />

        <Box position={[-6, 4, 0]} color="#0e1938" />
        <Box position={[-5, 4, 0]} color="#a51313" />
        <Box position={[-4, 4, 0]} color="#a51313" />
        <Box position={[-3, 4, 0]} color="#a51313" />
        <Box position={[-2, 4, 0]} color="#a51313" />
        <Box position={[-1, 4, 0]} color="#a51313" />
        <Box position={[0, 4, 0]} color="#eceeea" />
        <Box position={[1, 4, 0]} color="#eceeea" />
        <Box position={[2, 4, 0]} color="#69a62a" />
        <Box position={[3, 4, 0]} color="#69a62a" />
        <Box position={[4, 4, 0]} color="#69a62a" />
        <Box position={[5, 4, 0]} color="#69a62a" />
        <Box position={[6, 4, 0]} color="#0e1938" />
        <Box position={[7, 4, 0]} color="#0e1938" />
        <Box position={[8, 4, 0]} color="#0e1938" />

        <Box position={[-6, 3, 0]} color="#0e1938" />
        <Box position={[-5, 3, 0]} color="#a51313" />
        <Box position={[-4, 3, 0]} color="#a51313" />
        <Box position={[-3, 3, 0]} color="#a51313" />
        <Box position={[-2, 3, 0]} color="#a51313" />
        <Box position={[-1, 3, 0]} color="#a51313" />
        <Box position={[0, 3, 0]} color="#eceeea" />
        <Box position={[1, 3, 0]} color="#eceeea" />
        <Box position={[2, 3, 0]} color="#eceeea" />
        <Box position={[3, 3, 0]} color="#eceeea" />
        <Box position={[4, 3, 0]} color="#eceeea" />
        <Box position={[5, 3, 0]} color="#eceeea" />
        <Box position={[6, 3, 0]} color="#a51313" />
        <Box position={[7, 3, 0]} color="#a51313" />
        <Box position={[8, 3, 0]} color="#a51313" />
        <Box position={[9, 3, 0]} color="#0e1938" />

        <Box position={[-6, 2, 0]} color="#0e1938" />
        <Box position={[-5, 2, 0]} color="#0e1938" />
        <Box position={[-4, 2, 0]} color="#0e1938" />
        <Box position={[-3, 2, 0]} color="#0e1938" />
        <Box position={[-2, 2, 0]} color="#0e1938" />
        <Box position={[-1, 2, 0]} color="#0e1938" />
        <Box position={[0, 2, 0]} color="#0e1938" />
        <Box position={[1, 2, 0]} color="#0e1938" />
        <Box position={[2, 2, 0]} color="#0e1938" />
        <Box position={[3, 2, 0]} color="#0e1938" />
        <Box position={[4, 2, 0]} color="#0e1938" />
        <Box position={[5, 2, 0]} color="#0e1938" />
        <Box position={[6, 2, 0]} color="#0e1938" />
        <Box position={[7, 2, 0]} color="#0e1938" />
        <Box position={[8, 2, 0]} color="#0e1938" />
        <Box position={[9, 2, 0]} color="#0e1938" />
      </>
    );
  }
  if (x == "Black Fedora 1") {
    return (
      <>
        <Box position={[-3, 9, 0]} color="#0e1a38" />
        <Box position={[-2, 9, 0]} color="#0e1a38" />
        <Box position={[-1, 9, 0]} color="#0e1a38" />
        <Box position={[0, 9, 0]} color="#0e1a38" />
        <Box position={[1, 9, 0]} color="#0e1a38" />
        <Box position={[2, 9, 0]} color="#0e1a38" />
        <Box position={[3, 9, 0]} color="#0e1a38" />

        <Box position={[-4, 8, 0]} color="#0e1a38" />
        <Box position={[-3, 8, 0]} color="#1b2b37" />
        <Box position={[-2, 8, 0]} color="#334951" />
        <Box position={[-1, 8, 0]} color="#334951" />
        <Box position={[0, 8, 0]} color="#334951" />
        <Box position={[1, 8, 0]} color="#334951" />
        <Box position={[2, 8, 0]} color="#334951" />
        <Box position={[3, 8, 0]} color="#334951" />
        <Box position={[4, 8, 0]} color="#0e1a38" />

        <Box position={[-5, 7, 0]} color="#0e1a38" />
        <Box position={[-4, 7, 0]} color="#1b2b37" />
        <Box position={[-3, 7, 0]} color="#334951" />
        <Box position={[-2, 7, 0]} color="#334951" />
        <Box position={[-1, 7, 0]} color="#334951" />
        <Box position={[0, 7, 0]} color="#334951" />
        <Box position={[1, 7, 0]} color="#334951" />
        <Box position={[2, 7, 0]} color="#334951" />
        <Box position={[3, 7, 0]} color="#334951" />
        <Box position={[4, 7, 0]} color="#334951" />
        <Box position={[5, 7, 0]} color="#0e1a38" />

        <Box position={[-5, 6, 0]} color="#0e1a38" />
        <Box position={[-4, 6, 0]} color="#0e1a38" />
        <Box position={[-3, 6, 0]} color="#0e1a38" />
        <Box position={[-2, 6, 0]} color="#0e1a38" />
        <Box position={[-1, 6, 0]} color="#0e1a38" />
        <Box position={[0, 6, 0]} color="#0e1a38" />
        <Box position={[1, 6, 0]} color="#0e1a38" />
        <Box position={[2, 6, 0]} color="#0e1a38" />
        <Box position={[3, 6, 0]} color="#0e1a38" />
        <Box position={[4, 6, 0]} color="#0e1a38" />
        <Box position={[5, 6, 0]} color="#0e1a38" />

        <Box position={[-8, 5, 0]} color="#0e1a38" />
        <Box position={[-7, 5, 0]} color="#0e1a38" />
        <Box position={[-6, 5, 0]} color="#0e1a38" />
        <Box position={[-5, 5, 0]} color="#0e1a38" />
        <Box position={[-4, 5, 0]} color="#0e1a38" />
        <Box position={[-3, 5, 0]} color="#0e1a38" />
        <Box position={[-2, 5, 0]} color="#0e1a38" />
        <Box position={[-1, 5, 0]} color="#0e1a38" />
        <Box position={[0, 5, 0]} color="#0e1a38" />
        <Box position={[1, 5, 0]} color="#0e1a38" />
        <Box position={[2, 5, 0]} color="#0e1a38" />
        <Box position={[3, 5, 0]} color="#0e1a38" />
        <Box position={[4, 5, 0]} color="#0e1a38" />
        <Box position={[5, 5, 0]} color="#0e1a38" />
        <Box position={[6, 5, 0]} color="#0e1a38" />
        <Box position={[7, 5, 0]} color="#0e1a38" />
        <Box position={[8, 5, 0]} color="#0e1a38" />

        <Box position={[-8, 4, 0]} color="#0e1a38" />
        <Box position={[-7, 4, 0]} color="#1b2b37" />
        <Box position={[-6, 4, 0]} color="#334951" />
        <Box position={[-5, 4, 0]} color="#334951" />
        <Box position={[-4, 4, 0]} color="#334951" />
        <Box position={[-3, 4, 0]} color="#334951" />
        <Box position={[-2, 4, 0]} color="#334951" />
        <Box position={[-1, 4, 0]} color="#334951" />
        <Box position={[0, 4, 0]} color="#334951" />
        <Box position={[1, 4, 0]} color="#334951" />
        <Box position={[2, 4, 0]} color="#334951" />
        <Box position={[3, 4, 0]} color="#334951" />
        <Box position={[4, 4, 0]} color="#334951" />
        <Box position={[5, 4, 0]} color="#334951" />
        <Box position={[6, 4, 0]} color="#334951" />
        <Box position={[7, 4, 0]} color="#334951" />
        <Box position={[8, 4, 0]} color="#0e1a38" />

        <Box position={[-7, 3, 0]} color="#0e1a38" />
        <Box position={[-6, 3, 0]} color="#0e1a38" />
        <Box position={[-5, 3, 0]} color="#0e1a38" />
        <Box position={[-4, 3, 0]} color="#0e1a38" />
        <Box position={[-3, 3, 0]} color="#0e1a38" />
        <Box position={[-2, 3, 0]} color="#0e1a38" />
        <Box position={[-1, 3, 0]} color="#0e1a38" />
        <Box position={[0, 3, 0]} color="#0e1a38" />
        <Box position={[1, 3, 0]} color="#0e1a38" />
        <Box position={[2, 3, 0]} color="#0e1a38" />
        <Box position={[3, 3, 0]} color="#0e1a38" />
        <Box position={[4, 3, 0]} color="#0e1a38" />
        <Box position={[5, 3, 0]} color="#0e1a38" />
        <Box position={[6, 3, 0]} color="#0e1a38" />
        <Box position={[7, 3, 0]} color="#0e1a38" />
      </>
    );
  }
  if (x == "Strawhat") {
    return (
      <>
        <Box position={[-3, 9, 0]} color="#0e1a38" />
        <Box position={[-2, 9, 0]} color="#0e1a38" />
        <Box position={[-1, 9, 0]} color="#0e1a38" />
        <Box position={[0, 9, 0]} color="#0e1a38" />
        <Box position={[1, 9, 0]} color="#0e1a38" />
        <Box position={[2, 9, 0]} color="#0e1a38" />
        <Box position={[3, 9, 0]} color="#0e1a38" />

        <Box position={[-4, 8, 0]} color="#0e1a38" />
        <Box position={[-3, 8, 0]} color="#ee9e2e" />
        <Box position={[-2, 8, 0]} color="#f2d65e" />
        <Box position={[-1, 8, 0]} color="#f2d65e" />
        <Box position={[0, 8, 0]} color="#f2d65e" />
        <Box position={[1, 8, 0]} color="#f2d65e" />
        <Box position={[2, 8, 0]} color="#f2d65e" />
        <Box position={[3, 8, 0]} color="#f2d65e" />
        <Box position={[4, 8, 0]} color="#0e1a38" />

        <Box position={[-5, 7, 0]} color="#0e1a38" />
        <Box position={[-4, 7, 0]} color="#ee9e2e" />
        <Box position={[-3, 7, 0]} color="#f2d65e" />
        <Box position={[-2, 7, 0]} color="#f2d65e" />
        <Box position={[-1, 7, 0]} color="#f2d65e" />
        <Box position={[0, 7, 0]} color="#f2d65e" />
        <Box position={[1, 7, 0]} color="#f2d65e" />
        <Box position={[2, 7, 0]} color="#f2d65e" />
        <Box position={[3, 7, 0]} color="#f2d65e" />
        <Box position={[4, 7, 0]} color="#f2d65e" />
        <Box position={[5, 7, 0]} color="#0e1a38" />

        <Box position={[-5, 6, 0]} color="#0e1a38" />
        <Box position={[-4, 6, 0]} color="#a51314" />
        <Box position={[-3, 6, 0]} color="#a51314" />
        <Box position={[-2, 6, 0]} color="#a51314" />
        <Box position={[-1, 6, 0]} color="#a51314" />
        <Box position={[0, 6, 0]} color="#a51314" />
        <Box position={[1, 6, 0]} color="#a51314" />
        <Box position={[2, 6, 0]} color="#a51314" />
        <Box position={[3, 6, 0]} color="#a51314" />
        <Box position={[4, 6, 0]} color="#a51314" />
        <Box position={[5, 6, 0]} color="#0e1a38" />

        <Box position={[-8, 5, 0]} color="#0e1a38" />
        <Box position={[-7, 5, 0]} color="#0e1a38" />
        <Box position={[-6, 5, 0]} color="#0e1a38" />
        <Box position={[-5, 5, 0]} color="#0e1a38" />
        <Box position={[-4, 5, 0]} color="#a51314" />
        <Box position={[-3, 5, 0]} color="#a51314" />
        <Box position={[-2, 5, 0]} color="#a51314" />
        <Box position={[-1, 5, 0]} color="#a51314" />
        <Box position={[0, 5, 0]} color="#a51314" />
        <Box position={[1, 5, 0]} color="#a51314" />
        <Box position={[2, 5, 0]} color="#a51314" />
        <Box position={[3, 5, 0]} color="#a51314" />
        <Box position={[4, 5, 0]} color="#a51314" />
        <Box position={[5, 5, 0]} color="#0e1a38" />
        <Box position={[6, 5, 0]} color="#0e1a38" />
        <Box position={[7, 5, 0]} color="#0e1a38" />
        <Box position={[8, 5, 0]} color="#0e1a38" />

        <Box position={[-8, 4, 0]} color="#0e1a38" />
        <Box position={[-7, 4, 0]} color="#ee9e2e" />
        <Box position={[-6, 4, 0]} color="#f2d65e" />
        <Box position={[-5, 4, 0]} color="#f2d65e" />
        <Box position={[-4, 4, 0]} color="#f2d65e" />
        <Box position={[-3, 4, 0]} color="#f2d65e" />
        <Box position={[-2, 4, 0]} color="#f2d65e" />
        <Box position={[-1, 4, 0]} color="#f2d65e" />
        <Box position={[0, 4, 0]} color="#f2d65e" />
        <Box position={[1, 4, 0]} color="#f2d65e" />
        <Box position={[2, 4, 0]} color="#f2d65e" />
        <Box position={[3, 4, 0]} color="#f2d65e" />
        <Box position={[4, 4, 0]} color="#f2d65e" />
        <Box position={[5, 4, 0]} color="#f2d65e" />
        <Box position={[6, 4, 0]} color="#f2d65e" />
        <Box position={[7, 4, 0]} color="#f2d65e" />
        <Box position={[8, 4, 0]} color="#0e1a38" />

        <Box position={[-7, 3, 0]} color="#0e1a38" />
        <Box position={[-6, 3, 0]} color="#0e1a38" />
        <Box position={[-5, 3, 0]} color="#0e1a38" />
        <Box position={[-4, 3, 0]} color="#0e1a38" />
        <Box position={[-3, 3, 0]} color="#0e1a38" />
        <Box position={[-2, 3, 0]} color="#0e1a38" />
        <Box position={[-1, 3, 0]} color="#0e1a38" />
        <Box position={[0, 3, 0]} color="#0e1a38" />
        <Box position={[1, 3, 0]} color="#0e1a38" />
        <Box position={[2, 3, 0]} color="#0e1a38" />
        <Box position={[3, 3, 0]} color="#0e1a38" />
        <Box position={[4, 3, 0]} color="#0e1a38" />
        <Box position={[5, 3, 0]} color="#0e1a38" />
        <Box position={[6, 3, 0]} color="#0e1a38" />
        <Box position={[7, 3, 0]} color="#0e1a38" />
      </>
    );
  }

  return <>{generateHat()}</>;
};

export const MonkeEyes: FC<Props> = ({ x }) => {
  const generateEyes = () => {
    if (x == "VR Glasses") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Laser Eyes") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Cool Glasses") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Vipers") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Yellow Glasses") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "3D Glasses") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "None") {
      return <></>;
    }
    if (x == "Gold Glasses") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Green Glasses") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Purple Glasses") {
      return (
        <>
          <Box position={[-4, -1, 0]} color="#c5cfcb" />
        </>
      );
    }
  };
  return <>{generateEyes()}</>;
};

export const MonkeMouth: FC<Props> = ({ x }) => {
  const generateMouth = () => {
    if (x == "Cigarette") {
      return (
        <>
          <Box position={[6, -4, 0]} color="#eceee9" />
          <Box position={[7, -4, 0]} color="#eceee9" />
          <Box position={[8, -4, 0]} color="#eceee9" />
          <Box position={[9, -4, 0]} color="#eceee9" />
          <Box position={[10, -4, 0]} color="#ee9d2f" />
          <Box position={[10, -2, 0]} color="#c5cecb" />
          <Box position={[10, 0, 0]} color="#c5cecb" />
          <Box position={[10, 2, 0]} color="#c5cecb" />
          <Box position={[9, 3, 0]} color="#c5cecb" />
          <Box position={[10, 3, 0]} color="#c5cecb" />
          <Box position={[11, 3, 0]} color="#c5cecb" />
          <Box position={[9, 4, 0]} color="#c5cecb" />
          <Box position={[10, 4, 0]} color="#c5cecb" />
          <Box position={[11, 4, 0]} color="#c5cecb" />
        </>
      );
    }
    if (x == "Vape") {
      return (
        <>
          <Box position={[6, -4, 0]} color="#4f7177" />
          <Box position={[7, -4, 0]} color="#4f7177" />
          <Box position={[8, -4, 0]} color="#4f7177" />
          <Box position={[9, -4, 0]} color="#4f7177" />
          <Box position={[10, -4, 0]} color="#5cbad4" />

          <Box position={[10, -2, 0]} color="#a5b6b1" />
          <Box position={[10, -1, 0]} color="#a5b6b1" />
          <Box position={[10, 0, 0]} color="#a5b6b1" />
          <Box position={[10, 1, 0]} color="#a5b6b1" />
        </>
      );
    }
    if (x == "Pipe") {
      return (
        <>
          <Box position={[5, -5, 0]} color="#602020" />
          <Box position={[6, -6, 0]} color="#602020" />
          <Box position={[7, -7, 0]} color="#602020" />
          <Box position={[8, -8, 0]} color="#602020" />
          <Box position={[9, -8, 0]} color="#602020" />
          <Box position={[10, -8, 0]} color="#602020" />
          <Box position={[9, -7, 0]} color="#602020" />
          <Box position={[10, -7, 0]} color="#602020" />
          <Box position={[9, -6, 0]} color="#0e1a38" />
          <Box position={[10, -6, 0]} color="#0e1a38" />
          <Box position={[11, -6, 0]} color="#0e1a38" />
          <Box position={[11, -7, 0]} color="#0e1a38" />
          <Box position={[11, -8, 0]} color="#0e1a38" />
          <Box position={[10, -9, 0]} color="#0e1a38" />
          <Box position={[9, -9, 0]} color="#0e1a38" />
          <Box position={[8, -9, 0]} color="#0e1a38" />
          <Box position={[7, -8, 0]} color="#0e1a38" />
          <Box position={[7, -6, 0]} color="#0e1a38" />
          <Box position={[8, -7, 0]} color="#0e1a38" />
          <Box position={[6, -7, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[10, -4, 0]} color="#c5cfcb" />
          <Box position={[10, -2, 0]} color="#c5cfcb" />
          <Box position={[10, 2, 0]} color="#c5cfcb" />
          <Box position={[9, 0, 0]} color="#c5cfcb" />
          <Box position={[10, 0, 0]} color="#c5cfcb" />
          <Box position={[11, 0, 0]} color="#c5cfcb" />
          <Box position={[9, 1, 0]} color="#c5cfcb" />
          <Box position={[10, 1, 0]} color="#c5cfcb" />
          <Box position={[11, 1, 0]} color="#c5cfcb" />
        </>
      );
    }
    if (x == "Mask") {
      return (
        <>
          <Box position={[0, -2, 0]} color="#0e1a38" />
          <Box position={[1, -2, 0]} color="#0e1a38" />
          <Box position={[2, -2, 0]} color="#0e1a38" />
          <Box position={[3, -2, 0]} color="#0e1a38" />
          <Box position={[4, -2, 0]} color="#0e1a38" />
          <Box position={[5, -2, 0]} color="#0e1a38" />
          <Box position={[6, -1, 0]} color="#0e1a38" />
          <Box position={[7, -1, 0]} color="#0e1a38" />
          <Box position={[8, -2, 0]} color="#0e1a38" />
          <Box position={[8, -3, 0]} color="#0e1a38" />
          <Box position={[7, -4, 0]} color="#0e1a38" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#0e1a38" />
          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-3, 0, 0]} color="#0e1a38" />
          <Box position={[-4, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#0e1a38" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[-2, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#1a2c37" />
          <Box position={[-4, -2, 0]} color="#1a2c37" />
          <Box position={[-3, -3, 0]} color="#1a2c37" />
          <Box position={[-2, -3, 0]} color="#1a2c37" />
          <Box position={[-1, -4, 0]} color="#1a2c37" />
          <Box position={[0, -5, 0]} color="#1a2c37" />
          <Box position={[1, -5, 0]} color="#1a2c37" />
          <Box position={[2, -5, 0]} color="#1a2c37" />
          <Box position={[3, -5, 0]} color="#1a2c37" />
          <Box position={[4, -5, 0]} color="#1a2c37" />
          <Box position={[5, -5, 0]} color="#1a2c37" />
          <Box position={[6, -4, 0]} color="#1a2c37" />
          <Box position={[7, -3, 0]} color="#1a2c37" />
          <Box position={[-4, -1, 0]} color="#334950" />
          <Box position={[-3, -1, 0]} color="#334950" />
          <Box position={[-3, -2, 0]} color="#334950" />
          <Box position={[-2, -2, 0]} color="#334950" />
          <Box position={[-1, -2, 0]} color="#334950" />
          <Box position={[-1, -3, 0]} color="#334950" />
          <Box position={[0, -3, 0]} color="#334950" />
          <Box position={[1, -3, 0]} color="#334950" />
          <Box position={[2, -3, 0]} color="#334950" />
          <Box position={[3, -3, 0]} color="#334950" />
          <Box position={[4, -3, 0]} color="#334950" />
          <Box position={[5, -3, 0]} color="#334950" />
          <Box position={[6, -3, 0]} color="#334950" />
          <Box position={[6, -2, 0]} color="#334950" />
          <Box position={[7, -2, 0]} color="#334950" />
          <Box position={[0, -4, 0]} color="#334950" />
          <Box position={[1, -4, 0]} color="#334950" />
          <Box position={[2, -4, 0]} color="#334950" />
          <Box position={[3, -4, 0]} color="#334950" />
          <Box position={[4, -4, 0]} color="#334950" />
          <Box position={[5, -4, 0]} color="#334950" />
        </>
      );
    }
    return <></>;
  };
  return <>{generateMouth()}</>;
};

export const MonkeType: FC<Props> = ({ x }) => {
  const generateType = () => {
    if (x == "Alien") {
      return (
        <>
          <Box position={[-3, 5, 0]} color="#0e1a38" />
          <Box position={[-2, 5, 0]} color="#0e1a38" />
          <Box position={[-1, 5, 0]} color="#0e1a38" />
          <Box position={[0, 5, 0]} color="#0e1a38" />
          <Box position={[1, 5, 0]} color="#0e1a38" />
          <Box position={[2, 5, 0]} color="#0e1a38" />
          <Box position={[3, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 4, 0]} color="#0e1a38" />
          <Box position={[-3, 4, 0]} color="#3585ba" />
          <Box position={[-2, 4, 0]} color="#4f9dc4" />
          <Box position={[-1, 4, 0]} color="#4f9dc4" />
          <Box position={[0, 4, 0]} color="#4f9dc4" />
          <Box position={[1, 4, 0]} color="#4f9dc4" />
          <Box position={[2, 4, 0]} color="#4f9dc4" />
          <Box position={[3, 4, 0]} color="#4f9dc4" />
          <Box position={[4, 4, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#3585ba" />
          <Box position={[-3, 3, 0]} color="#4f9dc4" />
          <Box position={[-2, 3, 0]} color="#4f9dc4" />
          <Box position={[-1, 3, 0]} color="#4f9dc4" />
          <Box position={[0, 3, 0]} color="#c3f3f4" />
          <Box position={[1, 3, 0]} color="#c3f3f4" />
          <Box position={[2, 3, 0]} color="#4f9dc4" />
          <Box position={[3, 3, 0]} color="#4f9dc4" />
          <Box position={[4, 3, 0]} color="#c3f3f4" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 2, 0]} color="#0e1a38" />
          <Box position={[-5, 2, 0]} color="#3585ba" />
          <Box position={[-4, 2, 0]} color="#4f9dc4" />
          <Box position={[-3, 2, 0]} color="#4f9dc4" />
          <Box position={[-2, 2, 0]} color="#4f9dc4" />
          <Box position={[-1, 2, 0]} color="#c3f3f4" />
          <Box position={[0, 2, 0]} color="#c3f3f4" />
          <Box position={[1, 2, 0]} color="#c3f3f4" />
          <Box position={[2, 2, 0]} color="#c3f3f4" />
          <Box position={[3, 2, 0]} color="#c3f3f4" />
          <Box position={[4, 2, 0]} color="#c3f3f4" />
          <Box position={[5, 2, 0]} color="#c3f3f4" />
          <Box position={[6, 2, 0]} color="#0e1a38" />
          <Box position={[-6, 1, 0]} color="#0e1a38" />
          <Box position={[-5, 1, 0]} color="#3585ba" />
          <Box position={[-4, 1, 0]} color="#4f9dc4" />
          <Box position={[-3, 1, 0]} color="#4f9dc4" />
          <Box position={[-2, 1, 0]} color="#c3f3f4" />
          <Box position={[-1, 1, 0]} color="#c3f3f4" />
          <Box position={[0, 1, 0]} color="#c3f3f4" />
          <Box position={[1, 1, 0]} color="#35d7c0" />
          <Box position={[2, 1, 0]} color="#c3f3f4" />
          <Box position={[3, 1, 0]} color="#c3f3f4" />
          <Box position={[4, 1, 0]} color="#35d7c0" />
          <Box position={[5, 1, 0]} color="#c3f3f4" />
          <Box position={[6, 1, 0]} color="#0e1a38" />
          <Box position={[-6, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#3585ba" />
          <Box position={[-4, 0, 0]} color="#0e1a38" />
          <Box position={[-3, 0, 0]} color="#4f9dc4" />
          <Box position={[-2, 0, 0]} color="#c3f3f4" />
          <Box position={[-1, 0, 0]} color="#c3f3f4" />
          <Box position={[0, 0, 0]} color="#c3f3f4" />
          <Box position={[1, 0, 0]} color="#35d7c0" />
          <Box position={[2, 0, 0]} color="#c3f3f4" />
          <Box position={[3, 0, 0]} color="#c3f3f4" />
          <Box position={[4, 0, 0]} color="#35d7c0" />
          <Box position={[5, 0, 0]} color="#c3f3f4" />
          <Box position={[6, 0, 0]} color="#0e1a38" />
          <Box position={[-6, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#3585ba" />
          <Box position={[-4, -1, 0]} color="#0e1a38" />
          <Box position={[-3, -1, 0]} color="#4f9dc4" />
          <Box position={[-2, -1, 0]} color="#c3f3f4" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[0, -1, 0]} color="#c3f3f4" />
          <Box position={[1, -1, 0]} color="#c3f3f4" />
          <Box position={[2, -1, 0]} color="#c3f3f4" />
          <Box position={[3, -1, 0]} color="#c3f3f4" />
          <Box position={[4, -1, 0]} color="#c3f3f4" />
          <Box position={[5, -1, 0]} color="#c3f3f4" />
          <Box position={[6, -1, 0]} color="#c3f3f4" />
          <Box position={[7, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -2, 0]} color="#3585ba" />
          <Box position={[-3, -2, 0]} color="#4f9dc4" />
          <Box position={[-2, -2, 0]} color="#0e1a38" />
          <Box position={[-1, -2, 0]} color="#c3f3f4" />
          <Box position={[0, -2, 0]} color="#c3f3f4" />
          <Box position={[1, -2, 0]} color="#c3f3f4" />
          <Box position={[2, -2, 0]} color="#c3f3f4" />
          <Box position={[3, -2, 0]} color="#c3f3f4" />
          <Box position={[4, -2, 0]} color="#c3f3f4" />
          <Box position={[5, -2, 0]} color="#c3f3f4" />
          <Box position={[6, -2, 0]} color="#c3f3f4" />
          <Box position={[7, -2, 0]} color="#c3f3f4" />
          <Box position={[8, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -3, 0]} color="#4f9dc4" />
          <Box position={[-2, -3, 0]} color="#0e1a38" />
          <Box position={[-1, -3, 0]} color="#c3f3f4" />
          <Box position={[0, -3, 0]} color="#c3f3f4" />
          <Box position={[1, -3, 0]} color="#c3f3f4" />
          <Box position={[2, -3, 0]} color="#c3f3f4" />
          <Box position={[3, -3, 0]} color="#c3f3f4" />
          <Box position={[4, -3, 0]} color="#c3f3f4" />
          <Box position={[5, -3, 0]} color="#c3f3f4" />
          <Box position={[6, -3, 0]} color="#c3f3f4" />
          <Box position={[7, -3, 0]} color="#c3f3f4" />
          <Box position={[8, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#c3f3f4" />
          <Box position={[-1, -4, 0]} color="#0e1a38" />
          <Box position={[0, -4, 0]} color="#0e1a38" />
          <Box position={[1, -4, 0]} color="#0e1a38" />
          <Box position={[2, -4, 0]} color="#0e1a38" />
          <Box position={[3, -4, 0]} color="#0e1a38" />
          <Box position={[4, -4, 0]} color="#0e1a38" />
          <Box position={[5, -4, 0]} color="#0e1a38" />
          <Box position={[6, -4, 0]} color="#0e1a38" />
          <Box position={[7, -4, 0]} color="#0e1a38" />
          <Box position={[-3, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#c3f3f4" />
          <Box position={[0, -5, 0]} color="#c3f3f4" />
          <Box position={[1, -5, 0]} color="#c3f3f4" />
          <Box position={[2, -5, 0]} color="#c3f3f4" />
          <Box position={[3, -5, 0]} color="#c3f3f4" />
          <Box position={[4, -5, 0]} color="#c3f3f4" />
          <Box position={[5, -5, 0]} color="#c3f3f4" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[-4, -6, 0]} color="#0e1a38" />
          <Box position={[-3, -6, 0]} color="#3585ba" />
          <Box position={[-2, -6, 0]} color="#4f9dc4" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[-5, -7, 0]} color="#0e1a38" />
          <Box position={[-4, -7, 0]} color="#3585ba" />
          <Box position={[-3, -7, 0]} color="#4f9dc4" />
          <Box position={[-2, -7, 0]} color="#4f9dc4" />
          <Box position={[-1, -7, 0]} color="#4f9dc4" />
          <Box position={[0, -7, 0]} color="#4f9dc4" />
          <Box position={[1, -7, 0]} color="#0e1a38" />
          <Box position={[2, -7, 0]} color="#4f9dc4" />
          <Box position={[3, -7, 0]} color="#4f9dc4" />
          <Box position={[4, -7, 0]} color="#0e1a38" />
          <Box position={[-6, -8, 0]} color="#0e1a38" />
          <Box position={[-5, -8, 0]} color="#3585ba" />
          <Box position={[-4, -8, 0]} color="#4f9dc4" />
          <Box position={[-3, -8, 0]} color="#4f9dc4" />
          <Box position={[-2, -8, 0]} color="#4f9dc4" />
          <Box position={[-1, -8, 0]} color="#0e1a38" />
          <Box position={[0, -8, 0]} color="#4f9dc4" />
          <Box position={[1, -8, 0]} color="#4f9dc4" />
          <Box position={[2, -8, 0]} color="#0e1a38" />
          <Box position={[3, -8, 0]} color="#4f9dc4" />
          <Box position={[4, -8, 0]} color="#4f9dc4" />
          <Box position={[5, -8, 0]} color="#0e1a38" />
          <Box position={[6, -8, 0]} color="#0e1a38" />
          <Box position={[-7, -9, 0]} color="#0e1a38" />
          <Box position={[-6, -9, 0]} color="#3585ba" />
          <Box position={[-5, -9, 0]} color="#4f9dc4" />
          <Box position={[-4, -9, 0]} color="#4f9dc4" />
          <Box position={[-3, -9, 0]} color="#4f9dc4" />
          <Box position={[-2, -9, 0]} color="#4f9dc4" />
          <Box position={[-1, -9, 0]} color="#4f9dc4" />
          <Box position={[0, -9, 0]} color="#0e1a38" />
          <Box position={[1, -9, 0]} color="#4f9dc4" />
          <Box position={[2, -9, 0]} color="#4f9dc4" />
          <Box position={[3, -9, 0]} color="#0e1a38" />
          <Box position={[4, -9, 0]} color="#4f9dc4" />
          <Box position={[5, -9, 0]} color="#4f9dc4" />
          <Box position={[6, -9, 0]} color="#4f9dc4" />
          <Box position={[7, -9, 0]} color="#0e1a38" />
          <Box position={[-8, -10, 0]} color="#0e1a38" />
          <Box position={[-7, -10, 0]} color="#3585ba" />
          <Box position={[-6, -10, 0]} color="#4f9dc4" />
          <Box position={[-5, -10, 0]} color="#4f9dc4" />
          <Box position={[-4, -10, 0]} color="#4f9dc4" />
          <Box position={[-3, -10, 0]} color="#4f9dc4" />
          <Box position={[-2, -10, 0]} color="#4f9dc4" />
          <Box position={[-1, -10, 0]} color="#4f9dc4" />
          <Box position={[0, -10, 0]} color="#0e1a38" />
          <Box position={[1, -10, 0]} color="#4f9dc4" />
          <Box position={[2, -10, 0]} color="#4f9dc4" />
          <Box position={[3, -10, 0]} color="#4f9dc4" />
          <Box position={[4, -10, 0]} color="#0e1a38" />
          <Box position={[5, -10, 0]} color="#4f9dc4" />
          <Box position={[6, -10, 0]} color="#4f9dc4" />
          <Box position={[7, -10, 0]} color="#4f9dc4" />
          <Box position={[8, -10, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Zombie") {
      return (
        <>
          <Box position={[-3, 5, 0]} color="#0e1a38" />
          <Box position={[-2, 5, 0]} color="#0e1a38" />
          <Box position={[-1, 5, 0]} color="#0e1a38" />
          <Box position={[0, 5, 0]} color="#0e1a38" />
          <Box position={[1, 5, 0]} color="#0e1a38" />
          <Box position={[2, 5, 0]} color="#0e1a38" />
          <Box position={[3, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 4, 0]} color="#0e1a38" />
          <Box position={[-3, 4, 0]} color="#195624" />
          <Box position={[-2, 4, 0]} color="#347551" />
          <Box position={[-1, 4, 0]} color="#347551" />
          <Box position={[0, 4, 0]} color="#347551" />
          <Box position={[1, 4, 0]} color="#347551" />
          <Box position={[2, 4, 0]} color="#347551" />
          <Box position={[3, 4, 0]} color="#347551" />
          <Box position={[4, 4, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#195624" />
          <Box position={[-3, 3, 0]} color="#347551" />
          <Box position={[-2, 3, 0]} color="#347551" />
          <Box position={[-1, 3, 0]} color="#347551" />
          <Box position={[0, 3, 0]} color="#49a66e" />
          <Box position={[1, 3, 0]} color="#49a66e" />
          <Box position={[2, 3, 0]} color="#347551" />
          <Box position={[3, 3, 0]} color="#347551" />
          <Box position={[4, 3, 0]} color="#49a66e" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 2, 0]} color="#0e1a38" />
          <Box position={[-5, 2, 0]} color="#195624" />
          <Box position={[-4, 2, 0]} color="#347551" />
          <Box position={[-3, 2, 0]} color="#347551" />
          <Box position={[-2, 2, 0]} color="#347551" />
          <Box position={[-1, 2, 0]} color="#49a66e" />
          <Box position={[0, 2, 0]} color="#49a66e" />
          <Box position={[1, 2, 0]} color="#49a66e" />
          <Box position={[2, 2, 0]} color="#49a66e" />
          <Box position={[3, 2, 0]} color="#49a66e" />
          <Box position={[4, 2, 0]} color="#49a66e" />
          <Box position={[5, 2, 0]} color="#49a66e" />
          <Box position={[6, 2, 0]} color="#0e1a38" />
          <Box position={[-6, 1, 0]} color="#0e1a38" />
          <Box position={[-5, 1, 0]} color="#195624" />
          <Box position={[-4, 1, 0]} color="#347551" />
          <Box position={[-3, 1, 0]} color="#347551" />
          <Box position={[-2, 1, 0]} color="#49a66e" />
          <Box position={[-1, 1, 0]} color="#49a66e" />
          <Box position={[0, 1, 0]} color="#49a66e" />
          <Box position={[1, 1, 0]} color="#f24949" />
          <Box position={[2, 1, 0]} color="#49a66e" />
          <Box position={[3, 1, 0]} color="#49a66e" />
          <Box position={[4, 1, 0]} color="#f24949" />
          <Box position={[5, 1, 0]} color="#49a66e" />
          <Box position={[6, 1, 0]} color="#0e1a38" />
          <Box position={[-6, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#195624" />
          <Box position={[-4, 0, 0]} color="#0e1a38" />
          <Box position={[-3, 0, 0]} color="#347551" />
          <Box position={[-2, 0, 0]} color="#49a66e" />
          <Box position={[-1, 0, 0]} color="#49a66e" />
          <Box position={[0, 0, 0]} color="#49a66e" />
          <Box position={[1, 0, 0]} color="#f24949" />
          <Box position={[2, 0, 0]} color="#49a66e" />
          <Box position={[3, 0, 0]} color="#49a66e" />
          <Box position={[4, 0, 0]} color="#f24949" />
          <Box position={[5, 0, 0]} color="#49a66e" />
          <Box position={[6, 0, 0]} color="#0e1a38" />
          <Box position={[-6, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#195624" />
          <Box position={[-4, -1, 0]} color="#0e1a38" />
          <Box position={[-3, -1, 0]} color="#347551" />
          <Box position={[-2, -1, 0]} color="#49a66e" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[0, -1, 0]} color="#49a66e" />
          <Box position={[1, -1, 0]} color="#49a66e" />
          <Box position={[2, -1, 0]} color="#49a66e" />
          <Box position={[3, -1, 0]} color="#49a66e" />
          <Box position={[4, -1, 0]} color="#49a66e" />
          <Box position={[5, -1, 0]} color="#49a66e" />
          <Box position={[6, -1, 0]} color="#49a66e" />
          <Box position={[7, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -2, 0]} color="#195624" />
          <Box position={[-3, -2, 0]} color="#347551" />
          <Box position={[-2, -2, 0]} color="#0e1a38" />
          <Box position={[-1, -2, 0]} color="#49a66e" />
          <Box position={[0, -2, 0]} color="#49a66e" />
          <Box position={[1, -2, 0]} color="#49a66e" />
          <Box position={[2, -2, 0]} color="#49a66e" />
          <Box position={[3, -2, 0]} color="#49a66e" />
          <Box position={[4, -2, 0]} color="#49a66e" />
          <Box position={[5, -2, 0]} color="#49a66e" />
          <Box position={[6, -2, 0]} color="#49a66e" />
          <Box position={[7, -2, 0]} color="#49a66e" />
          <Box position={[8, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -3, 0]} color="#347551" />
          <Box position={[-2, -3, 0]} color="#0e1a38" />
          <Box position={[-1, -3, 0]} color="#49a66e" />
          <Box position={[0, -3, 0]} color="#49a66e" />
          <Box position={[1, -3, 0]} color="#49a66e" />
          <Box position={[2, -3, 0]} color="#49a66e" />
          <Box position={[3, -3, 0]} color="#49a66e" />
          <Box position={[4, -3, 0]} color="#49a66e" />
          <Box position={[5, -3, 0]} color="#49a66e" />
          <Box position={[6, -3, 0]} color="#49a66e" />
          <Box position={[7, -3, 0]} color="#49a66e" />
          <Box position={[8, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#49a66e" />
          <Box position={[-1, -4, 0]} color="#0e1a38" />
          <Box position={[0, -4, 0]} color="#0e1a38" />
          <Box position={[1, -4, 0]} color="#0e1a38" />
          <Box position={[2, -4, 0]} color="#0e1a38" />
          <Box position={[3, -4, 0]} color="#0e1a38" />
          <Box position={[4, -4, 0]} color="#0e1a38" />
          <Box position={[5, -4, 0]} color="#0e1a38" />
          <Box position={[6, -4, 0]} color="#0e1a38" />
          <Box position={[7, -4, 0]} color="#0e1a38" />
          <Box position={[-3, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#49a66e" />
          <Box position={[0, -5, 0]} color="#49a66e" />
          <Box position={[1, -5, 0]} color="#49a66e" />
          <Box position={[2, -5, 0]} color="#49a66e" />
          <Box position={[3, -5, 0]} color="#49a66e" />
          <Box position={[4, -5, 0]} color="#49a66e" />
          <Box position={[5, -5, 0]} color="#49a66e" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[-4, -6, 0]} color="#0e1a38" />
          <Box position={[-3, -6, 0]} color="#195624" />
          <Box position={[-2, -6, 0]} color="#347551" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[-5, -7, 0]} color="#0e1a38" />
          <Box position={[-4, -7, 0]} color="#195624" />
          <Box position={[-3, -7, 0]} color="#347551" />
          <Box position={[-2, -7, 0]} color="#347551" />
          <Box position={[-1, -7, 0]} color="#347551" />
          <Box position={[0, -7, 0]} color="#347551" />
          <Box position={[1, -7, 0]} color="#0e1a38" />
          <Box position={[2, -7, 0]} color="#347551" />
          <Box position={[3, -7, 0]} color="#347551" />
          <Box position={[4, -7, 0]} color="#0e1a38" />
          <Box position={[-6, -8, 0]} color="#0e1a38" />
          <Box position={[-5, -8, 0]} color="#195624" />
          <Box position={[-4, -8, 0]} color="#347551" />
          <Box position={[-3, -8, 0]} color="#347551" />
          <Box position={[-2, -8, 0]} color="#347551" />
          <Box position={[-1, -8, 0]} color="#0e1a38" />
          <Box position={[0, -8, 0]} color="#347551" />
          <Box position={[1, -8, 0]} color="#347551" />
          <Box position={[2, -8, 0]} color="#0e1a38" />
          <Box position={[3, -8, 0]} color="#347551" />
          <Box position={[4, -8, 0]} color="#347551" />
          <Box position={[5, -8, 0]} color="#0e1a38" />
          <Box position={[6, -8, 0]} color="#0e1a38" />
          <Box position={[-7, -9, 0]} color="#0e1a38" />
          <Box position={[-6, -9, 0]} color="#195624" />
          <Box position={[-5, -9, 0]} color="#347551" />
          <Box position={[-4, -9, 0]} color="#347551" />
          <Box position={[-3, -9, 0]} color="#347551" />
          <Box position={[-2, -9, 0]} color="#347551" />
          <Box position={[-1, -9, 0]} color="#347551" />
          <Box position={[0, -9, 0]} color="#0e1a38" />
          <Box position={[1, -9, 0]} color="#347551" />
          <Box position={[2, -9, 0]} color="#347551" />
          <Box position={[3, -9, 0]} color="#0e1a38" />
          <Box position={[4, -9, 0]} color="#347551" />
          <Box position={[5, -9, 0]} color="#347551" />
          <Box position={[6, -9, 0]} color="#347551" />
          <Box position={[7, -9, 0]} color="#0e1a38" />
          <Box position={[-8, -10, 0]} color="#0e1a38" />
          <Box position={[-7, -10, 0]} color="#195624" />
          <Box position={[-6, -10, 0]} color="#347551" />
          <Box position={[-5, -10, 0]} color="#347551" />
          <Box position={[-4, -10, 0]} color="#347551" />
          <Box position={[-3, -10, 0]} color="#347551" />
          <Box position={[-2, -10, 0]} color="#347551" />
          <Box position={[-1, -10, 0]} color="#347551" />
          <Box position={[0, -10, 0]} color="#0e1a38" />
          <Box position={[1, -10, 0]} color="#347551" />
          <Box position={[2, -10, 0]} color="#347551" />
          <Box position={[3, -10, 0]} color="#347551" />
          <Box position={[4, -10, 0]} color="#0e1a38" />
          <Box position={[5, -10, 0]} color="#347551" />
          <Box position={[6, -10, 0]} color="#347551" />
          <Box position={[7, -10, 0]} color="#347551" />
          <Box position={[8, -10, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Solana") {
      return (
        <>
          <Box position={[-3, 5, 0]} color="#0e1a38" />
          <Box position={[-2, 5, 0]} color="#0e1a38" />
          <Box position={[-1, 5, 0]} color="#0e1a38" />
          <Box position={[0, 5, 0]} color="#0e1a38" />
          <Box position={[1, 5, 0]} color="#0e1a38" />
          <Box position={[2, 5, 0]} color="#0e1a38" />
          <Box position={[3, 5, 0]} color="#0e1a38" />

          <Box position={[-4, 4, 0]} color="#0e1a38" />
          <Box position={[-3, 4, 0]} color="#aa4eb9" />
          <Box position={[-2, 4, 0]} color="#e368f7" />
          <Box position={[-1, 4, 0]} color="#e368f7" />
          <Box position={[0, 4, 0]} color="#e368f7" />
          <Box position={[1, 4, 0]} color="#e368f7" />
          <Box position={[2, 4, 0]} color="#e368f7" />
          <Box position={[3, 4, 0]} color="#e368f7" />
          <Box position={[4, 4, 0]} color="#0e1a38" />

          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#905eb0" />
          <Box position={[-3, 3, 0]} color="#c07eec" />
          <Box position={[-2, 3, 0]} color="#c07eec" />
          <Box position={[-1, 3, 0]} color="#c07eec" />
          <Box position={[0, 3, 0]} color="#d7ad84" />
          <Box position={[1, 3, 0]} color="#d7ad84" />
          <Box position={[2, 3, 0]} color="#c07eec" />
          <Box position={[3, 3, 0]} color="#c07eec" />
          <Box position={[4, 3, 0]} color="#d7ad84" />
          <Box position={[5, 3, 0]} color="#0e1a38" />

          <Box position={[-6, 2, 0]} color="#0e1a38" />
          <Box position={[-5, 2, 0]} color="#7b6caa" />
          <Box position={[-4, 2, 0]} color="#a490e3" />
          <Box position={[-3, 2, 0]} color="#a490e3" />
          <Box position={[-2, 2, 0]} color="#a490e3" />
          <Box position={[-1, 2, 0]} color="#d7ad84" />
          <Box position={[0, 2, 0]} color="#d7ad84" />
          <Box position={[1, 2, 0]} color="#d7ad84" />
          <Box position={[2, 2, 0]} color="#d7ad84" />
          <Box position={[3, 2, 0]} color="#d7ad84" />
          <Box position={[4, 2, 0]} color="#d7ad84" />
          <Box position={[5, 2, 0]} color="#d7ad84" />
          <Box position={[6, 2, 0]} color="#0e1a38" />

          <Box position={[-6, 1, 0]} color="#0e1a38" />
          <Box position={[-5, 1, 0]} color="#6678a3" />
          <Box position={[-4, 1, 0]} color="#88a1da" />
          <Box position={[-3, 1, 0]} color="#88a1da" />
          <Box position={[-2, 1, 0]} color="#d7ad84" />
          <Box position={[-1, 1, 0]} color="#d7ad84" />
          <Box position={[0, 1, 0]} color="#d7ad84" />
          <Box position={[1, 1, 0]} color="#0e1a38" />
          <Box position={[2, 1, 0]} color="#d7ad84" />
          <Box position={[3, 1, 0]} color="#d7ad84" />
          <Box position={[4, 1, 0]} color="#0e1a38" />
          <Box position={[5, 1, 0]} color="#d7ad84" />
          <Box position={[6, 1, 0]} color="#0e1a38" />

          <Box position={[-6, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#51869d" />
          <Box position={[-4, 0, 0]} color="#0e1a38" />
          <Box position={[-3, 0, 0]} color="#6cb3d2" />
          <Box position={[-2, 0, 0]} color="#d7ad84" />
          <Box position={[-1, 0, 0]} color="#d7ad84" />
          <Box position={[0, 0, 0]} color="#d7ad84" />
          <Box position={[1, 0, 0]} color="#0e1a38" />
          <Box position={[2, 0, 0]} color="#d7ad84" />
          <Box position={[3, 0, 0]} color="#d7ad84" />
          <Box position={[4, 0, 0]} color="#0e1a38" />
          <Box position={[5, 0, 0]} color="#d7ad84" />
          <Box position={[6, 0, 0]} color="#0e1a38" />

          <Box position={[-6, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#3c9396" />
          <Box position={[-4, -1, 0]} color="#0e1a38" />
          <Box position={[-3, -1, 0]} color="#50c5c9" />
          <Box position={[-2, -1, 0]} color="#d7ad84" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[0, -1, 0]} color="#d7ad84" />
          <Box position={[1, -1, 0]} color="#d7ad84" />
          <Box position={[2, -1, 0]} color="#d7ad84" />
          <Box position={[3, -1, 0]} color="#d7ad84" />
          <Box position={[4, -1, 0]} color="#d7ad84" />
          <Box position={[5, -1, 0]} color="#d7ad84" />
          <Box position={[6, -1, 0]} color="#d7ad84" />
          <Box position={[7, -1, 0]} color="#0e1a38" />

          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -2, 0]} color="#27a190" />
          <Box position={[-3, -2, 0]} color="#34d7c0" />
          <Box position={[-2, -2, 0]} color="#0e1a38" />
          <Box position={[-1, -2, 0]} color="#d7ad84" />
          <Box position={[0, -2, 0]} color="#d7ad84" />
          <Box position={[1, -2, 0]} color="#d7ad84" />
          <Box position={[2, -2, 0]} color="#d7ad84" />
          <Box position={[3, -2, 0]} color="#d7ad84" />
          <Box position={[4, -2, 0]} color="#d7ad84" />
          <Box position={[5, -2, 0]} color="#d7ad84" />
          <Box position={[6, -2, 0]} color="#d7ad84" />
          <Box position={[7, -2, 0]} color="#d7ad84" />
          <Box position={[8, -2, 0]} color="#0e1a38" />

          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -3, 0]} color="#0af2b4" />
          <Box position={[-2, -3, 0]} color="#0e1a38" />
          <Box position={[-1, -3, 0]} color="#d7ad84" />
          <Box position={[0, -3, 0]} color="#d7ad84" />
          <Box position={[1, -3, 0]} color="#d7ad84" />
          <Box position={[2, -3, 0]} color="#d7ad84" />
          <Box position={[3, -3, 0]} color="#d7ad84" />
          <Box position={[4, -3, 0]} color="#d7ad84" />
          <Box position={[5, -3, 0]} color="#d7ad84" />
          <Box position={[6, -3, 0]} color="#d7ad84" />
          <Box position={[7, -3, 0]} color="#d7ad84" />
          <Box position={[8, -3, 0]} color="#0e1a38" />

          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#d7ad84" />
          <Box position={[-1, -4, 0]} color="#0e1a38" />
          <Box position={[0, -4, 0]} color="#0e1a38" />
          <Box position={[1, -4, 0]} color="#0e1a38" />
          <Box position={[2, -4, 0]} color="#0e1a38" />
          <Box position={[3, -4, 0]} color="#0e1a38" />
          <Box position={[4, -4, 0]} color="#0e1a38" />
          <Box position={[5, -4, 0]} color="#0e1a38" />
          <Box position={[6, -4, 0]} color="#0e1a38" />
          <Box position={[7, -4, 0]} color="#0e1a38" />

          <Box position={[-3, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#d7ad84" />
          <Box position={[0, -5, 0]} color="#d7ad84" />
          <Box position={[1, -5, 0]} color="#d7ad84" />
          <Box position={[2, -5, 0]} color="#d7ad84" />
          <Box position={[3, -5, 0]} color="#d7ad84" />
          <Box position={[4, -5, 0]} color="#d7ad84" />
          <Box position={[5, -5, 0]} color="#d7ad84" />
          <Box position={[6, -5, 0]} color="#0e1a38" />

          <Box position={[-4, -6, 0]} color="#0e1a38" />
          <Box position={[-3, -6, 0]} color="#aa4eb9" />
          <Box position={[-2, -6, 0]} color="#e368f7" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />

          <Box position={[-5, -7, 0]} color="#0e1a38" />
          <Box position={[-4, -7, 0]} color="#7b6caa" />
          <Box position={[-3, -7, 0]} color="#a490e3" />
          <Box position={[-2, -7, 0]} color="#a490e3" />
          <Box position={[-1, -7, 0]} color="#a490e3" />
          <Box position={[0, -7, 0]} color="#a490e3" />
          <Box position={[1, -7, 0]} color="#0e1a38" />
          <Box position={[2, -7, 0]} color="#a490e3" />
          <Box position={[3, -7, 0]} color="#a490e3" />
          <Box position={[4, -7, 0]} color="#0e1a38" />

          <Box position={[-6, -8, 0]} color="#0e1a38" />
          <Box position={[-5, -8, 0]} color="#51869d" />
          <Box position={[-4, -8, 0]} color="#6cb3d2" />
          <Box position={[-3, -8, 0]} color="#6cb3d2" />
          <Box position={[-2, -8, 0]} color="#6cb3d2" />
          <Box position={[-1, -8, 0]} color="#0e1a38" />
          <Box position={[0, -8, 0]} color="#6cb3d2" />
          <Box position={[1, -8, 0]} color="#6cb3d2" />
          <Box position={[2, -8, 0]} color="#0e1a38" />
          <Box position={[3, -8, 0]} color="#6cb3d2" />
          <Box position={[4, -8, 0]} color="#6cb3d2" />
          <Box position={[5, -8, 0]} color="#0e1a38" />
          <Box position={[6, -8, 0]} color="#0e1a38" />

          <Box position={[-7, -9, 0]} color="#0e1a38" />
          <Box position={[-6, -9, 0]} color="#27a190" />
          <Box position={[-5, -9, 0]} color="#34d7c0" />
          <Box position={[-4, -9, 0]} color="#34d7c0" />
          <Box position={[-3, -9, 0]} color="#34d7c0" />
          <Box position={[-2, -9, 0]} color="#34d7c0" />
          <Box position={[-1, -9, 0]} color="#34d7c0" />
          <Box position={[0, -9, 0]} color="#0e1a38" />
          <Box position={[1, -9, 0]} color="#34d7c0" />
          <Box position={[2, -9, 0]} color="#34d7c0" />
          <Box position={[3, -9, 0]} color="#0e1a38" />
          <Box position={[4, -9, 0]} color="#34d7c0" />
          <Box position={[5, -9, 0]} color="#34d7c0" />
          <Box position={[6, -9, 0]} color="#34d7c0" />
          <Box position={[7, -9, 0]} color="#0e1a38" />

          <Box position={[-8, -10, 0]} color="#0e1a38" />
          <Box position={[-7, -10, 0]} color="#08b587" />
          <Box position={[-6, -10, 0]} color="#0af2b4" />
          <Box position={[-5, -10, 0]} color="#0af2b4" />
          <Box position={[-4, -10, 0]} color="#0af2b4" />
          <Box position={[-3, -10, 0]} color="#0af2b4" />
          <Box position={[-2, -10, 0]} color="#0af2b4" />
          <Box position={[-1, -10, 0]} color="#0af2b4" />
          <Box position={[0, -10, 0]} color="#0e1a38" />
          <Box position={[1, -10, 0]} color="#0af2b4" />
          <Box position={[2, -10, 0]} color="#0af2b4" />
          <Box position={[3, -10, 0]} color="#0af2b4" />
          <Box position={[4, -10, 0]} color="#0e1a38" />
          <Box position={[5, -10, 0]} color="#0af2b4" />
          <Box position={[6, -10, 0]} color="#0af2b4" />
          <Box position={[7, -10, 0]} color="#0af2b4" />
          <Box position={[8, -10, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Skeleton") {
      return (
        <>
          <Box position={[-3, 5, 0]} color="#0e1a38" />
          <Box position={[-2, 5, 0]} color="#0e1a38" />
          <Box position={[-1, 5, 0]} color="#0e1a38" />
          <Box position={[0, 5, 0]} color="#0e1a38" />
          <Box position={[1, 5, 0]} color="#0e1a38" />
          <Box position={[2, 5, 0]} color="#0e1a38" />
          <Box position={[3, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 4, 0]} color="#0e1a38" />
          <Box position={[-3, 4, 0]} color="#c5cfcb" />
          <Box position={[-2, 4, 0]} color="#c5cfcb" />
          <Box position={[-1, 4, 0]} color="#c5cfcb" />
          <Box position={[0, 4, 0]} color="#c5cfcb" />
          <Box position={[1, 4, 0]} color="#c5cfcb" />
          <Box position={[2, 4, 0]} color="#ebede8" />
          <Box position={[3, 4, 0]} color="#ebede8" />
          <Box position={[4, 4, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#c5cfcb" />
          <Box position={[-3, 3, 0]} color="#c5cfcb" />
          <Box position={[-2, 3, 0]} color="#c5cfcb" />
          <Box position={[-1, 3, 0]} color="#c5cfcb" />
          <Box position={[0, 3, 0]} color="#c5cfcb" />
          <Box position={[1, 3, 0]} color="#c5cfcb" />
          <Box position={[2, 3, 0]} color="#c5cfcb" />
          <Box position={[3, 3, 0]} color="#c5cfcb" />
          <Box position={[4, 3, 0]} color="#ebede8" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 2, 0]} color="#0e1a38" />
          <Box position={[-5, 2, 0]} color="#c5cfcb" />
          <Box position={[-4, 2, 0]} color="#c5cfcb" />
          <Box position={[-3, 2, 0]} color="#c5cfcb" />
          <Box position={[-2, 2, 0]} color="#7c9796" />
          <Box position={[-1, 2, 0]} color="#c5cfcb" />
          <Box position={[0, 2, 0]} color="#c5cfcb" />
          <Box position={[1, 2, 0]} color="#c5cfcb" />
          <Box position={[2, 2, 0]} color="#c5cfcb" />
          <Box position={[3, 2, 0]} color="#c5cfcb" />
          <Box position={[4, 2, 0]} color="#c5cfcb" />
          <Box position={[5, 2, 0]} color="#c5cfcb" />
          <Box position={[6, 2, 0]} color="#0e1a38" />
          <Box position={[-6, 1, 0]} color="#0e1a38" />
          <Box position={[-5, 1, 0]} color="#7c9796" />
          <Box position={[-4, 1, 0]} color="#c5cfcb" />
          <Box position={[-3, 1, 0]} color="#7c9796" />
          <Box position={[-2, 1, 0]} color="#c5cfcb" />
          <Box position={[-1, 1, 0]} color="#c5cfcb" />
          <Box position={[0, 1, 0]} color="#c5cfcb" />
          <Box position={[1, 1, 0]} color="#0e1a38" />
          <Box position={[2, 1, 0]} color="#0e1a38" />
          <Box position={[3, 1, 0]} color="#c5cfcb" />
          <Box position={[4, 1, 0]} color="#0e1a38" />
          <Box position={[5, 1, 0]} color="#0e1a38" />
          <Box position={[6, 1, 0]} color="#0e1a38" />
          <Box position={[-6, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#7c9796" />
          <Box position={[-4, 0, 0]} color="#c5cfcb" />
          <Box position={[-3, 0, 0]} color="#7c9796" />
          <Box position={[-2, 0, 0]} color="#c5cfcb" />
          <Box position={[-1, 0, 0]} color="#c5cfcb" />
          <Box position={[0, 0, 0]} color="#c5cfcb" />
          <Box position={[1, 0, 0]} color="#0e1a38" />
          <Box position={[2, 0, 0]} color="#c5cfcb" />
          <Box position={[3, 0, 0]} color="#c5cfcb" />
          <Box position={[4, 0, 0]} color="#0e1a38" />
          <Box position={[5, 0, 0]} color="#c5cfcb" />
          <Box position={[6, 0, 0]} color="#0e1a38" />
          <Box position={[-6, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#7c9796" />
          <Box position={[-4, -1, 0]} color="#7c9796" />
          <Box position={[-3, -1, 0]} color="#c5cfcb" />
          <Box position={[-2, -1, 0]} color="#c5cfcb" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[0, -1, 0]} color="#c5cfcb" />
          <Box position={[1, -1, 0]} color="#c5cfcb" />
          <Box position={[2, -1, 0]} color="#c5cfcb" />
          <Box position={[3, -1, 0]} color="#0e1a38" />
          <Box position={[4, -1, 0]} color="#c5cfcb" />
          <Box position={[5, -1, 0]} color="#c5cfcb" />
          <Box position={[6, -1, 0]} color="#c5cfcb" />
          <Box position={[7, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -2, 0]} color="#7c9796" />
          <Box position={[-3, -2, 0]} color="#7c9796" />
          <Box position={[-2, -2, 0]} color="#0e1a38" />
          <Box position={[-1, -2, 0]} color="#c5cfcb" />
          <Box position={[0, -2, 0]} color="#c5cfcb" />
          <Box position={[1, -2, 0]} color="#c5cfcb" />
          <Box position={[2, -2, 0]} color="#c5cfcb" />
          <Box position={[3, -2, 0]} color="#c5cfcb" />
          <Box position={[4, -2, 0]} color="#c5cfcb" />
          <Box position={[5, -2, 0]} color="#c5cfcb" />
          <Box position={[6, -2, 0]} color="#c5cfcb" />
          <Box position={[7, -2, 0]} color="#c5cfcb" />
          <Box position={[8, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -3, 0]} color="#7c9796" />
          <Box position={[-2, -3, 0]} color="#0e1a38" />
          <Box position={[-1, -3, 0]} color="#c5cfcb" />
          <Box position={[0, -3, 0]} color="#0e1a38" />
          <Box position={[1, -3, 0]} color="#c5cfcb" />
          <Box position={[2, -3, 0]} color="#0e1a38" />
          <Box position={[3, -3, 0]} color="#c5cfcb" />
          <Box position={[4, -3, 0]} color="#0e1a38" />
          <Box position={[5, -3, 0]} color="#c5cfcb" />
          <Box position={[6, -3, 0]} color="#0e1a38" />
          <Box position={[7, -3, 0]} color="#c5cfcb" />
          <Box position={[8, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#7c9796" />
          <Box position={[-1, -4, 0]} color="#0e1a38" />
          <Box position={[0, -4, 0]} color="#c5cfcb" />
          <Box position={[1, -4, 0]} color="#0e1a38" />
          <Box position={[2, -4, 0]} color="#c5cfcb" />
          <Box position={[3, -4, 0]} color="#0e1a38" />
          <Box position={[4, -4, 0]} color="#c5cfcb" />
          <Box position={[5, -4, 0]} color="#0e1a38" />
          <Box position={[6, -4, 0]} color="#c5cfcb" />
          <Box position={[7, -4, 0]} color="#0e1a38" />
          <Box position={[-3, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#7c9796" />
          <Box position={[0, -5, 0]} color="#7c9796" />
          <Box position={[1, -5, 0]} color="#c5cfcb" />
          <Box position={[2, -5, 0]} color="#c5cfcb" />
          <Box position={[3, -5, 0]} color="#c5cfcb" />
          <Box position={[4, -5, 0]} color="#c5cfcb" />
          <Box position={[5, -5, 0]} color="#c5cfcb" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[-4, -6, 0]} color="#0e1a38" />
          <Box position={[-3, -6, 0]} color="#c5cfcb" />
          <Box position={[-2, -6, 0]} color="#ebede8" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[-5, -7, 0]} color="#0e1a38" />
          <Box position={[-4, -7, 0]} color="#7c9796" />
          <Box position={[-3, -7, 0]} color="#c5cfcb" />
          <Box position={[-2, -7, 0]} color="#c5cfcb" />
          <Box position={[-1, -7, 0]} color="#ebede8" />
          <Box position={[0, -7, 0]} color="#ebede8" />
          <Box position={[1, -7, 0]} color="#0e1a38" />
          <Box position={[2, -7, 0]} color="#7c9796" />
          <Box position={[3, -7, 0]} color="#ebede8" />
          <Box position={[4, -7, 0]} color="#0e1a38" />
          <Box position={[-6, -8, 0]} color="#0e1a38" />
          <Box position={[-5, -8, 0]} color="#c5cfcb" />
          <Box position={[-4, -8, 0]} color="#c5cfcb" />
          <Box position={[-3, -8, 0]} color="#7c9796" />
          <Box position={[-2, -8, 0]} color="#7c9796" />
          <Box position={[-1, -8, 0]} color="#0e1a38" />
          <Box position={[0, -8, 0]} color="#7c9796" />
          <Box position={[1, -8, 0]} color="#ebede8" />
          <Box position={[2, -8, 0]} color="#0e1a38" />
          <Box position={[3, -8, 0]} color="#7c9796" />
          <Box position={[4, -8, 0]} color="#ebede8" />
          <Box position={[5, -8, 0]} color="#0e1a38" />
          <Box position={[6, -8, 0]} color="#0e1a38" />
          <Box position={[-7, -9, 0]} color="#0e1a38" />
          <Box position={[-6, -9, 0]} color="#c5cfcb" />
          <Box position={[-5, -9, 0]} color="#7c9796" />
          <Box position={[-4, -9, 0]} color="#c5cfcb" />
          <Box position={[-3, -9, 0]} color="#c5cfcb" />
          <Box position={[-2, -9, 0]} color="#c5cfcb" />
          <Box position={[-1, -9, 0]} color="#c5cfcb" />
          <Box position={[0, -9, 0]} color="#0e1a38" />
          <Box position={[1, -9, 0]} color="#7c9796" />
          <Box position={[2, -9, 0]} color="#ebede8" />
          <Box position={[3, -9, 0]} color="#0e1a38" />
          <Box position={[4, -9, 0]} color="#7c9796" />
          <Box position={[5, -9, 0]} color="#ebede8" />
          <Box position={[6, -9, 0]} color="#ebede8" />
          <Box position={[7, -9, 0]} color="#0e1a38" />
          <Box position={[-8, -10, 0]} color="#0e1a38" />
          <Box position={[-7, -10, 0]} color="#7c9796" />
          <Box position={[-6, -10, 0]} color="#c5cfcb" />
          <Box position={[-5, -10, 0]} color="#c5cfcb" />
          <Box position={[-4, -10, 0]} color="#7c9796" />
          <Box position={[-3, -10, 0]} color="#7c9796" />
          <Box position={[-2, -10, 0]} color="#7c9796" />
          <Box position={[-1, -10, 0]} color="#7c9796" />
          <Box position={[0, -10, 0]} color="#0e1a38" />
          <Box position={[1, -10, 0]} color="#7c9796" />
          <Box position={[2, -10, 0]} color="#7c9796" />
          <Box position={[3, -10, 0]} color="#ebede8" />
          <Box position={[4, -10, 0]} color="#0e1a38" />
          <Box position={[5, -10, 0]} color="#7c9796" />
          <Box position={[6, -10, 0]} color="#7c9796" />
          <Box position={[7, -10, 0]} color="#ebede8" />
          <Box position={[8, -10, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Brown") {
      return (
        <>
          <Box position={[-3, 5, 0]} color="#0e1a38" />
          <Box position={[-2, 5, 0]} color="#0e1a38" />
          <Box position={[-1, 5, 0]} color="#0e1a38" />
          <Box position={[0, 5, 0]} color="#0e1a38" />
          <Box position={[1, 5, 0]} color="#0e1a38" />
          <Box position={[2, 5, 0]} color="#0e1a38" />
          <Box position={[3, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 4, 0]} color="#0e1a38" />
          <Box position={[-3, 4, 0]} color="#602020" />
          <Box position={[-2, 4, 0]} color="#7a3c33" />
          <Box position={[-1, 4, 0]} color="#7a3c33" />
          <Box position={[0, 4, 0]} color="#7a3c33" />
          <Box position={[1, 4, 0]} color="#7a3c33" />
          <Box position={[2, 4, 0]} color="#7a3c33" />
          <Box position={[3, 4, 0]} color="#7a3c33" />
          <Box position={[4, 4, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#602020" />
          <Box position={[-3, 3, 0]} color="#7a3c33" />
          <Box position={[-2, 3, 0]} color="#7a3c33" />
          <Box position={[-1, 3, 0]} color="#7a3c33" />
          <Box position={[0, 3, 0]} color="#d7ad84" />
          <Box position={[1, 3, 0]} color="#d7ad84" />
          <Box position={[2, 3, 0]} color="#7a3c33" />
          <Box position={[3, 3, 0]} color="#7a3c33" />
          <Box position={[4, 3, 0]} color="#d7ad84" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 2, 0]} color="#0e1a38" />
          <Box position={[-5, 2, 0]} color="#602020" />
          <Box position={[-4, 2, 0]} color="#7a3c33" />
          <Box position={[-3, 2, 0]} color="#7a3c33" />
          <Box position={[-2, 2, 0]} color="#7a3c33" />
          <Box position={[-1, 2, 0]} color="#d7ad84" />
          <Box position={[0, 2, 0]} color="#d7ad84" />
          <Box position={[1, 2, 0]} color="#d7ad84" />
          <Box position={[2, 2, 0]} color="#d7ad84" />
          <Box position={[3, 2, 0]} color="#d7ad84" />
          <Box position={[4, 2, 0]} color="#d7ad84" />
          <Box position={[5, 2, 0]} color="#d7ad84" />
          <Box position={[6, 2, 0]} color="#0e1a38" />
          <Box position={[-6, 1, 0]} color="#0e1a38" />
          <Box position={[-5, 1, 0]} color="#602020" />
          <Box position={[-4, 1, 0]} color="#7a3c33" />
          <Box position={[-3, 1, 0]} color="#7a3c33" />
          <Box position={[-2, 1, 0]} color="#d7ad84" />
          <Box position={[-1, 1, 0]} color="#d7ad84" />
          <Box position={[0, 1, 0]} color="#d7ad84" />
          <Box position={[1, 1, 0]} color="#0e1a38" />
          <Box position={[2, 1, 0]} color="#d7ad84" />
          <Box position={[3, 1, 0]} color="#d7ad84" />
          <Box position={[4, 1, 0]} color="#0e1a38" />
          <Box position={[5, 1, 0]} color="#d7ad84" />
          <Box position={[6, 1, 0]} color="#0e1a38" />
          <Box position={[-6, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#602020" />
          <Box position={[-4, 0, 0]} color="#0e1a38" />
          <Box position={[-3, 0, 0]} color="#7a3c33" />
          <Box position={[-2, 0, 0]} color="#d7ad84" />
          <Box position={[-1, 0, 0]} color="#d7ad84" />
          <Box position={[0, 0, 0]} color="#d7ad84" />
          <Box position={[1, 0, 0]} color="#0e1a38" />
          <Box position={[2, 0, 0]} color="#d7ad84" />
          <Box position={[3, 0, 0]} color="#d7ad84" />
          <Box position={[4, 0, 0]} color="#0e1a38" />
          <Box position={[5, 0, 0]} color="#d7ad84" />
          <Box position={[6, 0, 0]} color="#0e1a38" />
          <Box position={[-6, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#602020" />
          <Box position={[-4, -1, 0]} color="#0e1a38" />
          <Box position={[-3, -1, 0]} color="#7a3c33" />
          <Box position={[-2, -1, 0]} color="#d7ad84" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[0, -1, 0]} color="#d7ad84" />
          <Box position={[1, -1, 0]} color="#d7ad84" />
          <Box position={[2, -1, 0]} color="#d7ad84" />
          <Box position={[3, -1, 0]} color="#d7ad84" />
          <Box position={[4, -1, 0]} color="#d7ad84" />
          <Box position={[5, -1, 0]} color="#d7ad84" />
          <Box position={[6, -1, 0]} color="#d7ad84" />
          <Box position={[7, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -2, 0]} color="#602020" />
          <Box position={[-3, -2, 0]} color="#7a3c33" />
          <Box position={[-2, -2, 0]} color="#0e1a38" />
          <Box position={[-1, -2, 0]} color="#d7ad84" />
          <Box position={[0, -2, 0]} color="#d7ad84" />
          <Box position={[1, -2, 0]} color="#d7ad84" />
          <Box position={[2, -2, 0]} color="#d7ad84" />
          <Box position={[3, -2, 0]} color="#d7ad84" />
          <Box position={[4, -2, 0]} color="#d7ad84" />
          <Box position={[5, -2, 0]} color="#d7ad84" />
          <Box position={[6, -2, 0]} color="#d7ad84" />
          <Box position={[7, -2, 0]} color="#d7ad84" />
          <Box position={[8, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -3, 0]} color="#7a3c33" />
          <Box position={[-2, -3, 0]} color="#0e1a38" />
          <Box position={[-1, -3, 0]} color="#d7ad84" />
          <Box position={[0, -3, 0]} color="#d7ad84" />
          <Box position={[1, -3, 0]} color="#d7ad84" />
          <Box position={[2, -3, 0]} color="#d7ad84" />
          <Box position={[3, -3, 0]} color="#d7ad84" />
          <Box position={[4, -3, 0]} color="#d7ad84" />
          <Box position={[5, -3, 0]} color="#d7ad84" />
          <Box position={[6, -3, 0]} color="#d7ad84" />
          <Box position={[7, -3, 0]} color="#d7ad84" />
          <Box position={[8, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#d7ad84" />
          <Box position={[-1, -4, 0]} color="#0e1a38" />
          <Box position={[0, -4, 0]} color="#0e1a38" />
          <Box position={[1, -4, 0]} color="#0e1a38" />
          <Box position={[2, -4, 0]} color="#0e1a38" />
          <Box position={[3, -4, 0]} color="#0e1a38" />
          <Box position={[4, -4, 0]} color="#0e1a38" />
          <Box position={[5, -4, 0]} color="#0e1a38" />
          <Box position={[6, -4, 0]} color="#0e1a38" />
          <Box position={[7, -4, 0]} color="#0e1a38" />
          <Box position={[-3, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#d7ad84" />
          <Box position={[0, -5, 0]} color="#d7ad84" />
          <Box position={[1, -5, 0]} color="#d7ad84" />
          <Box position={[2, -5, 0]} color="#d7ad84" />
          <Box position={[3, -5, 0]} color="#d7ad84" />
          <Box position={[4, -5, 0]} color="#d7ad84" />
          <Box position={[5, -5, 0]} color="#d7ad84" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[-4, -6, 0]} color="#0e1a38" />
          <Box position={[-3, -6, 0]} color="#602020" />
          <Box position={[-2, -6, 0]} color="#7a3c33" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[-5, -7, 0]} color="#0e1a38" />
          <Box position={[-4, -7, 0]} color="#602020" />
          <Box position={[-3, -7, 0]} color="#7a3c33" />
          <Box position={[-2, -7, 0]} color="#7a3c33" />
          <Box position={[-1, -7, 0]} color="#7a3c33" />
          <Box position={[0, -7, 0]} color="#7a3c33" />
          <Box position={[1, -7, 0]} color="#0e1a38" />
          <Box position={[2, -7, 0]} color="#7a3c33" />
          <Box position={[3, -7, 0]} color="#7a3c33" />
          <Box position={[4, -7, 0]} color="#0e1a38" />
          <Box position={[-6, -8, 0]} color="#0e1a38" />
          <Box position={[-5, -8, 0]} color="#602020" />
          <Box position={[-4, -8, 0]} color="#7a3c33" />
          <Box position={[-3, -8, 0]} color="#7a3c33" />
          <Box position={[-2, -8, 0]} color="#7a3c33" />
          <Box position={[-1, -8, 0]} color="#0e1a38" />
          <Box position={[0, -8, 0]} color="#7a3c33" />
          <Box position={[1, -8, 0]} color="#7a3c33" />
          <Box position={[2, -8, 0]} color="#0e1a38" />
          <Box position={[3, -8, 0]} color="#7a3c33" />
          <Box position={[4, -8, 0]} color="#7a3c33" />
          <Box position={[5, -8, 0]} color="#0e1a38" />
          <Box position={[6, -8, 0]} color="#0e1a38" />
          <Box position={[-7, -9, 0]} color="#0e1a38" />
          <Box position={[-6, -9, 0]} color="#602020" />
          <Box position={[-5, -9, 0]} color="#7a3c33" />
          <Box position={[-4, -9, 0]} color="#7a3c33" />
          <Box position={[-3, -9, 0]} color="#7a3c33" />
          <Box position={[-2, -9, 0]} color="#7a3c33" />
          <Box position={[-1, -9, 0]} color="#7a3c33" />
          <Box position={[0, -9, 0]} color="#0e1a38" />
          <Box position={[1, -9, 0]} color="#7a3c33" />
          <Box position={[2, -9, 0]} color="#7a3c33" />
          <Box position={[3, -9, 0]} color="#0e1a38" />
          <Box position={[4, -9, 0]} color="#7a3c33" />
          <Box position={[5, -9, 0]} color="#7a3c33" />
          <Box position={[6, -9, 0]} color="#7a3c33" />
          <Box position={[7, -9, 0]} color="#0e1a38" />
          <Box position={[-8, -10, 0]} color="#0e1a38" />
          <Box position={[-7, -10, 0]} color="#602020" />
          <Box position={[-6, -10, 0]} color="#7a3c33" />
          <Box position={[-5, -10, 0]} color="#7a3c33" />
          <Box position={[-4, -10, 0]} color="#7a3c33" />
          <Box position={[-3, -10, 0]} color="#7a3c33" />
          <Box position={[-2, -10, 0]} color="#7a3c33" />
          <Box position={[-1, -10, 0]} color="#7a3c33" />
          <Box position={[0, -10, 0]} color="#0e1a38" />
          <Box position={[1, -10, 0]} color="#7a3c33" />
          <Box position={[2, -10, 0]} color="#7a3c33" />
          <Box position={[3, -10, 0]} color="#7a3c33" />
          <Box position={[4, -10, 0]} color="#0e1a38" />
          <Box position={[5, -10, 0]} color="#7a3c33" />
          <Box position={[6, -10, 0]} color="#7a3c33" />
          <Box position={[7, -10, 0]} color="#7a3c33" />
          <Box position={[8, -10, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Orange") {
      return (
        <>
          <Box position={[-3, 5, 0]} color="#0e1a38" />
          <Box position={[-2, 5, 0]} color="#0e1a38" />
          <Box position={[-1, 5, 0]} color="#0e1a38" />
          <Box position={[0, 5, 0]} color="#0e1a38" />
          <Box position={[1, 5, 0]} color="#0e1a38" />
          <Box position={[2, 5, 0]} color="#0e1a38" />
          <Box position={[3, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 4, 0]} color="#0e1a38" />
          <Box position={[-3, 4, 0]} color="#da7219" />
          <Box position={[-2, 4, 0]} color="#ed9e2f" />
          <Box position={[-1, 4, 0]} color="#ed9e2f" />
          <Box position={[0, 4, 0]} color="#ed9e2f" />
          <Box position={[1, 4, 0]} color="#ed9e2f" />
          <Box position={[2, 4, 0]} color="#ed9e2f" />
          <Box position={[3, 4, 0]} color="#ed9e2f" />
          <Box position={[4, 4, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#da7219" />
          <Box position={[-3, 3, 0]} color="#ed9e2f" />
          <Box position={[-2, 3, 0]} color="#ed9e2f" />
          <Box position={[-1, 3, 0]} color="#ed9e2f" />
          <Box position={[0, 3, 0]} color="#d7ad84" />
          <Box position={[1, 3, 0]} color="#d7ad84" />
          <Box position={[2, 3, 0]} color="#ed9e2f" />
          <Box position={[3, 3, 0]} color="#ed9e2f" />
          <Box position={[4, 3, 0]} color="#d7ad84" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 2, 0]} color="#0e1a38" />
          <Box position={[-5, 2, 0]} color="#da7219" />
          <Box position={[-4, 2, 0]} color="#ed9e2f" />
          <Box position={[-3, 2, 0]} color="#ed9e2f" />
          <Box position={[-2, 2, 0]} color="#ed9e2f" />
          <Box position={[-1, 2, 0]} color="#d7ad84" />
          <Box position={[0, 2, 0]} color="#d7ad84" />
          <Box position={[1, 2, 0]} color="#d7ad84" />
          <Box position={[2, 2, 0]} color="#d7ad84" />
          <Box position={[3, 2, 0]} color="#d7ad84" />
          <Box position={[4, 2, 0]} color="#d7ad84" />
          <Box position={[5, 2, 0]} color="#d7ad84" />
          <Box position={[6, 2, 0]} color="#0e1a38" />
          <Box position={[-6, 1, 0]} color="#0e1a38" />
          <Box position={[-5, 1, 0]} color="#da7219" />
          <Box position={[-4, 1, 0]} color="#ed9e2f" />
          <Box position={[-3, 1, 0]} color="#ed9e2f" />
          <Box position={[-2, 1, 0]} color="#d7ad84" />
          <Box position={[-1, 1, 0]} color="#d7ad84" />
          <Box position={[0, 1, 0]} color="#d7ad84" />
          <Box position={[1, 1, 0]} color="#0e1a38" />
          <Box position={[2, 1, 0]} color="#d7ad84" />
          <Box position={[3, 1, 0]} color="#d7ad84" />
          <Box position={[4, 1, 0]} color="#0e1a38" />
          <Box position={[5, 1, 0]} color="#d7ad84" />
          <Box position={[6, 1, 0]} color="#0e1a38" />
          <Box position={[-6, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#da7219" />
          <Box position={[-4, 0, 0]} color="#0e1a38" />
          <Box position={[-3, 0, 0]} color="#ed9e2f" />
          <Box position={[-2, 0, 0]} color="#d7ad84" />
          <Box position={[-1, 0, 0]} color="#d7ad84" />
          <Box position={[0, 0, 0]} color="#d7ad84" />
          <Box position={[1, 0, 0]} color="#0e1a38" />
          <Box position={[2, 0, 0]} color="#d7ad84" />
          <Box position={[3, 0, 0]} color="#d7ad84" />
          <Box position={[4, 0, 0]} color="#0e1a38" />
          <Box position={[5, 0, 0]} color="#d7ad84" />
          <Box position={[6, 0, 0]} color="#0e1a38" />
          <Box position={[-6, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#da7219" />
          <Box position={[-4, -1, 0]} color="#0e1a38" />
          <Box position={[-3, -1, 0]} color="#ed9e2f" />
          <Box position={[-2, -1, 0]} color="#d7ad84" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[0, -1, 0]} color="#d7ad84" />
          <Box position={[1, -1, 0]} color="#d7ad84" />
          <Box position={[2, -1, 0]} color="#d7ad84" />
          <Box position={[3, -1, 0]} color="#d7ad84" />
          <Box position={[4, -1, 0]} color="#d7ad84" />
          <Box position={[5, -1, 0]} color="#d7ad84" />
          <Box position={[6, -1, 0]} color="#d7ad84" />
          <Box position={[7, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -2, 0]} color="#da7219" />
          <Box position={[-3, -2, 0]} color="#ed9e2f" />
          <Box position={[-2, -2, 0]} color="#0e1a38" />
          <Box position={[-1, -2, 0]} color="#d7ad84" />
          <Box position={[0, -2, 0]} color="#d7ad84" />
          <Box position={[1, -2, 0]} color="#d7ad84" />
          <Box position={[2, -2, 0]} color="#d7ad84" />
          <Box position={[3, -2, 0]} color="#d7ad84" />
          <Box position={[4, -2, 0]} color="#d7ad84" />
          <Box position={[5, -2, 0]} color="#d7ad84" />
          <Box position={[6, -2, 0]} color="#d7ad84" />
          <Box position={[7, -2, 0]} color="#d7ad84" />
          <Box position={[8, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -3, 0]} color="#ed9e2f" />
          <Box position={[-2, -3, 0]} color="#0e1a38" />
          <Box position={[-1, -3, 0]} color="#d7ad84" />
          <Box position={[0, -3, 0]} color="#d7ad84" />
          <Box position={[1, -3, 0]} color="#d7ad84" />
          <Box position={[2, -3, 0]} color="#d7ad84" />
          <Box position={[3, -3, 0]} color="#d7ad84" />
          <Box position={[4, -3, 0]} color="#d7ad84" />
          <Box position={[5, -3, 0]} color="#d7ad84" />
          <Box position={[6, -3, 0]} color="#d7ad84" />
          <Box position={[7, -3, 0]} color="#d7ad84" />
          <Box position={[8, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#d7ad84" />
          <Box position={[-1, -4, 0]} color="#0e1a38" />
          <Box position={[0, -4, 0]} color="#0e1a38" />
          <Box position={[1, -4, 0]} color="#0e1a38" />
          <Box position={[2, -4, 0]} color="#0e1a38" />
          <Box position={[3, -4, 0]} color="#0e1a38" />
          <Box position={[4, -4, 0]} color="#0e1a38" />
          <Box position={[5, -4, 0]} color="#0e1a38" />
          <Box position={[6, -4, 0]} color="#0e1a38" />
          <Box position={[7, -4, 0]} color="#0e1a38" />
          <Box position={[-3, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#d7ad84" />
          <Box position={[0, -5, 0]} color="#d7ad84" />
          <Box position={[1, -5, 0]} color="#d7ad84" />
          <Box position={[2, -5, 0]} color="#d7ad84" />
          <Box position={[3, -5, 0]} color="#d7ad84" />
          <Box position={[4, -5, 0]} color="#d7ad84" />
          <Box position={[5, -5, 0]} color="#d7ad84" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[-4, -6, 0]} color="#0e1a38" />
          <Box position={[-3, -6, 0]} color="#da7219" />
          <Box position={[-2, -6, 0]} color="#ed9e2f" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[-5, -7, 0]} color="#0e1a38" />
          <Box position={[-4, -7, 0]} color="#da7219" />
          <Box position={[-3, -7, 0]} color="#ed9e2f" />
          <Box position={[-2, -7, 0]} color="#ed9e2f" />
          <Box position={[-1, -7, 0]} color="#ed9e2f" />
          <Box position={[0, -7, 0]} color="#ed9e2f" />
          <Box position={[1, -7, 0]} color="#0e1a38" />
          <Box position={[2, -7, 0]} color="#ed9e2f" />
          <Box position={[3, -7, 0]} color="#ed9e2f" />
          <Box position={[4, -7, 0]} color="#0e1a38" />
          <Box position={[-6, -8, 0]} color="#0e1a38" />
          <Box position={[-5, -8, 0]} color="#da7219" />
          <Box position={[-4, -8, 0]} color="#ed9e2f" />
          <Box position={[-3, -8, 0]} color="#ed9e2f" />
          <Box position={[-2, -8, 0]} color="#ed9e2f" />
          <Box position={[-1, -8, 0]} color="#0e1a38" />
          <Box position={[0, -8, 0]} color="#ed9e2f" />
          <Box position={[1, -8, 0]} color="#ed9e2f" />
          <Box position={[2, -8, 0]} color="#0e1a38" />
          <Box position={[3, -8, 0]} color="#ed9e2f" />
          <Box position={[4, -8, 0]} color="#ed9e2f" />
          <Box position={[5, -8, 0]} color="#0e1a38" />
          <Box position={[6, -8, 0]} color="#0e1a38" />
          <Box position={[-7, -9, 0]} color="#0e1a38" />
          <Box position={[-6, -9, 0]} color="#da7219" />
          <Box position={[-5, -9, 0]} color="#ed9e2f" />
          <Box position={[-4, -9, 0]} color="#ed9e2f" />
          <Box position={[-3, -9, 0]} color="#ed9e2f" />
          <Box position={[-2, -9, 0]} color="#ed9e2f" />
          <Box position={[-1, -9, 0]} color="#ed9e2f" />
          <Box position={[0, -9, 0]} color="#0e1a38" />
          <Box position={[1, -9, 0]} color="#ed9e2f" />
          <Box position={[2, -9, 0]} color="#ed9e2f" />
          <Box position={[3, -9, 0]} color="#0e1a38" />
          <Box position={[4, -9, 0]} color="#ed9e2f" />
          <Box position={[5, -9, 0]} color="#ed9e2f" />
          <Box position={[6, -9, 0]} color="#ed9e2f" />
          <Box position={[7, -9, 0]} color="#0e1a38" />
          <Box position={[-8, -10, 0]} color="#0e1a38" />
          <Box position={[-7, -10, 0]} color="#da7219" />
          <Box position={[-6, -10, 0]} color="#ed9e2f" />
          <Box position={[-5, -10, 0]} color="#ed9e2f" />
          <Box position={[-4, -10, 0]} color="#ed9e2f" />
          <Box position={[-3, -10, 0]} color="#ed9e2f" />
          <Box position={[-2, -10, 0]} color="#ed9e2f" />
          <Box position={[-1, -10, 0]} color="#ed9e2f" />
          <Box position={[0, -10, 0]} color="#0e1a38" />
          <Box position={[1, -10, 0]} color="#ed9e2f" />
          <Box position={[2, -10, 0]} color="#ed9e2f" />
          <Box position={[3, -10, 0]} color="#ed9e2f" />
          <Box position={[4, -10, 0]} color="#0e1a38" />
          <Box position={[5, -10, 0]} color="#ed9e2f" />
          <Box position={[6, -10, 0]} color="#ed9e2f" />
          <Box position={[7, -10, 0]} color="#ed9e2f" />
          <Box position={[8, -10, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Dark") {
      return (
        <>
          <Box position={[-3, 5, 0]} color="#0e1a38" />
          <Box position={[-2, 5, 0]} color="#0e1a38" />
          <Box position={[-1, 5, 0]} color="#0e1a38" />
          <Box position={[0, 5, 0]} color="#0e1a38" />
          <Box position={[1, 5, 0]} color="#0e1a38" />
          <Box position={[2, 5, 0]} color="#0e1a38" />
          <Box position={[3, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 4, 0]} color="#0e1a38" />
          <Box position={[-3, 4, 0]} color="#1a2c37" />
          <Box position={[-2, 4, 0]} color="#334950" />
          <Box position={[-1, 4, 0]} color="#334950" />
          <Box position={[0, 4, 0]} color="#334950" />
          <Box position={[1, 4, 0]} color="#334950" />
          <Box position={[2, 4, 0]} color="#334950" />
          <Box position={[3, 4, 0]} color="#334950" />
          <Box position={[4, 4, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#1a2c37" />
          <Box position={[-3, 3, 0]} color="#334950" />
          <Box position={[-2, 3, 0]} color="#334950" />
          <Box position={[-1, 3, 0]} color="#334950" />
          <Box position={[0, 3, 0]} color="#d7ad84" />
          <Box position={[1, 3, 0]} color="#d7ad84" />
          <Box position={[2, 3, 0]} color="#334950" />
          <Box position={[3, 3, 0]} color="#334950" />
          <Box position={[4, 3, 0]} color="#d7ad84" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 2, 0]} color="#0e1a38" />
          <Box position={[-5, 2, 0]} color="#1a2c37" />
          <Box position={[-4, 2, 0]} color="#334950" />
          <Box position={[-3, 2, 0]} color="#334950" />
          <Box position={[-2, 2, 0]} color="#334950" />
          <Box position={[-1, 2, 0]} color="#d7ad84" />
          <Box position={[0, 2, 0]} color="#d7ad84" />
          <Box position={[1, 2, 0]} color="#d7ad84" />
          <Box position={[2, 2, 0]} color="#d7ad84" />
          <Box position={[3, 2, 0]} color="#d7ad84" />
          <Box position={[4, 2, 0]} color="#d7ad84" />
          <Box position={[5, 2, 0]} color="#d7ad84" />
          <Box position={[6, 2, 0]} color="#0e1a38" />
          <Box position={[-6, 1, 0]} color="#0e1a38" />
          <Box position={[-5, 1, 0]} color="#1a2c37" />
          <Box position={[-4, 1, 0]} color="#334950" />
          <Box position={[-3, 1, 0]} color="#334950" />
          <Box position={[-2, 1, 0]} color="#d7ad84" />
          <Box position={[-1, 1, 0]} color="#d7ad84" />
          <Box position={[0, 1, 0]} color="#d7ad84" />
          <Box position={[1, 1, 0]} color="#0e1a38" />
          <Box position={[2, 1, 0]} color="#d7ad84" />
          <Box position={[3, 1, 0]} color="#d7ad84" />
          <Box position={[4, 1, 0]} color="#0e1a38" />
          <Box position={[5, 1, 0]} color="#d7ad84" />
          <Box position={[6, 1, 0]} color="#0e1a38" />
          <Box position={[-6, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#1a2c37" />
          <Box position={[-4, 0, 0]} color="#0e1a38" />
          <Box position={[-3, 0, 0]} color="#334950" />
          <Box position={[-2, 0, 0]} color="#d7ad84" />
          <Box position={[-1, 0, 0]} color="#d7ad84" />
          <Box position={[0, 0, 0]} color="#d7ad84" />
          <Box position={[1, 0, 0]} color="#0e1a38" />
          <Box position={[2, 0, 0]} color="#d7ad84" />
          <Box position={[3, 0, 0]} color="#d7ad84" />
          <Box position={[4, 0, 0]} color="#0e1a38" />
          <Box position={[5, 0, 0]} color="#d7ad84" />
          <Box position={[6, 0, 0]} color="#0e1a38" />
          <Box position={[-6, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#1a2c37" />
          <Box position={[-4, -1, 0]} color="#0e1a38" />
          <Box position={[-3, -1, 0]} color="#334950" />
          <Box position={[-2, -1, 0]} color="#d7ad84" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[0, -1, 0]} color="#d7ad84" />
          <Box position={[1, -1, 0]} color="#d7ad84" />
          <Box position={[2, -1, 0]} color="#d7ad84" />
          <Box position={[3, -1, 0]} color="#d7ad84" />
          <Box position={[4, -1, 0]} color="#d7ad84" />
          <Box position={[5, -1, 0]} color="#d7ad84" />
          <Box position={[6, -1, 0]} color="#d7ad84" />
          <Box position={[7, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -2, 0]} color="#1a2c37" />
          <Box position={[-3, -2, 0]} color="#334950" />
          <Box position={[-2, -2, 0]} color="#0e1a38" />
          <Box position={[-1, -2, 0]} color="#d7ad84" />
          <Box position={[0, -2, 0]} color="#d7ad84" />
          <Box position={[1, -2, 0]} color="#d7ad84" />
          <Box position={[2, -2, 0]} color="#d7ad84" />
          <Box position={[3, -2, 0]} color="#d7ad84" />
          <Box position={[4, -2, 0]} color="#d7ad84" />
          <Box position={[5, -2, 0]} color="#d7ad84" />
          <Box position={[6, -2, 0]} color="#d7ad84" />
          <Box position={[7, -2, 0]} color="#d7ad84" />
          <Box position={[8, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -3, 0]} color="#334950" />
          <Box position={[-2, -3, 0]} color="#0e1a38" />
          <Box position={[-1, -3, 0]} color="#d7ad84" />
          <Box position={[0, -3, 0]} color="#d7ad84" />
          <Box position={[1, -3, 0]} color="#d7ad84" />
          <Box position={[2, -3, 0]} color="#d7ad84" />
          <Box position={[3, -3, 0]} color="#d7ad84" />
          <Box position={[4, -3, 0]} color="#d7ad84" />
          <Box position={[5, -3, 0]} color="#d7ad84" />
          <Box position={[6, -3, 0]} color="#d7ad84" />
          <Box position={[7, -3, 0]} color="#d7ad84" />
          <Box position={[8, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#d7ad84" />
          <Box position={[-1, -4, 0]} color="#0e1a38" />
          <Box position={[0, -4, 0]} color="#0e1a38" />
          <Box position={[1, -4, 0]} color="#0e1a38" />
          <Box position={[2, -4, 0]} color="#0e1a38" />
          <Box position={[3, -4, 0]} color="#0e1a38" />
          <Box position={[4, -4, 0]} color="#0e1a38" />
          <Box position={[5, -4, 0]} color="#0e1a38" />
          <Box position={[6, -4, 0]} color="#0e1a38" />
          <Box position={[7, -4, 0]} color="#0e1a38" />
          <Box position={[-3, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#d7ad84" />
          <Box position={[0, -5, 0]} color="#d7ad84" />
          <Box position={[1, -5, 0]} color="#d7ad84" />
          <Box position={[2, -5, 0]} color="#d7ad84" />
          <Box position={[3, -5, 0]} color="#d7ad84" />
          <Box position={[4, -5, 0]} color="#d7ad84" />
          <Box position={[5, -5, 0]} color="#d7ad84" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[-4, -6, 0]} color="#0e1a38" />
          <Box position={[-3, -6, 0]} color="#1a2c37" />
          <Box position={[-2, -6, 0]} color="#334950" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[-5, -7, 0]} color="#0e1a38" />
          <Box position={[-4, -7, 0]} color="#1a2c37" />
          <Box position={[-3, -7, 0]} color="#334950" />
          <Box position={[-2, -7, 0]} color="#334950" />
          <Box position={[-1, -7, 0]} color="#334950" />
          <Box position={[0, -7, 0]} color="#334950" />
          <Box position={[1, -7, 0]} color="#0e1a38" />
          <Box position={[2, -7, 0]} color="#334950" />
          <Box position={[3, -7, 0]} color="#334950" />
          <Box position={[4, -7, 0]} color="#0e1a38" />
          <Box position={[-6, -8, 0]} color="#0e1a38" />
          <Box position={[-5, -8, 0]} color="#1a2c37" />
          <Box position={[-4, -8, 0]} color="#334950" />
          <Box position={[-3, -8, 0]} color="#334950" />
          <Box position={[-2, -8, 0]} color="#334950" />
          <Box position={[-1, -8, 0]} color="#0e1a38" />
          <Box position={[0, -8, 0]} color="#334950" />
          <Box position={[1, -8, 0]} color="#334950" />
          <Box position={[2, -8, 0]} color="#0e1a38" />
          <Box position={[3, -8, 0]} color="#334950" />
          <Box position={[4, -8, 0]} color="#334950" />
          <Box position={[5, -8, 0]} color="#0e1a38" />
          <Box position={[6, -8, 0]} color="#0e1a38" />
          <Box position={[-7, -9, 0]} color="#0e1a38" />
          <Box position={[-6, -9, 0]} color="#1a2c37" />
          <Box position={[-5, -9, 0]} color="#334950" />
          <Box position={[-4, -9, 0]} color="#334950" />
          <Box position={[-3, -9, 0]} color="#334950" />
          <Box position={[-2, -9, 0]} color="#334950" />
          <Box position={[-1, -9, 0]} color="#334950" />
          <Box position={[0, -9, 0]} color="#0e1a38" />
          <Box position={[1, -9, 0]} color="#334950" />
          <Box position={[2, -9, 0]} color="#334950" />
          <Box position={[3, -9, 0]} color="#0e1a38" />
          <Box position={[4, -9, 0]} color="#334950" />
          <Box position={[5, -9, 0]} color="#334950" />
          <Box position={[6, -9, 0]} color="#334950" />
          <Box position={[7, -9, 0]} color="#0e1a38" />
          <Box position={[-8, -10, 0]} color="#0e1a38" />
          <Box position={[-7, -10, 0]} color="#1a2c37" />
          <Box position={[-6, -10, 0]} color="#334950" />
          <Box position={[-5, -10, 0]} color="#334950" />
          <Box position={[-4, -10, 0]} color="#334950" />
          <Box position={[-3, -10, 0]} color="#334950" />
          <Box position={[-2, -10, 0]} color="#334950" />
          <Box position={[-1, -10, 0]} color="#334950" />
          <Box position={[0, -10, 0]} color="#0e1a38" />
          <Box position={[1, -10, 0]} color="#334950" />
          <Box position={[2, -10, 0]} color="#334950" />
          <Box position={[3, -10, 0]} color="#334950" />
          <Box position={[4, -10, 0]} color="#0e1a38" />
          <Box position={[5, -10, 0]} color="#334950" />
          <Box position={[6, -10, 0]} color="#334950" />
          <Box position={[7, -10, 0]} color="#334950" />
          <Box position={[8, -10, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Red") {
      return (
        <>
          <Box position={[-3, 5, 0]} color="#0e1a38" />
          <Box position={[-2, 5, 0]} color="#0e1a38" />
          <Box position={[-1, 5, 0]} color="#0e1a38" />
          <Box position={[0, 5, 0]} color="#0e1a38" />
          <Box position={[1, 5, 0]} color="#0e1a38" />
          <Box position={[2, 5, 0]} color="#0e1a38" />
          <Box position={[3, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 4, 0]} color="#0e1a38" />
          <Box position={[-3, 4, 0]} color="#a51414" />
          <Box position={[-2, 4, 0]} color="#f24949" />
          <Box position={[-1, 4, 0]} color="#f24949" />
          <Box position={[0, 4, 0]} color="#f24949" />
          <Box position={[1, 4, 0]} color="#f24949" />
          <Box position={[2, 4, 0]} color="#f24949" />
          <Box position={[3, 4, 0]} color="#f24949" />
          <Box position={[4, 4, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#a51414" />
          <Box position={[-3, 3, 0]} color="#f24949" />
          <Box position={[-2, 3, 0]} color="#f24949" />
          <Box position={[-1, 3, 0]} color="#f24949" />
          <Box position={[0, 3, 0]} color="#d7ad84" />
          <Box position={[1, 3, 0]} color="#d7ad84" />
          <Box position={[2, 3, 0]} color="#f24949" />
          <Box position={[3, 3, 0]} color="#f24949" />
          <Box position={[4, 3, 0]} color="#d7ad84" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 2, 0]} color="#0e1a38" />
          <Box position={[-5, 2, 0]} color="#a51414" />
          <Box position={[-4, 2, 0]} color="#f24949" />
          <Box position={[-3, 2, 0]} color="#f24949" />
          <Box position={[-2, 2, 0]} color="#f24949" />
          <Box position={[-1, 2, 0]} color="#d7ad84" />
          <Box position={[0, 2, 0]} color="#d7ad84" />
          <Box position={[1, 2, 0]} color="#d7ad84" />
          <Box position={[2, 2, 0]} color="#d7ad84" />
          <Box position={[3, 2, 0]} color="#d7ad84" />
          <Box position={[4, 2, 0]} color="#d7ad84" />
          <Box position={[5, 2, 0]} color="#d7ad84" />
          <Box position={[6, 2, 0]} color="#0e1a38" />
          <Box position={[-6, 1, 0]} color="#0e1a38" />
          <Box position={[-5, 1, 0]} color="#a51414" />
          <Box position={[-4, 1, 0]} color="#f24949" />
          <Box position={[-3, 1, 0]} color="#f24949" />
          <Box position={[-2, 1, 0]} color="#d7ad84" />
          <Box position={[-1, 1, 0]} color="#d7ad84" />
          <Box position={[0, 1, 0]} color="#d7ad84" />
          <Box position={[1, 1, 0]} color="#0e1a38" />
          <Box position={[2, 1, 0]} color="#d7ad84" />
          <Box position={[3, 1, 0]} color="#d7ad84" />
          <Box position={[4, 1, 0]} color="#0e1a38" />
          <Box position={[5, 1, 0]} color="#d7ad84" />
          <Box position={[6, 1, 0]} color="#0e1a38" />
          <Box position={[-6, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#a51414" />
          <Box position={[-4, 0, 0]} color="#0e1a38" />
          <Box position={[-3, 0, 0]} color="#f24949" />
          <Box position={[-2, 0, 0]} color="#d7ad84" />
          <Box position={[-1, 0, 0]} color="#d7ad84" />
          <Box position={[0, 0, 0]} color="#d7ad84" />
          <Box position={[1, 0, 0]} color="#0e1a38" />
          <Box position={[2, 0, 0]} color="#d7ad84" />
          <Box position={[3, 0, 0]} color="#d7ad84" />
          <Box position={[4, 0, 0]} color="#0e1a38" />
          <Box position={[5, 0, 0]} color="#d7ad84" />
          <Box position={[6, 0, 0]} color="#0e1a38" />
          <Box position={[-6, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#a51414" />
          <Box position={[-4, -1, 0]} color="#0e1a38" />
          <Box position={[-3, -1, 0]} color="#f24949" />
          <Box position={[-2, -1, 0]} color="#d7ad84" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[0, -1, 0]} color="#d7ad84" />
          <Box position={[1, -1, 0]} color="#d7ad84" />
          <Box position={[2, -1, 0]} color="#d7ad84" />
          <Box position={[3, -1, 0]} color="#d7ad84" />
          <Box position={[4, -1, 0]} color="#d7ad84" />
          <Box position={[5, -1, 0]} color="#d7ad84" />
          <Box position={[6, -1, 0]} color="#d7ad84" />
          <Box position={[7, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -2, 0]} color="#a51414" />
          <Box position={[-3, -2, 0]} color="#f24949" />
          <Box position={[-2, -2, 0]} color="#0e1a38" />
          <Box position={[-1, -2, 0]} color="#d7ad84" />
          <Box position={[0, -2, 0]} color="#d7ad84" />
          <Box position={[1, -2, 0]} color="#d7ad84" />
          <Box position={[2, -2, 0]} color="#d7ad84" />
          <Box position={[3, -2, 0]} color="#d7ad84" />
          <Box position={[4, -2, 0]} color="#d7ad84" />
          <Box position={[5, -2, 0]} color="#d7ad84" />
          <Box position={[6, -2, 0]} color="#d7ad84" />
          <Box position={[7, -2, 0]} color="#d7ad84" />
          <Box position={[8, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -3, 0]} color="#f24949" />
          <Box position={[-2, -3, 0]} color="#0e1a38" />
          <Box position={[-1, -3, 0]} color="#d7ad84" />
          <Box position={[0, -3, 0]} color="#d7ad84" />
          <Box position={[1, -3, 0]} color="#d7ad84" />
          <Box position={[2, -3, 0]} color="#d7ad84" />
          <Box position={[3, -3, 0]} color="#d7ad84" />
          <Box position={[4, -3, 0]} color="#d7ad84" />
          <Box position={[5, -3, 0]} color="#d7ad84" />
          <Box position={[6, -3, 0]} color="#d7ad84" />
          <Box position={[7, -3, 0]} color="#d7ad84" />
          <Box position={[8, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#d7ad84" />
          <Box position={[-1, -4, 0]} color="#0e1a38" />
          <Box position={[0, -4, 0]} color="#0e1a38" />
          <Box position={[1, -4, 0]} color="#0e1a38" />
          <Box position={[2, -4, 0]} color="#0e1a38" />
          <Box position={[3, -4, 0]} color="#0e1a38" />
          <Box position={[4, -4, 0]} color="#0e1a38" />
          <Box position={[5, -4, 0]} color="#0e1a38" />
          <Box position={[6, -4, 0]} color="#0e1a38" />
          <Box position={[7, -4, 0]} color="#0e1a38" />
          <Box position={[-3, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#d7ad84" />
          <Box position={[0, -5, 0]} color="#d7ad84" />
          <Box position={[1, -5, 0]} color="#d7ad84" />
          <Box position={[2, -5, 0]} color="#d7ad84" />
          <Box position={[3, -5, 0]} color="#d7ad84" />
          <Box position={[4, -5, 0]} color="#d7ad84" />
          <Box position={[5, -5, 0]} color="#d7ad84" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[-4, -6, 0]} color="#0e1a38" />
          <Box position={[-3, -6, 0]} color="#a51414" />
          <Box position={[-2, -6, 0]} color="#f24949" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[-5, -7, 0]} color="#0e1a38" />
          <Box position={[-4, -7, 0]} color="#a51414" />
          <Box position={[-3, -7, 0]} color="#f24949" />
          <Box position={[-2, -7, 0]} color="#f24949" />
          <Box position={[-1, -7, 0]} color="#f24949" />
          <Box position={[0, -7, 0]} color="#f24949" />
          <Box position={[1, -7, 0]} color="#0e1a38" />
          <Box position={[2, -7, 0]} color="#f24949" />
          <Box position={[3, -7, 0]} color="#f24949" />
          <Box position={[4, -7, 0]} color="#0e1a38" />
          <Box position={[-6, -8, 0]} color="#0e1a38" />
          <Box position={[-5, -8, 0]} color="#a51414" />
          <Box position={[-4, -8, 0]} color="#f24949" />
          <Box position={[-3, -8, 0]} color="#f24949" />
          <Box position={[-2, -8, 0]} color="#f24949" />
          <Box position={[-1, -8, 0]} color="#0e1a38" />
          <Box position={[0, -8, 0]} color="#f24949" />
          <Box position={[1, -8, 0]} color="#f24949" />
          <Box position={[2, -8, 0]} color="#0e1a38" />
          <Box position={[3, -8, 0]} color="#f24949" />
          <Box position={[4, -8, 0]} color="#f24949" />
          <Box position={[5, -8, 0]} color="#0e1a38" />
          <Box position={[6, -8, 0]} color="#0e1a38" />
          <Box position={[-7, -9, 0]} color="#0e1a38" />
          <Box position={[-6, -9, 0]} color="#a51414" />
          <Box position={[-5, -9, 0]} color="#f24949" />
          <Box position={[-4, -9, 0]} color="#f24949" />
          <Box position={[-3, -9, 0]} color="#f24949" />
          <Box position={[-2, -9, 0]} color="#f24949" />
          <Box position={[-1, -9, 0]} color="#f24949" />
          <Box position={[0, -9, 0]} color="#0e1a38" />
          <Box position={[1, -9, 0]} color="#f24949" />
          <Box position={[2, -9, 0]} color="#f24949" />
          <Box position={[3, -9, 0]} color="#0e1a38" />
          <Box position={[4, -9, 0]} color="#f24949" />
          <Box position={[5, -9, 0]} color="#f24949" />
          <Box position={[6, -9, 0]} color="#f24949" />
          <Box position={[7, -9, 0]} color="#0e1a38" />
          <Box position={[-8, -10, 0]} color="#0e1a38" />
          <Box position={[-7, -10, 0]} color="#a51414" />
          <Box position={[-6, -10, 0]} color="#f24949" />
          <Box position={[-5, -10, 0]} color="#f24949" />
          <Box position={[-4, -10, 0]} color="#f24949" />
          <Box position={[-3, -10, 0]} color="#f24949" />
          <Box position={[-2, -10, 0]} color="#f24949" />
          <Box position={[-1, -10, 0]} color="#f24949" />
          <Box position={[0, -10, 0]} color="#0e1a38" />
          <Box position={[1, -10, 0]} color="#f24949" />
          <Box position={[2, -10, 0]} color="#f24949" />
          <Box position={[3, -10, 0]} color="#f24949" />
          <Box position={[4, -10, 0]} color="#0e1a38" />
          <Box position={[5, -10, 0]} color="#f24949" />
          <Box position={[6, -10, 0]} color="#f24949" />
          <Box position={[7, -10, 0]} color="#f24949" />
          <Box position={[8, -10, 0]} color="#0e1a38" />
        </>
      );
    }
    if (x == "Purple") {
      return (
        <>
          <Box position={[-3, 5, 0]} color="#0e1a38" />
          <Box position={[-2, 5, 0]} color="#0e1a38" />
          <Box position={[-1, 5, 0]} color="#0e1a38" />
          <Box position={[0, 5, 0]} color="#0e1a38" />
          <Box position={[1, 5, 0]} color="#0e1a38" />
          <Box position={[2, 5, 0]} color="#0e1a38" />
          <Box position={[3, 5, 0]} color="#0e1a38" />
          <Box position={[-4, 4, 0]} color="#0e1a38" />
          <Box position={[-3, 4, 0]} color="#502370" />
          <Box position={[-2, 4, 0]} color="#6c2987" />
          <Box position={[-1, 4, 0]} color="#6c2987" />
          <Box position={[0, 4, 0]} color="#6c2987" />
          <Box position={[1, 4, 0]} color="#6c2987" />
          <Box position={[2, 4, 0]} color="#6c2987" />
          <Box position={[3, 4, 0]} color="#6c2987" />
          <Box position={[4, 4, 0]} color="#0e1a38" />
          <Box position={[-5, 3, 0]} color="#0e1a38" />
          <Box position={[-4, 3, 0]} color="#502370" />
          <Box position={[-3, 3, 0]} color="#6c2987" />
          <Box position={[-2, 3, 0]} color="#6c2987" />
          <Box position={[-1, 3, 0]} color="#6c2987" />
          <Box position={[0, 3, 0]} color="#d7ad84" />
          <Box position={[1, 3, 0]} color="#d7ad84" />
          <Box position={[2, 3, 0]} color="#6c2987" />
          <Box position={[3, 3, 0]} color="#6c2987" />
          <Box position={[4, 3, 0]} color="#d7ad84" />
          <Box position={[5, 3, 0]} color="#0e1a38" />
          <Box position={[-6, 2, 0]} color="#0e1a38" />
          <Box position={[-5, 2, 0]} color="#502370" />
          <Box position={[-4, 2, 0]} color="#6c2987" />
          <Box position={[-3, 2, 0]} color="#6c2987" />
          <Box position={[-2, 2, 0]} color="#6c2987" />
          <Box position={[-1, 2, 0]} color="#d7ad84" />
          <Box position={[0, 2, 0]} color="#d7ad84" />
          <Box position={[1, 2, 0]} color="#d7ad84" />
          <Box position={[2, 2, 0]} color="#d7ad84" />
          <Box position={[3, 2, 0]} color="#d7ad84" />
          <Box position={[4, 2, 0]} color="#d7ad84" />
          <Box position={[5, 2, 0]} color="#d7ad84" />
          <Box position={[6, 2, 0]} color="#0e1a38" />
          <Box position={[-6, 1, 0]} color="#0e1a38" />
          <Box position={[-5, 1, 0]} color="#502370" />
          <Box position={[-4, 1, 0]} color="#6c2987" />
          <Box position={[-3, 1, 0]} color="#6c2987" />
          <Box position={[-2, 1, 0]} color="#d7ad84" />
          <Box position={[-1, 1, 0]} color="#d7ad84" />
          <Box position={[0, 1, 0]} color="#d7ad84" />
          <Box position={[1, 1, 0]} color="#0e1a38" />
          <Box position={[2, 1, 0]} color="#d7ad84" />
          <Box position={[3, 1, 0]} color="#d7ad84" />
          <Box position={[4, 1, 0]} color="#0e1a38" />
          <Box position={[5, 1, 0]} color="#d7ad84" />
          <Box position={[6, 1, 0]} color="#0e1a38" />
          <Box position={[-6, 0, 0]} color="#0e1a38" />
          <Box position={[-5, 0, 0]} color="#502370" />
          <Box position={[-4, 0, 0]} color="#0e1a38" />
          <Box position={[-3, 0, 0]} color="#6c2987" />
          <Box position={[-2, 0, 0]} color="#d7ad84" />
          <Box position={[-1, 0, 0]} color="#d7ad84" />
          <Box position={[0, 0, 0]} color="#d7ad84" />
          <Box position={[1, 0, 0]} color="#0e1a38" />
          <Box position={[2, 0, 0]} color="#d7ad84" />
          <Box position={[3, 0, 0]} color="#d7ad84" />
          <Box position={[4, 0, 0]} color="#0e1a38" />
          <Box position={[5, 0, 0]} color="#d7ad84" />
          <Box position={[6, 0, 0]} color="#0e1a38" />
          <Box position={[-6, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -1, 0]} color="#502370" />
          <Box position={[-4, -1, 0]} color="#0e1a38" />
          <Box position={[-3, -1, 0]} color="#6c2987" />
          <Box position={[-2, -1, 0]} color="#d7ad84" />
          <Box position={[-1, -1, 0]} color="#0e1a38" />
          <Box position={[0, -1, 0]} color="#d7ad84" />
          <Box position={[1, -1, 0]} color="#d7ad84" />
          <Box position={[2, -1, 0]} color="#d7ad84" />
          <Box position={[3, -1, 0]} color="#d7ad84" />
          <Box position={[4, -1, 0]} color="#d7ad84" />
          <Box position={[5, -1, 0]} color="#d7ad84" />
          <Box position={[6, -1, 0]} color="#d7ad84" />
          <Box position={[7, -1, 0]} color="#0e1a38" />
          <Box position={[-5, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -2, 0]} color="#502370" />
          <Box position={[-3, -2, 0]} color="#6c2987" />
          <Box position={[-2, -2, 0]} color="#0e1a38" />
          <Box position={[-1, -2, 0]} color="#d7ad84" />
          <Box position={[0, -2, 0]} color="#d7ad84" />
          <Box position={[1, -2, 0]} color="#d7ad84" />
          <Box position={[2, -2, 0]} color="#d7ad84" />
          <Box position={[3, -2, 0]} color="#d7ad84" />
          <Box position={[4, -2, 0]} color="#d7ad84" />
          <Box position={[5, -2, 0]} color="#d7ad84" />
          <Box position={[6, -2, 0]} color="#d7ad84" />
          <Box position={[7, -2, 0]} color="#d7ad84" />
          <Box position={[8, -2, 0]} color="#0e1a38" />
          <Box position={[-4, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -3, 0]} color="#6c2987" />
          <Box position={[-2, -3, 0]} color="#0e1a38" />
          <Box position={[-1, -3, 0]} color="#d7ad84" />
          <Box position={[0, -3, 0]} color="#d7ad84" />
          <Box position={[1, -3, 0]} color="#d7ad84" />
          <Box position={[2, -3, 0]} color="#d7ad84" />
          <Box position={[3, -3, 0]} color="#d7ad84" />
          <Box position={[4, -3, 0]} color="#d7ad84" />
          <Box position={[5, -3, 0]} color="#d7ad84" />
          <Box position={[6, -3, 0]} color="#d7ad84" />
          <Box position={[7, -3, 0]} color="#d7ad84" />
          <Box position={[8, -3, 0]} color="#0e1a38" />
          <Box position={[-3, -4, 0]} color="#0e1a38" />
          <Box position={[-2, -4, 0]} color="#d7ad84" />
          <Box position={[-1, -4, 0]} color="#0e1a38" />
          <Box position={[0, -4, 0]} color="#0e1a38" />
          <Box position={[1, -4, 0]} color="#0e1a38" />
          <Box position={[2, -4, 0]} color="#0e1a38" />
          <Box position={[3, -4, 0]} color="#0e1a38" />
          <Box position={[4, -4, 0]} color="#0e1a38" />
          <Box position={[5, -4, 0]} color="#0e1a38" />
          <Box position={[6, -4, 0]} color="#0e1a38" />
          <Box position={[7, -4, 0]} color="#0e1a38" />
          <Box position={[-3, -5, 0]} color="#0e1a38" />
          <Box position={[-2, -5, 0]} color="#0e1a38" />
          <Box position={[-1, -5, 0]} color="#d7ad84" />
          <Box position={[0, -5, 0]} color="#d7ad84" />
          <Box position={[1, -5, 0]} color="#d7ad84" />
          <Box position={[2, -5, 0]} color="#d7ad84" />
          <Box position={[3, -5, 0]} color="#d7ad84" />
          <Box position={[4, -5, 0]} color="#d7ad84" />
          <Box position={[5, -5, 0]} color="#d7ad84" />
          <Box position={[6, -5, 0]} color="#0e1a38" />
          <Box position={[-4, -6, 0]} color="#0e1a38" />
          <Box position={[-3, -6, 0]} color="#502370" />
          <Box position={[-2, -6, 0]} color="#6c2987" />
          <Box position={[-1, -6, 0]} color="#0e1a38" />
          <Box position={[0, -6, 0]} color="#0e1a38" />
          <Box position={[1, -6, 0]} color="#0e1a38" />
          <Box position={[2, -6, 0]} color="#0e1a38" />
          <Box position={[3, -6, 0]} color="#0e1a38" />
          <Box position={[4, -6, 0]} color="#0e1a38" />
          <Box position={[5, -6, 0]} color="#0e1a38" />
          <Box position={[-5, -7, 0]} color="#0e1a38" />
          <Box position={[-4, -7, 0]} color="#502370" />
          <Box position={[-3, -7, 0]} color="#6c2987" />
          <Box position={[-2, -7, 0]} color="#6c2987" />
          <Box position={[-1, -7, 0]} color="#6c2987" />
          <Box position={[0, -7, 0]} color="#6c2987" />
          <Box position={[1, -7, 0]} color="#0e1a38" />
          <Box position={[2, -7, 0]} color="#6c2987" />
          <Box position={[3, -7, 0]} color="#6c2987" />
          <Box position={[4, -7, 0]} color="#0e1a38" />
          <Box position={[-6, -8, 0]} color="#0e1a38" />
          <Box position={[-5, -8, 0]} color="#502370" />
          <Box position={[-4, -8, 0]} color="#6c2987" />
          <Box position={[-3, -8, 0]} color="#6c2987" />
          <Box position={[-2, -8, 0]} color="#6c2987" />
          <Box position={[-1, -8, 0]} color="#0e1a38" />
          <Box position={[0, -8, 0]} color="#6c2987" />
          <Box position={[1, -8, 0]} color="#6c2987" />
          <Box position={[2, -8, 0]} color="#0e1a38" />
          <Box position={[3, -8, 0]} color="#6c2987" />
          <Box position={[4, -8, 0]} color="#6c2987" />
          <Box position={[5, -8, 0]} color="#0e1a38" />
          <Box position={[6, -8, 0]} color="#0e1a38" />
          <Box position={[-7, -9, 0]} color="#0e1a38" />
          <Box position={[-6, -9, 0]} color="#502370" />
          <Box position={[-5, -9, 0]} color="#6c2987" />
          <Box position={[-4, -9, 0]} color="#6c2987" />
          <Box position={[-3, -9, 0]} color="#6c2987" />
          <Box position={[-2, -9, 0]} color="#6c2987" />
          <Box position={[-1, -9, 0]} color="#6c2987" />
          <Box position={[0, -9, 0]} color="#0e1a38" />
          <Box position={[1, -9, 0]} color="#6c2987" />
          <Box position={[2, -9, 0]} color="#6c2987" />
          <Box position={[3, -9, 0]} color="#0e1a38" />
          <Box position={[4, -9, 0]} color="#6c2987" />
          <Box position={[5, -9, 0]} color="#6c2987" />
          <Box position={[6, -9, 0]} color="#6c2987" />
          <Box position={[7, -9, 0]} color="#0e1a38" />
          <Box position={[-8, -10, 0]} color="#0e1a38" />
          <Box position={[-7, -10, 0]} color="#502370" />
          <Box position={[-6, -10, 0]} color="#6c2987" />
          <Box position={[-5, -10, 0]} color="#6c2987" />
          <Box position={[-4, -10, 0]} color="#6c2987" />
          <Box position={[-3, -10, 0]} color="#6c2987" />
          <Box position={[-2, -10, 0]} color="#6c2987" />
          <Box position={[-1, -10, 0]} color="#6c2987" />
          <Box position={[0, -10, 0]} color="#0e1a38" />
          <Box position={[1, -10, 0]} color="#6c2987" />
          <Box position={[2, -10, 0]} color="#6c2987" />
          <Box position={[3, -10, 0]} color="#6c2987" />
          <Box position={[4, -10, 0]} color="#0e1a38" />
          <Box position={[5, -10, 0]} color="#6c2987" />
          <Box position={[6, -10, 0]} color="#6c2987" />
          <Box position={[7, -10, 0]} color="#6c2987" />
          <Box position={[8, -10, 0]} color="#0e1a38" />
        </>
      );
    }
  };
  return <>{generateType()}</>;
};