import Canvas from './Canvas';
import RainDrop from './components/RainDrop';
import Scene from 'scenejs';

if (typeof window !== 'undefined') {
	window.scene = new Scene();
}

export {RainDrop}
export default Canvas
