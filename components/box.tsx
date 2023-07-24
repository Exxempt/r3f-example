"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

type ComponentProps = JSX.IntrinsicElements["mesh"] & {
  color?: string;
};

//function Box(props: JSX.IntrinsicElements['mesh']) {
export function Box(props: ComponentProps) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.x += 0.0));

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
      <meshStandardMaterial color={hovered ? "white" : props.color} />
    </mesh>
  );
}
