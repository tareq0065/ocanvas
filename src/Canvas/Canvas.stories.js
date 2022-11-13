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
		<Canvas width={ratio.width} height={ratio.height} autoPlay>
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
				id={1}
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
				id={2}
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
				id={3}
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

			<Layer
				ratio={ratio}
				id={4}
				name="fadein"
				width="100%"
				height="100%"
				delay={0.2}
				keyframes={{
					2.6: {
						opacity: 0,
						transform: 'scale(0)',
					},
					3.5: { opacity: 1, transform: 'scale(1)' },
				}}
				iteration={1}
			>
				<img
					width="100%"
					src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
				/>
			</Layer>
			<Layer
				ratio={ratio}
				id={5}
				name="fadein2"
				width="50%"
				height="50%"
				delay={0.3}
				keyframes={{
					4.3: {
						opacity: 0,
						transform: 'scale(0)',
					},
					4.9: { opacity: 1, transform: 'scale(1)' },
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
