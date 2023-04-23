import { useTexture } from '@react-three/drei';

export const useTextureEditor = (materials, customMaterials, textures) => {
  const smoothMetalProps = useTexture({
    map: textures.smoothmetal[0],
    normalMap: textures.smoothmetal[1],
    roughnessMap: textures.smoothmetal[2],
    metalnessMap: textures.smoothmetal[3],
  });
  const whitemarbleProps = useTexture({
    map: textures.whitemarble[0],
    normalMap: textures.whitemarble[1],
    roughnessMap: textures.whitemarble[2]
  });
  const darkwoodProps = useTexture({
    map: textures.darkwood[0],
    normalMap: textures.darkwood[1],
    roughnessMap: textures.darkwood[2]
  });
  const lightwoodProps = useTexture({
    map: textures.lightwood[0],
    normalMap: textures.lightwood[1],
    roughnessMap: textures.lightwood[2]
  });

  const materialProps = {
    'smoothmetal': smoothMetalProps,
    'whitemarble': whitemarbleProps,
    'darkwood': darkwoodProps,
    'lightwood': lightwoodProps
  };

  const updateMaterial = (meshMaterial, textureName) => {
    if (!meshMaterial.originalMaterial) {
      meshMaterial.originalMaterial = meshMaterial.clone();
    }
    meshMaterial.map = materialProps[textureName].map;
    meshMaterial.normalMap = materialProps[textureName].normalMap;
    meshMaterial.roughnessMap = materialProps[textureName].roughnessMap;
    meshMaterial.metalnessMap = materialProps[textureName].metalnessMap;
    meshMaterial.needsUpdate = true;
  };

  const resetMaterial = (meshMaterial) => {
    if (meshMaterial.originalMaterial) {
      meshMaterial.copy(meshMaterial.originalMaterial);
      meshMaterial.needsUpdate = true;
    }
  };

  const handleTextureChange = (snap, snapItems) => {
    if (!snap.current || !snap.customizer) {
      return;
    }

    const meshMaterial = snap.current.materialName.includes('Custom')
      ? customMaterials[snap.current.materialName]
      : materials[snap.current.materialName];

    const textureName = snapItems[snap.current.name]?.currentTexture;
    !textureName || textureName === 'reset'
      ? resetMaterial(meshMaterial)
      : updateMaterial(meshMaterial, textureName);
  };

  return {
    handleTextureChange,
  };
};
