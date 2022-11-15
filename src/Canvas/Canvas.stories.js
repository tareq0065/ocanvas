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
				name="fadein"
				width="50%"
				height="50%"
				delay={10}
				style={{
					opacity: 0,
				}}
				keyframes={{
					10: {
						opacity: 0,
						transform: 'scale(0)',
					},
					10.9: { opacity: 1, transform: 'scale(1)' },
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
