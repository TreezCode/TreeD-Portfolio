// external imports
import { proxy } from 'valtio';

export const state = proxy({
  current: null,
  customizer: false,
  items: {
    // standard materials
    'Case Buttons': { material: ['Material.088'] },
    'Case Decal': { material: ['Material.074_10'] },
    'Case Fans': { material: ['Material.017'] },
    'Case Fans RGB': { material: ['Material.074_0'] },
    'Case Fans Wire': { material: ['Material.073'] },
    'CPU Fan': { material: ['Material.034'] },
    'CPU Mount': { material: ['Material.045'] },
    'CPU RGB': { material: ['Material.034'] },
    'Gigabyte Decal': { material: ['Material.074_31'] },
    'GPU': { material: ['Material.054'] },
    'GPU Accent': { material: ['Material.074_22'] },
    'GPU Wires': { material: ['Material.085'] },
    'Keyboard Base': { material: ['Tastatur_Unterseite'] },
    'Keyboard Bottom': { material: ['Tastatur_Seite'] },
    'Keyboard Keys': { material: ['Material.025'] },
    'Monitor Back Decal': { material: ['Material.074_28'] },
    'Monitor Base Back': { material: ['Material.037'] },
    'Monitor Base Inner': { material: ['Material.006'] },
    'Monitor Main': { material: ['Material.055'] },
    'Monitor Mount': { material: ['Material.003'] },
    'Monitor Power Button': { material: ['Material.074_29'] }, 
    'Monitor Stand': { material: ['Material.043'] },
    'Motherboard Wires': { material: ['Material.087'] },
    'Mousepad': { material: ['Material.074_21'] },
    'Mouse': { material: ['Material.074_25'] },
    'RAM': { material: ['Material.074_7'] },
    'Speakers': { material: ['Material.039'] },
    'Wire Clips': { material: ['Material.058'] },
    // textured materials
    'Case': { material: ['Material.074'] },
    'Desk': { material: ['Material'] },
    'GPU Top': { material: ['Material.074_23'] },
    'Monitor Screen': { material: ['Material.074_30'] },
    'Motherboard': { material: ['Material.074_1'] },
    'Powersupply': { material: ['Material.074_2'] } ,
    'Powersupply Decal 1': { material: ['Material.074_8'] } ,
    'Powersupply Decal 2': { material: ['Material.074_9'] } ,
    'Powersupply Decal 3': { material: ['Material.074_12'] } ,
    'Psu Backplate': { material: ['Material.074_13'] } ,
    // accent materials
    'Case Clips': { material: ['Material.094'] },
    'Keyboard Wire': { material: ['Material.048'] },
    'Monitor Base Front': { material: ['Material.042'] },
    'Monitor Wire': { material: ['Material.061'] },
    'Mouse Wire': { material: ['Material.046'] },
    'Mouse Inner': { material: ['Material.007'] },
    'Speaker Wire 1': { material: ['Material.004'] },
    'Speaker Wire 2': { material: ['Material.090'] },
    // custom matertials    
    'Case Accent': { material: ['Custom.caseAccentMaterial'] },
    'RTX Accent': { material: ['Custom.rtxAccentMaterial'] },
    'Monitor Backplate 1': { material: ['Custom.monitorBackplate_01'] },
    'Monitor Backplate 2': { material: ['Custom.monitorBackplate_02'] },
    'Wifi Antenna 1': { material: ['Custom.wifiMaterial_01'] },
    'Wifi Antenna 2': { material: ['Custom.wifiMaterial_02'] },
    'Mouse Side Buttons': { material: ['Custom.mouseBtnsMaterial'] },
  },
});