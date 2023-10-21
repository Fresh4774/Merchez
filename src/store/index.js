import { proxy } from 'valtio';

const state = proxy({
  intro: false,
  color: '#00ADB5',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png'
});

export default state;
