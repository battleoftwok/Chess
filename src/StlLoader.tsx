import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { promises as fs } from 'fs';
import { join } from 'path';

interface StlLoaderProps {
}

const getListAssetsFiles = (path: string) => {

}

export const StlLoader = (props: StlLoaderProps): JSX.Element => {

    const scene = new THREE.Scene

    const material = new THREE.MeshPhysicalMaterial({
        color: 0xb2ffc8,
        metalness: 0.25,
        roughness: 0.1,
        opacity: 1.0,
        transparent: true,
        transmission: 0.99,
        clearcoat: 1.0,
        clearcoatRoughness: 0.25
    })

    const loader = new STLLoader()

    loader.load(
        'models/example.stl',
        function (geometry) {
            const mesh = new THREE.Mesh(geometry, material)
            scene.add(mesh)
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

    return (<></>)
}