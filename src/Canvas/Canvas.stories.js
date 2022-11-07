import React from 'react';
import Canvas from './Canvas';
import {RainDrop} from "../index";

export default {
	title: 'Canvas',
};

export const CanvasStory = () => {
	return (
		<Canvas
			width={1920}
			height={1080}
		>
			<RainDrop
				id={1}
				name="raindrop"
				delay={0}
				keyframes={{
					'.raindrop': (i) => ({
						0: {
							'border-width': '150px',
							opacity: 1,
							transform: 'translate(0, 0) scale(0)',
						},
						1.5: {
							'border-width': '0px',
							opacity: 0.3,
							transform: 'scale(0.7)',
						},
						options: {
							delay: i * 0.4,
						},
					}),
				}}
				playSpeed={1}
			/>
		</Canvas>
	);
};
