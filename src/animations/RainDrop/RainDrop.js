import React from 'react';
import { SceneItem, Scene } from 'react-scenejs';
import './RainDrop.scss';
import PropTypes from 'prop-types';

const RainDrop = ({ name, id, keyframes, playSpeed, delay }) => {
	return (
		<div data-testid="RainDrop" className="RainDrop">
			<Scene
				keyframes={keyframes}
				easing="ease-in-out"
				fillMode="forwards"
				direcition="normal"
				iterationCount="infinite"
				playSpeed={playSpeed}
				delay={delay}
				autoplay
				ready
			>
				<div className="raindrops">
					<div className="raindrop circle1"></div>
					<div className="raindrop circle2"></div>
					<div className="raindrop circle3"></div>
				</div>
			</Scene>
		</div>
	);
};

RainDrop.defaultProps = {
	name: 'animation',
	id: 1,
	keyframes: {},
	playSpeed: 1,
	delay: 0,
};

RainDrop.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	keyframes: PropTypes.object,
	playSpeed: PropTypes.number,
	delay: PropTypes.number,
};

export default RainDrop;
