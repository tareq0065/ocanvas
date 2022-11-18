import React, { useState } from 'react';
import { Canvas } from './Canvas';
import { Layer } from '../components/Layer';
import { SplitLayer } from '../components/SplitLayer';

export default {
	title: 'Canvas',
};

export const CanvasSplitLayers = () => {
	const [ratio, setRatio] = useState({
		width: 1920,
		height: 1080,
	});
	return (
		<Canvas
			width={ratio.width}
			height={ratio.height}
			animationProgress={(progress) => {
				console.log('progress', progress);
			}}
		>
			<SplitLayer
				id={1}
				name="raindrop"
				delay={0.4}
				keyframes={{
					0: {
						'border-width': '150px',
						opacity: 1,
						transform: 'translate(0, 0) scale(0)',
					},
					1.5: { 'border-width': '0px', opacity: 0.3, transform: 'scale(0.7)' },
				}}
				style={{
					border: '100px solid black',
					borderRadius: '50%',
					boxSizing: 'border-box',
					transform: 'scale(0)',
				}}
				iteration="infinite"
				splitLayers={[
					{
						id: 2,
						name: 'Split 1',
						delay: 0.5,
						keyframes: {
							0: {
								opacity: 1,
							},
							1.5: { opacity: 0.3 },
						},
						iteration: 'infinite',
						children: [
							<Layer>
								<img
									width="100%"
									src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
								/>
							</Layer>,
						],
					},
				]}
			/>
		</Canvas>
	);
};
