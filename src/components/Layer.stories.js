import React, { useState } from 'react';
import { Layer } from './Layer';

export default {
	title: 'Canvas',
};

export const LayerStory = () => {
	return (
		<Layer
			ratio={{
				width: 1920,
				height: 1080,
			}}
			id={1}
			name="raindrop"
			width={300}
			height={300}
			delay={0}
			from={{ borderWidth: '150px', opacity: 1, transform: 'scale(0)' }}
			to={{ borderWidth: '0px', opacity: 0, transform: 'scale(0.7)' }}
		>
			<div className="raindrop" />
		</Layer>
	);
};
