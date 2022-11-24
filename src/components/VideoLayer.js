import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Canvas/Canvas.css';
import MediaScene from '../media';
import { JsCanvas } from '../jscanvas';

const VideoLayer = ({
	name,
	id,
	video,
	volume,
	playSpeed,
	delay,
	seekStart,
	seekEnd,
}) => {
	let media = new MediaScene();
	useEffect(() => {
		let obj = document.createElement('video');
		obj.src = video;
		console.log('obj:', obj.src);

		// let theDuration = JsCanvas.getDuration();
		// let newMedia = media.addMedia(name + id, audio);
		//
		// newMedia
		// 	.seek(seekStart, seekEnd ? seekEnd : theDuration)
		// 	.setVolume(volume)
		// 	.setPlaySpeed(playSpeed)
		// 	.setDelay(delay);
		// JsCanvas.setItem('media', newMedia);
	}, []);

	return <div id={`#${name + id}`}></div>;
};

VideoLayer.defaultProps = {
	name: 'video',
	id: 1,
	video: 'https://www.youtube.com/watch?v=4CzDU9z22No',
	volume: 1,
	playSpeed: 1,
	delay: 0,
	seekStart: 0,
	seekEnd: 0.452,
};

VideoLayer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	volume: PropTypes.number,
	video: PropTypes.string,
	playSpeed: PropTypes.number,
	delay: PropTypes.number || PropTypes.string,
	seekStart: PropTypes.number,
	seekEnd: PropTypes.number,
};

export { VideoLayer };
