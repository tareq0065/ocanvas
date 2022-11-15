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
		<Canvas width={ratio.width} height={ratio.height}>
			<Layer
				ratio={ratio}
				id={1}
				name={
					`fade in`.replaceAll(' ', '_') + Math.floor(Math.random() * 1000 + 1)
				}
				width="50%"
				height="50%"
				delay={0}
				style={{
					opacity: 0,
				}}
				keyframes={{
					0: {
						opacity: 0,
						transform: 'scale(0)',
					},
					2.8: {
						opacity: 1,
						transform: 'scale(1)',
					},
					3.8: {
						opacity: 1,
						transform: 'scale(1.5)',
					},
					4.5: { opacity: 0 },
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
