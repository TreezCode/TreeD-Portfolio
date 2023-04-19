// external imports
import {
  MeshStandardMaterial,
  IcosahedronGeometry,
  PointsMaterial,
  ColorManagement,
} from 'three';
// When creating a material or color in global space - outside of React Three Fiber's Canvas context
ColorManagement.enabled = true;
  
// Computer model materials/geometries
//````````````````````````````````````````````````````````````````````````````````````````````````
export const caseAccentMaterial = new MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1,
});
export const monitorBackplate_1 = new MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1,
});
export const monitorBackplate_2 = new MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1,
});
export const wifiMaterial_1 = new MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1,
});
export const wifiMaterial_2 = new MeshStandardMaterial({
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: false,
  metalness: 0.1,
});
export const mouseBtnsMaterial = new MeshStandardMaterial({
  roughness: 0.3,
});
// Computer model textures
//````````````````````````````````````````````````````````````````````````````````````````````````
export const textures = {
  whitemarble: [
    '../../../assets/textures/whitemarble/Marble012_1K_Color.jpg',
    '../../../assets/textures/whitemarble/Marble012_1K_Displacement.jpg',
    '../../../assets/textures/whitemarble/Marble012_1K_NormalGL.jpg',
    '../../../assets/textures/whitemarble/Marble012_1K_NormalDX.jpg',
    '../../../assets/textures/whitemarble/Marble012_1K_Roughness.jpg',
  ],
  darkwood: [
    '../../../assets/textures/darkwood/Wood067_1K_Color.jpg',
    '../../../assets/textures/darkwood/Wood067_1K_Displacement.jpg',
    '../../../assets/textures/darkwood/Wood067_1K_NormalGL.jpg',
    '../../../assets/textures/darkwood/Wood067_1K_NormalDX.jpg',
    '../../../assets/textures/darkwood/Wood067_1K_Roughness.jpg',
  ],
  lightwood: [
    '../../../assets/textures/lightwood/Wood048_1K_Color.jpg',
    '../../../assets/textures/lightwood/Wood048_1K_Displacement.jpg',
    '../../../assets/textures/lightwood/Wood048_1K_NormalGL.jpg',
    '../../../assets/textures/lightwood/Wood048_1K_NormalDX.jpg',
    '../../../assets/textures/lightwood/Wood048_1K_Roughness.jpg',
  ],
  shinymetal: [
    '../../../assets/textures/shinymetal/Metal034_1K_Color.jpg',
    '../../../assets/textures/shinymetal/Metal034_1K_Displacement.jpg',
    '../../../assets/textures/shinymetal/Metal034_1K_Metalness.jpg',
    '../../../assets/textures/shinymetal/Metal034_1K_NormalGL.jpg',
    '../../../assets/textures/shinymetal/Metal034_1K_NormalDX.jpg',
    '../../../assets/textures/shinymetal/Metal034_1K_Roughness.jpg',
  ],
}

// Ball model materials/geometries
//````````````````````````````````````````````````````````````````````````````````````````````````
export const ballGeometry = new IcosahedronGeometry(1, 1);
export const ballMaterial = new MeshStandardMaterial({
  color: '#95a1f1',
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: true,
});

// Stars canvas materials/geometries
//````````````````````````````````````````````````````````````````````````````````````````````````
export const starMaterial = new PointsMaterial({
  transparent: true,
  color: '#aaa6c3',
  size: 0.002,
  sizeAttenuation: true,
  depthWrite: false,
});