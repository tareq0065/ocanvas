import React from 'react';
import { SceneItem, Scene } from 'react-scenejs';
import './RainDrop.scss';
import PropTypes from 'prop-types';

const CreateLayer = ({ children, name, id, keyframes, playSpeed, delay }) => {
	return (
		<div data-testid={`Layer-${name}`} className={`${name.toLowerCase()}s`}>
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
				<div className={name.toLowerCase()}>{children}</div>
			</Scene>
		</div>
	);
};

CreateLayer.defaultProps = {
	name: 'animation',
	id: 1,
	keyframes: {},
	playSpeed: 1,
	delay: 0,
};

CreateLayer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	keyframes: PropTypes.object,
	playSpeed: PropTypes.number,
	delay: PropTypes.number,
	children: PropTypes.any,
};

export default CreateLayer;
