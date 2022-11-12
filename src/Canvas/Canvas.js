import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Canvas.scss';
import useWindowDimensions from '../../util/useWindowDimensions';
import Scene from 'scenejs';
import { JsCanvasContext } from '../../util/useJsCanvas';

const CanvasContainer = ({ children, width, height }) => {
	const jsCanvas = useContext(JsCanvasContext);
	const canvasRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const {
		height: windowHeight,
		width: windowWidth,
		scale,
	} = useWindowDimensions(canvasRef, width, height);

	useEffect(() => {
		let duration = jsCanvas.getDuration();
		console.log('duration:', duration);
		jsCanvas.on('play', (e) => {
			setIsPlaying(true);
		});
		jsCanvas.on('paused', (e) => {
			setIsPlaying(false);
		});
		jsCanvas.on('animate', (e) => {
			setProgress((100 * e.time) / duration);
		});
	}, []);

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
							{children}
						</div>
					</div>
				</div>
			</div>
			<div className="playerWrapper">
				<div
					className="player"
					style={{
						width: windowWidth,
					}}
				>
					<div
						className={`${isPlaying ? 'pause' : 'play'}`}
						onClick={() => {
							jsCanvas.isPaused() ? jsCanvas.play() : jsCanvas.pause();
						}}
					/>
					<input
						className="progress"
						type="range"
						onChange={(e) => {
							jsCanvas.pause();
							jsCanvas.setTime(e.target.value + '%');
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

const Canvas = ({ children, width, height }) => {
	return (
		<JsCanvasContext.Provider
			value={new Scene(
				{},
				{
					easing: Scene.EASE_IN_OUT,
					iterationCount: 1,
					selector: true,
				}
			).setTime(0)}
		>
			<CanvasContainer height={height} width={width}>
				{children}
			</CanvasContainer>
		</JsCanvasContext.Provider>
	);
};

Canvas.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	children: PropTypes.any,
};

export { Canvas };
