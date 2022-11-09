import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SceneItem, EASE_IN_OUT } from 'react-scenejs';
import '../Canvas/Canvas.scss';

const Layer = ({
	children,
	name,
	id,
	ratio,
	width,
	height,
	from,
	to,
	playSpeed,
	delay,
	autoPlay,
	iteration,
}) => {
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
			}}
		>
			<SceneItem
				from={from}
				to={to}
				delay={delay}
				ref={(e) => (window.e = e)}
				duration={1.5}
				easing={EASE_IN_OUT}
				iterationCount={iteration}
				css
				autoplay
			>
				{children}
			</SceneItem>
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
	from: PropTypes.any,
	to: PropTypes.any,
	playSpeed: PropTypes.number,
	delay: PropTypes.number,
	autoPlay: PropTypes.bool,
	children: PropTypes.any,
	iteration: PropTypes.any,
};

export { Layer };
