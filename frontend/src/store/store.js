// external imports
import { proxy } from 'valtio';
// internal imports
import {
  caseMaterial,
  caseAccentMaterial,
  deskMaterial,
  monitorBackplate_1,
  monitorBackplate_2,
  mouseBtnsMaterial,
  powersupplyMaterial,
  wifiMaterial_2,
  wifiMaterial_1,
} from '../utils/threeMaterialEdit';
import { styles } from '../styles';

export const state = proxy({
  current: null,
  items: {
    // standard materials
    ['Case Buttons']: { color: '', material: ['Material.088'] },
    ['Case Fans']: { color: '', material: ['Material.017'] },
    ['Case Fans RGB']: { color: '', material: ['Material.074_0'] },
    ['Case Fans Wire']: { color: '#333333', material: ['Material.073'] },
    ['CPU Fan']: { color: '', material: ['Material.034'] },
    ['CPU Mount']: { color: '', material: ['Material.045'] },
    ['CPU RGB']: { color: '', material: ['Material.034'] },
    ['GPU']: { color: '', material: ['Material.054'] },
    ['GPU Wires']: { color: '#333333', material: ['Material.085'] },
    ['Keyboard Base']: { color: '', material: ['Tastatur_Unterseite'] },
    ['Keyboard Bottom']: { color: '', material: ['Tastatur_Seite'] },
    ['Keyboard Keys']: { color: '', material: ['Material.025'] },
    ['Monitor Back Decal R']: { color: '', material: ['Material.074_28'] },
    ['Monitor Base Back']: { color: '#333333', material: ['Material.037'] },
    ['Monitor Base Inner']: { color: '#333333', material: ['Material.006'] },
    ['Monitor Front Decal']: { color: '', material: ['Material.074_31'] },
    ['Monitor Main']: { color: '#333333', material: ['Material.055'] },
    ['Monitor Mount']: { color: '#333333', material: ['Material.003'] },
    ['Monitor Power Button']: { color: '', material: ['Material.074_29'] }, 
    ['Monitor Stand']: { color: '#333333', material: ['Material.043'] },
    ['Motherboard Wires']: { color: '#333333', material: ['Material.087'] },
    ['Mousepad']: { color: '', material: ['Material.074_21'] },
    ['Mouse']: { color: '#000', material: ['Material.074_25'] },
    ['RAM']: { color: '#333333', material: ['Material.074_7'] },
    ['Speakers']: { color: '#333333', material: ['Material.039'] },
    ['Wire Clips']: { color: '', material: ['Material.058'] },
    // accent materials
    ['Case Accent']: { color: styles.accent, material: caseAccentMaterial },
    ['Case Clips']: { color: styles.accent, material: ['Material.094'] },
    ['Keyboard Wire']: { color: styles.accent, material: ['Material.048'] },
    ['Monitor Backplate 1']: { color: styles.accent, material: monitorBackplate_1 },
    ['Monitor Backplate 2']: { color: styles.accent, material: monitorBackplate_2},
    ['Monitor Base Front']: { color: styles.accent, material: ['Material.042'] },
    ['Monitor Wire']: { color: styles.accent, material: ['Material.061'] },
    ['Mouse Wire']: { color: styles.accent, material: ['Material.046'] },
    ['Mouse Inner']: { color: styles.accent, material: ['Material.007'] },
    ['Speaker Wire 1']: { color: styles.accent, material: ['Material.004'] },
    ['Speaker Wire 2']: { color: styles.accent, material: ['Material.090'] },
    ['Wifi Antenna 1']: { color: styles.accent, material: wifiMaterial_1 },
    ['Wifi Antenna 2']: { color: styles.accent, material: wifiMaterial_2 },
    // textured materials
    ['Case']: { color: '', material: caseMaterial },
    ['Desk']: { color: '', material: deskMaterial },
    ['Monitor Screen']: { color: '', material: ['Material.074_30'] },
    ['Motherboard']: { color: '', material: ['Material.074_1'] },
    ['Mouse Side Buttons']: { color: '', material: mouseBtnsMaterial },
    ['Powersupply']: { color: '', material: powersupplyMaterial },
  },
});