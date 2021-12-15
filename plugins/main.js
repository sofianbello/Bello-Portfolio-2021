import * as THREE from 'three'

/**
 * SCENE
 */
const scene = new THREE.Scene()
const sizeW = window.innerWidth
const sizeH = window.innerHeight

// CAMERA
const camera = new THREE.PerspectiveCamera(75, sizeW/sizeH, 0.1, 1000)
camera.position.setZ(30)

// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizeW,sizeH)
renderer.render(scene,camera)