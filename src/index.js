import Canvas from './Canvas';
import RainDrop from './components/RainDrop/RainDrop';
import Scene from 'scenejs';

if (typeof window !== 'undefined') {
	window.scene = new Scene();
}

exports.Canvas = Canvas;
exports.RainDrop = RainDrop;
