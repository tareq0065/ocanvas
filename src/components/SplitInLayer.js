import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Canvas/Canvas.css';
import { ImageLayer } from './ImageLayer';
import { v4 as uuidv4 } from 'uuid';

const SplitInLayer = ({
	name,
	id,
	ratio,
	keyframes,
	style,
	playSpeed,
	delay,
	sliceDelay,
	iteration,
	foreground,
	gridX,
	gridY,
}) => {
	const baseName = name.replaceAll(' ', '_') + id;
	const [frontlayers, setFrontLayers] = useState([]);

	useEffect(() => {
		setFrontLayers(generateSlices(foreground));
	}, [name, keyframes, iteration]);

	const generateSlices = (img) => {
		let theLayers = [];

		for (let x = 0; x < gridX; x++) {
			for (let y = 0; y < gridY; y++) {
				let width = ((ratio.width / gridX) * 100) / ratio.width + '%',
					height = ((ratio.height / gridY) * 100) / ratio.height + '%',
					top = ((ratio.height / gridY) * y * 100) / ratio.height + '%',
					left = ((ratio.width / gridX) * x * 100) / ratio.width + '%',
					bgPosX = -((ratio.width / gridX) * x) + 'px',
					bgPosY = -((ratio.height / gridY) * y) + 'px';

				const newId = uuidv4().replaceAll('-', '');

				let translate = y % 2 === 0 ? '200%' : '-200%';

				theLayers.push(
					<ImageLayer
						key={newId}
						img={img}
						name={'foreground' + baseName + x + y}
						delay={delay}
						id={x + y}
						keyframes={{
							0: {
								transform: `translate(${translate}, 0)`,
							},
							1: {
								transform: `translate(0, 0)`,
							},
						}}
						iteration={1}
						style={{
							top: top,
							left: left,
							width: width,
							height: height,
							position: 'absolute',
							backgroundPosition: bgPosX + ' ' + bgPosY,
							backgroundSize: ratio.width + 'px',
						}}
						ratio={{ width: width, height: height }}
					/>
				);
			}
		}

		return theLayers;
	};

	return (
		<div
			data-testid={`Layer-${baseName}`}
			className={`Layer-${baseName}`}
			id={`Layer-${baseName}`}
			style={{
				position: 'absolute',
				width: ratio.width,
				height: ratio.height,
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				margin: 'auto',
				...style,
			}}
		>
			{frontlayers}
		</div>
	);
};

SplitInLayer.defaultProps = {
	name: 'splitInAnimation',
	id: 1,
	ratio: {
		width: 1080,
		height: 720,
	},
	keyframes: {},
	style: {},
	playSpeed: 1,
	delay: 0,
	sliceDelay: 0,
	iteration: 'infinite',
	foreground: <div />,
	gridX: 5,
	gridY: 1,
};

SplitInLayer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	ratio: PropTypes.object,
	keyframes: PropTypes.object,
	style: PropTypes.object,
	layerStyle: PropTypes.object,
	playSpeed: PropTypes.number,
	delay: PropTypes.number || PropTypes.string,
	sliceDelay: PropTypes.number || PropTypes.string,
	iteration: PropTypes.any,
	foreground: PropTypes.node,
	gridX: PropTypes.number,
	gridY: PropTypes.number,
};

export { SplitInLayer };
