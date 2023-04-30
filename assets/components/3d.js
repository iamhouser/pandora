import React from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function Scene() {
    const gltf = useLoader(GLTFLoader, '/office.glb')
    return <primitive object={gltf.scene}/>


}