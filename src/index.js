import Canvas from './Canvas';
import { Scene } from 'react-scenejs';

if (typeof window !== 'undefined') {
    window.scene = Scene;
}

export { Canvas };
