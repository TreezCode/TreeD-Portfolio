export const useColorEditor = (materials, customMaterials) => {

  const updateMaterial = (meshMaterial, colorName) => {
    if (!meshMaterial.originalMaterial) {
      meshMaterial.originalMaterial = meshMaterial.clone();
    }
    meshMaterial.color = colorName;
    meshMaterial.needsUpdate = true;
  };

  const resetMaterial = (meshMaterial) => {
    if (meshMaterial.originalMaterial) {
      meshMaterial.color = meshMaterial.originalMaterial.color;
      meshMaterial.needsUpdate = true;
    }
  };

  const handleColorChange = (snap, snapItems) => {
    if (!snap.current || !snap.customizer) {
      return;
    }

    const meshMaterial = snap.current.materialName.includes('Custom')
      ? customMaterials[snap.current.materialName]
      : materials[snap.current.materialName];

    const colorName = snapItems[snap.current.name]?.currentColor;
    !colorName || colorName === 'reset'
      ? resetMaterial(meshMaterial)
      : updateMaterial(meshMaterial, colorName);
  };

  return {
    handleColorChange,
  };
};
