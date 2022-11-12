import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Canvas/Canvas.scss';
import { JsCanvasContext } from '../../util/useJsCanvas';

const Layer = ({
	children,
	name,
	id,
	ratio,
	width,
	height,
	keyframes,
	style,
	layerStyle,
	playSpeed,
	delay,
	autoPlay,
	iteration,
}) => {
	const jsCanvas = useContext(JsCanvasContext);

	useEffect(() => {
		const newItem = jsCanvas.newItem(`.Layer-${name}`, { selector: true });
		newItem.set({
			...keyframes,
			options: {
				delay: delay,
				iteration: iteration,
			},
		});
	}, []);

	return (
		<div
			data-testid={`Layer-${name}`}
			style={{
				position: 'absolute',
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				margin: 'auto',
				...layerStyle,
			}}
		>
			<div
				style={{
					position: 'absolute',
					width: width,
					height: height,
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					margin: 'auto',
					...style,
				}}
				className={`Layer-${name}`}
			>
				{children}
			</div>
		</div>
	);
};

Layer.defaultProps = {
	name: 'animation',
	id: 1,
	ratio: {
		width: 1080,
		height: 720,
	},
	width: 300,
	height: 300,
	keyframes: {},
	style: {},
	layerStyle: {},
	playSpeed: 1,
	delay: 0,
	autoPlay: false,
	children: () => <></>,
	iteration: 'infinite',
};

Layer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	ratio: PropTypes.object,
	width: PropTypes.any,
	height: PropTypes.any,
	keyframes: PropTypes.object,
	style: PropTypes.object,
	layerStyle: PropTypes.object,
	playSpeed: PropTypes.number,
	delay: PropTypes.number,
	autoPlay: PropTypes.bool,
	children: PropTypes.any,
	iteration: PropTypes.any,
};

export { Layer };
