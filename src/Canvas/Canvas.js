import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Canvas.css';
import useWindowDimensions from '../../util/useWindowDimensions';
import { JsCanvas, useJsCanvas } from '../jscanvas';

const CanvasContainer = ({
	children,
	width,
	height,
	jsCanva,
	autoPlay,
	controls,
	playing,
	fullWidth,
	animationDuration,
}) => {
	const canvasRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

	const {
		height: windowHeight,
		width: windowWidth,
		scale,
	} = useWindowDimensions(canvasRef, width, height);

	useEffect(() => {
		let duration = JsCanvas.getDuration();
		jsCanva(JsCanvas);
		animationDuration(duration);

		if (autoPlay) {
			JsCanvas.play();
			setIsPlaying(true);
		}

		JsCanvas.on('play', (e) => {
			setIsPlaying(true);
		});
		JsCanvas.on('paused', (e) => {
			setIsPlaying(false);
		});
		JsCanvas.on('animate', (e) => {
			setProgress((100 * e.time) / duration);
		});
		playing({
			playing: isPlaying,
			progress: progress,
		});
	}, [isPlaying, progress]);

	return (
		<div id="canvasContainer">
			<div className="Canvas" id="recorderCanvas" ref={canvasRef}>
				<div
					className="CanvasInner"
					style={
						fullWidth
							? {
									width: '100%',
									height: '100%',
							  }
							: {
									width: windowWidth,
									height: windowHeight,
							  }
					}
				>
					<div
						id="Composition"
						className="Composition"
						style={
							fullWidth
								? {
										width: width,
										height: height,
								  }
								: {
										width: width,
										height: height,
										transform: `translate(-50%, -50%) scale(${
											scale ? scale : 1
										})`,
								  }
						}
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
			{controls && (
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
								JsCanvas.isPaused() ? JsCanvas.play() : JsCanvas.pause();
							}}
						/>
						<input
							className="progress"
							type="range"
							onChange={(e) => {
								JsCanvas.pause();
								JsCanvas.setTime(e.target.value + '%');
							}}
							value={progress.toString()}
							min="0"
							max="100"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

const Canvas = ({
	children,
	width,
	height,
	jsCanva,
	autoPlay,
	controls,
	playing,
	fullWidth,
	animationDuration,
}) => {
	return (
		<CanvasContainer
			height={height}
			width={width}
			autoPlay={autoPlay}
			controls={controls}
			playing={playing}
			jsCanva={jsCanva}
			fullWidth={fullWidth}
			animationDuration={animationDuration}
		>
			{children}
		</CanvasContainer>
	);
};

Canvas.defaultProps = {
	width: 1920,
	height: 1080,
	children: [],
	autoPlay: false,
	controls: true,
	playing: () => {},
	jsCanva: () => {},
	fullWidth: false,
	animationDuration: () => {},
};

Canvas.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	children: PropTypes.any,
	autoPlay: PropTypes.bool,
	controls: PropTypes.bool,
	playing: PropTypes.func,
	jsCanva: PropTypes.any,
	fullWidth: PropTypes.bool,
	animationDuration: PropTypes.func,
};

export { Canvas };
