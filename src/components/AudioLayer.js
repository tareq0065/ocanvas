import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Canvas/Canvas.scss';
import { JsCanvasContext } from '../../util/useJsCanvas';
import MediaScene from '../media';

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
		media
			.addMedia(name + id, audio)
			.setPlaySpeed(1)
			.setVolume(1)
			.setDuration(5)
			.setDelay(0);

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

	return <></>;
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
