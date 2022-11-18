import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Canvas/Canvas.scss';
import { JsCanvasContext } from '../../util/useJsCanvas';
import { Layer } from './Layer';

const SplitLayer = ({
	name,
	id,
	ratio,
	keyframes,
	style,
	layerStyle,
	playSpeed,
	delay,
	iteration,
	splitLayers,
}) => {
	const jsCanvas = useContext(JsCanvasContext);
	const baseName = name.replaceAll(' ', '_') + id;
	const [childLayers, setChildLayers] = useState([]);

	useEffect(() => {
		console.log('splitLayers', splitLayers);
		splitLayers.forEach((sItem, sIndex) => {
			const sItemBaseName = sItem?.name.replaceAll(' ', '_') + id;
			const newItem = jsCanvas.newItem(`.Layer-${sItemBaseName}`, {
				selector: true,
				delay: delay,
				playSpeed: playSpeed,
			});
			newItem.set({
				...keyframes,
				options: {
					delay: delay,
					iteration: iteration,
					playSpeed: playSpeed,
				},
			});
		});
	}, [name, keyframes, iteration]);

	return (
		<div
			data-testid={`Layer-${baseName}`}
			className={`Layer-${baseName}`}
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
			{}
		</div>
	);
};

SplitLayer.defaultProps = {
	name: 'animation',
	id: 1,
	ratio: {
		width: 1080,
		height: 720,
	},
	keyframes: {},
	style: {},
	layerStyle: {},
	playSpeed: 1,
	delay: 0,
	iteration: 'infinite',
	splitLayers: [],
};

SplitLayer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	ratio: PropTypes.object,
	keyframes: PropTypes.object,
	style: PropTypes.object,
	layerStyle: PropTypes.object,
	playSpeed: PropTypes.number,
	delay: PropTypes.number || PropTypes.string,
	iteration: PropTypes.any,
	splitLayers: PropTypes.array,
};

export { SplitLayer };
