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