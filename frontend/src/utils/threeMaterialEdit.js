import * as THREE from 'three';

export const accentStandardMaterial1 = new THREE.MeshStandardMaterial({
  color: 'violet',
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  roughness: 0.3,
  metalness: 0.7,
});

export const accentStandardMaterial2 = new THREE.MeshStandardMaterial({
  color: 'violet',
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
});

export const deskMaterial = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  roughness: 0.2,
  metalness: 0.1,
});

export const caseMaterial = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  roughness: 0.2,
  metalness: 0.1,
});

export const mouseBtnsMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.6,
});

export const powersupplyMaterial = new THREE.MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  roughness: 0.3,
  metalness: 0.2,
});

export const ramMaterial = new THREE.MeshStandardMaterial({});