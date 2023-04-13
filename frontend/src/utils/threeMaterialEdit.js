import * as THREE from 'three';
// When creating a material or color in global space - outside of React Three Fiber's Canvas context
THREE.ColorManagement.enabled = true;

// Computer materials/geometries
//==================================================================
export const caseAccentMaterial = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1
});
export const monitorBackplate_1 = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1
});
export const monitorBackplate_2 = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1
});
export const wifiMaterial_1 = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1
});
export const wifiMaterial_2 = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1
});
export const deskMaterial = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  roughness: 0.2,
  metalness: 0.4,
});
export const caseMaterial = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  roughness: 0.2,
  metalness: 0.3,
});
export const mouseBtnsMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
});
export const powersupplyMaterial = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  roughness: 0.3,
  metalness: 0.4,
});

// Ball materials/geometries
//==================================================================
export const ballGeometry = new THREE.IcosahedronGeometry(1, 1);
export const ballMaterial = new THREE.MeshStandardMaterial({
  color: '#95a1f1',
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: true,
});

// Stars materials/geometries
//==================================================================
export const starMaterial = new THREE.PointsMaterial({
  transparent: true,
  color: '#aaa6c3',
  size: 0.002,
  sizeAttenuation: true,
  depthWrite: false,
});