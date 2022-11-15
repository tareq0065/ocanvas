import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Canvas/Canvas.scss';
import { JsCanvasContext } from '../../util/useJsCanvas';

const Layer = ({
	children,
	name,
	id,
	ratio,
	keyframes,
	style,
	layerStyle,
	playSpeed,
	delay,
	autoPlay,
	iteration,
}) => {
	const jsCanvas = useContext(JsCanvasContext);
	const uid = Math.floor(Math.random() * 1000 + 1);

	useEffect(() => {
		const newItem = jsCanvas.newItem(
			`.Layer-${name.replaceAll(' ', '_') + uid}`,
			{ selector: true }
		);
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
			data-testid={`Layer-${name.replaceAll(' ', '_') + uid}`}
			style={{
				margin: 'auto',
				...style,
			}}
			className={`Layer-${name.replaceAll(' ', '_') + uid}`}
		>
			{children}
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
	keyframes: {},
	style: {},
	layerStyle: {},
	playSpeed: 1,
	delay: 0,
	autoPlay: false,
	children: <div />,
	iteration: 'infinite',
};

Layer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	ratio: PropTypes.object,
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
