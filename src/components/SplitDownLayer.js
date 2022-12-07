import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Canvas/Canvas.css';
import { ImageLayer } from './ImageLayer';

const SplitDownLayer = ({
	name,
	id,
	ratio,
	keyframes,
	style,
	playSpeed,
	delay,
	iteration,
	foreground,
	background,
	gridX,
	gridY,
}) => {
	const baseName = name.replaceAll(' ', '_') + id;
	const [bglayers, setBgLayers] = useState([]);
	const [frontlayers, setFrontLayers] = useState([]);

	useEffect(() => {
		setBgLayers(generateSlices(background, true));
		setFrontLayers(generateSlices(foreground));
	}, [name, keyframes, iteration]);

	const generateSlices = (img, back = false) => {
		let theLayers = [];

		for (let x = 0; x < gridX; x++) {
			for (let y = 0; y < gridY; y++) {
				let width = ((ratio.width / gridX) * 100) / ratio.width + '%',
					height = ((ratio.height / gridY) * 100) / ratio.height + '%',
					top = ((ratio.height / gridY) * y * 100) / ratio.height + '%',
					left = ((ratio.width / gridX) * x * 100) / ratio.width + '%',
					bgPosX = -((ratio.width / gridX) * x) + 'px',
					bgPosY = -((ratio.height / gridY) * y) + 'px';

				theLayers.push(
					<ImageLayer
						key={x + y}
						img={img}
						name={back ? 'background' : 'foreground' + baseName + x + y}
						delay={delay + x}
						id={x + y}
						keyframes={
							back
								? {
										0: {
											transform: `translate(0, -100%)`,
										},
										0.5: {
											transform: `translate(0, 0)`,
										},
								  }
								: {
										0: {
											transform: `translate(0, 0)`,
										},
										0.5: {
											transform: `translate(0, 100%)`,
										},
								  }
						}
						iteration={1}
						style={{
							top: top,
							left: left,
							width: width,
							height: height,
							position: 'absolute',
							zIndex: back ? 0 : 1,
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
			{bglayers}
		</div>
	);
};

SplitDownLayer.defaultProps = {
	name: 'splitAnimation',
	id: 1,
	ratio: {
		width: 1080,
		height: 720,
	},
	keyframes: {},
	style: {},
	playSpeed: 1,
	delay: 0,
	iteration: 'infinite',
	foreground: <div />,
	background: <div />,
	gridX: 5,
	gridY: 1,
};

SplitDownLayer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	ratio: PropTypes.object,
	keyframes: PropTypes.object,
	style: PropTypes.object,
	layerStyle: PropTypes.object,
	playSpeed: PropTypes.number,
	delay: PropTypes.number || PropTypes.string,
	iteration: PropTypes.any,
	foreground: PropTypes.node,
	background: PropTypes.node,
	gridX: PropTypes.number,
	gridY: PropTypes.number,
};

export { SplitDownLayer };
