import React, { useState } from 'react';
import { Canvas } from './Canvas';
import { Layer } from '../components/Layer';

export default {
	title: 'Canvas',
};

export const BaseCanvas = () => {
	const [ratio, setRatio] = useState({
		width: 1920,
		height: 1080,
	});
	return (
		<Canvas
			width={ratio.width}
			height={ratio.height}
			playing={(playing) => {
				console.log('playing', playing);
			}}
		>
			<Layer
				ratio={ratio}
				id={1}
				name={
					`fade in`.replaceAll(' ', '_') + Math.floor(Math.random() * 1000 + 1)
				}
				delay={5}
				style={{
					opacity: 0,
				}}
				keyframes={{
					0: {
						opacity: 0,
						transform: 'translate(-50%, 0)',
					},
					0.9: { opacity: 1, transform: 'translate(0, 0)' },
				}}
				iteration={1}
			>
				<img
					width="100%"
					src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
				/>
			</Layer>
		</Canvas>
	);
};
