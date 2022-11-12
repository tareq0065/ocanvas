import React, { useState } from 'react';
import { Canvas } from './Canvas';
import { Layer } from '../components/Layer';

export default {
	title: 'Canvas Raindrop',
};

export const CanvasStory = () => {
	const [ratio, setRatio] = useState({
		width: 1920,
		height: 1080,
	});
	return (
		<Canvas width={ratio.width} height={ratio.height}>
			<Layer
				ratio={ratio}
				id={0}
				name="raindrop"
				width={300}
				height={300}
				delay={0.4}
				keyframes={{
					0: {
						'border-width': '100px',
						opacity: 1,
						transform: 'translate(0, 0) scale(0)',
					},
					1.5: { 'border-width': '0px', opacity: 0.3, transform: 'scale(0.3)' },
				}}
				style={{
					border: '100px solid black',
					borderRadius: '50%',
					boxSizing: 'border-box',
					transform: 'scale(0)',
				}}
				iteration={1}
			/>
			<Layer
				ratio={ratio}
				id={0}
				name="raindrop2"
				width={300}
				height={300}
				delay={0.8}
				keyframes={{
					0: {
						'border-width': '100px',
						opacity: 1,
						transform: 'translate(0, 0) scale(0)',
					},
					1.5: { 'border-width': '0px', opacity: 0.7, transform: 'scale(0.7)' },
				}}
				style={{
					border: '100px solid black',
					borderRadius: '50%',
					boxSizing: 'border-box',
					transform: 'scale(0)',
				}}
				iteration={1}
			/>
			<Layer
				ratio={ratio}
				id={0}
				name="raindrop3"
				width={300}
				height={300}
				delay={0.12}
				keyframes={{
					0: {
						'border-width': '100px',
						opacity: 1,
						transform: 'translate(0, 0) scale(0)',
					},
					1.5: { 'border-width': '0px', opacity: 0.4, transform: 'scale(0.5)' },
				}}
				style={{
					border: '100px solid black',
					borderRadius: '50%',
					boxSizing: 'border-box',
					transform: 'scale(0)',
				}}
				iteration={1}
			/>
			<Layer
				ratio={ratio}
				id={0}
				name="raindrop3"
				width={300}
				height={300}
				delay={0.12}
				keyframes={{
					2: {
						'border-width': '100px',
						opacity: 1,
						transform: 'translate(0, 0) scale(0)',
					},
					2.5: { 'border-width': '0px', opacity: 0.4, transform: 'scale(0.5)' },
				}}
				style={{
					border: '100px solid black',
					borderRadius: '50%',
					boxSizing: 'border-box',
					transform: 'scale(0)',
				}}
				iteration={1}
			/>
		</Canvas>
	);
};
