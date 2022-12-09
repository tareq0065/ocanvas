import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from './Canvas';
import { Layer } from '../components/Layer';
import { AudioLayer } from '../components/AudioLayer';
import { VideoLayer } from '../components/VideoLayer';
import { SplitDownLayer } from '../components/SplitDownLayer';
import { SplitSlideInLayer } from '../components/SplitSlideInLayer';
import { SplitInLayer } from '../components/SplitInLayer';
import { SplitOutLayer } from '../components/SplitOutLayer';

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
			{/*/>*/}

			{/*<SplitInLayer*/}
			{/*	id={4}*/}
			{/*	ratio={ratio}*/}
			{/*	gridX={2}*/}
			{/*	gridY={4}*/}
			{/*	delay={0}*/}
			{/*	sliceDelay={1.5}*/}
			{/*	textLayerStyle={{*/}
			{/*		backgroundColor: '#0e1318',*/}
			{/*	}}*/}
			{/*	foreground="https://github.com/supahfunk/supah-codepen/blob/master/stcz-1.png?raw=true"*/}
			{/*/>*/}

			<SplitOutLayer
				id={4}
				name="splitOutAnimationOut"
				ratio={ratio}
				delay={0}
				style={{
					backgroundColor: '#fff',
				}}
				textLayerStyle={{}}
				text={'Hello There .....'}
				foreground="https://d18xbnkzfhw2km.cloudfront.net/development/content_library/images/5e364a9affdf91a279b5d89c2e6d27f3.jpg"
			/>
		</Canvas>
	);
};
