import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from './Canvas';
import { Layer } from '../components/Layer';
import { AudioLayer } from '../components/AudioLayer';
import { VideoLayer } from '../components/VideoLayer';
import { SplitDownLayer } from '../components/SplitDownLayer';
import { SplitSlideInLayer } from '../components/SplitSlideInLayer';
import { SplitInLayer } from '../components/SplitInLayer';

export default {
	title: 'Canvas',
};

export const SplitLayersCanvas = () => {
	const [ratio, setRatio] = useState({
		width: 1920,
		height: 1080,
	});

	return (
		<Canvas
			width={ratio.width}
			height={ratio.height}
			// playing={({ playing, progress }) => {
			// 	console.log('playing:', playing);
			// 	console.log('progress:', progress);
			// }}
		>
			{/*<SplitSlideInLayer*/}
			{/*	id={4}*/}
			{/*	ratio={ratio}*/}
			{/*	gridX={3}*/}
			{/*	delay={5.5}*/}
			{/*	foreground="https://github.com/supahfunk/supah-codepen/blob/master/stcz-1.png?raw=true"*/}
			{/*/>*/}

			{/*<SplitDownLayer*/}
			{/*	id={4}*/}
			{/*	ratio={ratio}*/}
			{/*	gridX={6}*/}
			{/*	gridY={1}*/}
			{/*	delay={0}*/}
			{/*	foreground="https://github.com/supahfunk/supah-codepen/blob/master/stcz-1.png?raw=true"*/}
			{/*	background="https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"*/}
			{/*/>*/}

			<SplitInLayer
				id={4}
				ratio={ratio}
				gridX={2}
				gridY={4}
				delay={0}
				sliceDelay={1}
				foreground="https://github.com/supahfunk/supah-codepen/blob/master/stcz-1.png?raw=true"
			/>
		</Canvas>
	);
};
