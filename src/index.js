import Canvas from './Canvas';
import Scene from "scenejs";

if (typeof window !== 'undefined') {
    window.scene = new Scene();
}

export { Canvas };
