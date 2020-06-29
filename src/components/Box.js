import React, { useRef } from 'react'
// import { useFrame } from 'react-three-fiber'


const Box = (props) => {
      // This reference will give us direct access to the mesh
    const mesh = useRef()

  // Rotate mesh every frame, this is outside of React without overhead
    // useFrame(() => ())

    return (
      <>
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry attach="geometry" args={[6, 6, 6]} />
            <meshStandardMaterial attach="material" color={'orange'} />
        </mesh>
      </>
    )
}

export default Box;