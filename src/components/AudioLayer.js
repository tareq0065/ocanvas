import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Canvas/Canvas.scss';
import { JsCanvasContext } from '../../util/useJsCanvas';
import MediaScene from '@scenejs/media';

const AudioLayer = ({
	name,
	id,
	audio,
	volume,
	playSpeed,
	delay,
	seekStart,
	seekEnd,
}) => {
	const jsCanvas = useContext(JsCanvasContext);

	useEffect(() => {
		let media = new MediaScene();
		console.log('jsCanvas', jsCanvas);
		jsCanvas.newItem(name + id);
		media
			.addMedia(name + id, 'https://daybrush.com/scenejs/clapper.mp3')
			.seek(0, 0.452)
			.setPlaySpeed(2)
			.setVolume(0.7)
			.setDelay(2.1);
		console.log('media', media);

		// if (seekStart && seekEnd) {
		// 	media.seek(seekStart, seekEnd);
		// }
		//
		// if (volume) {
		// 	media.setVolume(volume);
		// }
		//
		// if (playSpeed) {
		// 	media.setPlaySpeed(playSpeed);
		// }
		//
		// if (delay) {
		// 	media.setPlaySpeed(delay);
		// }
	}, [audio, volume, playSpeed, delay, seekStart, seekEnd]);

	return <div></div>;
};

AudioLayer.defaultProps = {
	name: 'audio',
	id: 1,
	audio:
		'http://cld3097web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/5.02.mp3',
	volume: 1,
	playSpeed: 1,
	delay: 0,
	seekStart: 0,
	seekEnd: 0.452,
};

AudioLayer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	volume: PropTypes.number,
	audio: PropTypes.string,
	playSpeed: PropTypes.number,
	delay: PropTypes.number || PropTypes.string,
	seekStart: PropTypes.number,
	seekEnd: PropTypes.number,
};

export { AudioLayer };
