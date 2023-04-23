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
export const customMaterials = {
  'Custom.caseAccentMaterial' : new MeshStandardMaterial({
    name: 'Custom.caseAccentMaterial',
    polygonOffset: false,
    polygonOffsetFactor: '-5',
    flatShading: false,
    metalness: 0.1,
    color: '#915eff'
  }),
  'Custom.rtxAccentMaterial' : new MeshStandardMaterial({
    name: 'Custom.rtxAccentMaterial',
    polygonOffset: false,
    polygonOffsetFactor: '-5',
    flatShading: false,
    metalness: 0.1,
    color: '#915eff'
  }),
  'Custom.monitorBackplate_01' : new MeshStandardMaterial({
    name: 'Custom.monitorBackplate_01',
    polygonOffset: false,
    polygonOffsetFactor: '-5',
    flatShading: false,
    metalness: 0.1,
    color: '#915eff'
  }),
  'Custom.monitorBackplate_02' : new MeshStandardMaterial({
    name: 'Custom.monitorBackplate_02',
    polygonOffset: false,
    polygonOffsetFactor: '-5',
    flatShading: false,
    metalness: 0.1,
    color: '#915eff'
  }),
  'Custom.wifiMaterial_01' : new MeshStandardMaterial({
    name: 'Custom.wifiMaterial_01',
    polygonOffset: false,
    polygonOffsetFactor: '-5',
    flatShading: false,
    metalness: 0.1,
    color: '#915eff',
  }),
  'Custom.wifiMaterial_02' : new MeshStandardMaterial({
    name: 'Custom.wifiMaterial_02',
    polygonOffset: false,
    polygonOffsetFactor: '-5',
    flatShading: false,
    metalness: 0.1,
    color: '#915eff'
  }),
  'Custom.mouseBtnsMaterial' : new MeshStandardMaterial({
    name: 'Custom.mouseBtnsMaterial',
    roughness: 0.3,
    color: '#915eff'
  }),
}
// Computer model textures
//````````````````````````````````````````````````````````````````````````````````````````````````
export const textures = {
  whitemarble: [
    '../../../assets/textures/whitemarble/Marble012_1K_Color.jpg',
    '../../../assets/textures/whitemarble/Marble012_1K_NormalGL.jpg',
    '../../../assets/textures/whitemarble/Marble012_1K_Roughness.jpg',
  ],
  darkwood: [
    '../../../assets/textures/darkwood/Wood067_1K_Color.jpg',
    '../../../assets/textures/darkwood/Wood067_1K_NormalGL.jpg',
    '../../../assets/textures/darkwood/Wood067_1K_Roughness.jpg',
  ],
  lightwood: [
    '../../../assets/textures/lightwood/Wood048_1K_Color.jpg',
    '../../../assets/textures/lightwood/Wood048_1K_NormalGL.jpg',
    '../../../assets/textures/lightwood/Wood048_1K_Roughness.jpg',
  ],
  smoothmetal: [
    '../../../assets/textures/smoothmetal/Metal030_1K_Color.jpg',
    '../../../assets/textures/smoothmetal/Metal030_1K_NormalGL.jpg',
    '../../../assets/textures/smoothmetal/Metal030_1K_Roughness.jpg',
    '../../../assets/textures/smoothmetal/Metal030_1K_Metalness.jpg',
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