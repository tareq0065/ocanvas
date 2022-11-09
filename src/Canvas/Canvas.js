import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Canvas.scss';
import useWindowDimensions from '../../util/useWindowDimensions';
import { Scene } from 'react-scenejs';
import { useScript } from '../../util/useScript';

const Canvas = ({ children, width, height }) => {
	const canvasRef = useRef(null);
	const sceneRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const {
		height: windowHeight,
		width: windowWidth,
		scale,
	} = useWindowDimensions(canvasRef, width, height);
	useScript(
		'https://raw.githubusercontent.com/tareq0065/ocanvas/main/public/effects.min.js'
	);
	useScript(
		'https://raw.githubusercontent.com/tareq0065/ocanvas/main/public/media.min.js'
	);
	useScript(
		'https://raw.githubusercontent.com/tareq0065/ocanvas/main/public/shape.min.js'
	);
	useScript(
		'https://raw.githubusercontent.com/tareq0065/ocanvas/main/public/scene.min.js'
	);

	useEffect(() => {
		console.log('sceneRef:', sceneRef.current);
		let duration = sceneRef.current.getDuration();
		console.log('duration:', duration);

		sceneRef.current.events.play((e) => {
			setIsPlaying(true);
		});
		sceneRef.current.events.paused((e) => {
			setIsPlaying(false);
		});
		sceneRef.current.events.animate((e) => {
			setProgress((100 * e.time) / duration);
		});
	}, [sceneRef.current]);

	return (
		<div id="canvasContainer">
			<div className="Canvas" id="recorderCanvas" ref={canvasRef}>
				<div
					className="CanvasInner"
					style={{
						width: windowWidth,
						height: windowHeight,
					}}
				>
					<div
						className="Composition"
						style={{
							width: width,
							height: height,
							transform: `translate(-50%, -50%) scale(${scale})`,
						}}
					>
						<div
							className="Layers"
							style={{
								width: width,
								height: height,
							}}
						>
							<Scene ready autoplay ref={sceneRef}>
								{children}
							</Scene>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					position: 'absolute',
					bottom: 20,
					margin: 0,
					left: 0,
					right: 0,
				}}
			>
				<div className="player">
					<div
						className={`${isPlaying ? 'pause' : 'play'}`}
						onClick={() => {
							// jsscene.isPaused() ? jsscene.play() : jsscene.pause();
						}}
					/>
					<input
						className="progress"
						type="range"
						onChange={(e) => {
							// jsscene.pause();
							// jsscene.setTime(e.target.value + '%');
						}}
						value={progress}
						min="0"
						max="100"
					/>
				</div>
			</div>
		</div>
	);
};

Canvas.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	children: PropTypes.any,
};

export { Canvas };
