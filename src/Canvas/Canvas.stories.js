import React, { useState } from 'react';
import Canvas from './Canvas';
import { Layer } from '../components/Layer';

export default {
	title: 'Canvas',
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
				id={1}
				name="raindrop"
				width={300}
				height={300}
				delay={0}
				from={{ borderWidth: '150px', opacity: 1, transform: 'scale(0)' }}
				to={{ borderWidth: '0px', opacity: 0, transform: 'scale(0.7)' }}
				iteration={1}
			>
				<div className="raindrop" />
			</Layer>
			<Layer
				ratio={ratio}
				id={2}
				name="raindrop"
				width={300}
				height={300}
				delay={0.4}
				from={{ borderWidth: '150px', opacity: 1, transform: 'scale(0)' }}
				to={{ borderWidth: '0px', opacity: 0, transform: 'scale(0.7)' }}
				iteration={1}
			>
				<div className="raindrop" />
			</Layer>
			<Layer
				ratio={ratio}
				id={3}
				name="raindrop"
				width={300}
				height={300}
				delay={0.8}
				from={{ borderWidth: '150px', opacity: 1, transform: 'scale(0)' }}
				to={{ borderWidth: '0px', opacity: 0, transform: 'scale(0.7)' }}
				iteration={1}
			>
				<div className="raindrop" />
			</Layer>
			<Layer
				ratio={ratio}
				id={4}
				name="fadeIn"
				width="100%"
				height="100%"
				delay={1.3}
				from={{ opacity: 0, transform: 'scale(0)' }}
				to={{ opacity: 1, transform: 'scale(1)' }}
				iteration={1}
			>
				<div>
					<img
						width="100%"
						src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
					/>
				</div>
			</Layer>
		</Canvas>
	);
};
