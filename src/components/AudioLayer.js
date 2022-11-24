import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Canvas/Canvas.css';
import MediaScene from '../media';
import { JsCanvas } from '../jscanvas';

const AudioLayer = ({
	name,
	id,
	audio,
	volume,
	playSpeed,
	delay,
	seekStart,
	seekEnd,
	stop,
}) => {
	useEffect(() => {
		let media = new MediaScene();
		let theDuration = JsCanvas.getDuration();
		let newMedia = media.addMedia(name + id, audio);

		newMedia.setVolume(volume).setPlaySpeed(playSpeed).setDelay(delay);

		if (seekEnd > 0) {
			newMedia.seek(seekStart, seekEnd);
		} else {
			newMedia.seek(0, theDuration);
		}
		JsCanvas.setItem('media', newMedia);
	}, [seekStart, seekEnd]);

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
	seekEnd: 0,
	stop: false,
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
	stop: PropTypes.bool,
};

export { AudioLayer };
