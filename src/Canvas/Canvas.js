import React, {
	forwardRef,
	useContext,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import PropTypes from 'prop-types';
import './Canvas.css';
import Scene from 'scenejs';
import useWindowDimensions from '../../util/useWindowDimensions';
import { JsCanvasContext } from '../../util/useJsCanvas';

const CanvasContainer = forwardRef(
	(
		{
			children,
			width,
			height,
			controls,
			playing,
			fullWidth,
			animationDuration,
			inline,
		},
		ref
	) => {
		const jsCanvas = useContext(JsCanvasContext);
		const canvasRef = useRef(null);
		const [isPlaying, setIsPlaying] = useState(false);
		const [progress, setProgress] = useState(0);

		useImperativeHandle(ref, () => ({
			play() {
				jsCanvas.play();
			},
			pause() {
				jsCanvas.pause();
			},
			finish() {
				jsCanvas.finish();
			},
			duration() {
				return jsCanvas.getDuration();
			},
		}));

		const {
			height: windowHeight,
			width: windowWidth,
			scale,
		} = useWindowDimensions(canvasRef, width, height);

		useEffect(() => {
			let duration = jsCanvas.getDuration();
			animationDuration(duration);

			jsCanvas.on('play', (e) => {
				setIsPlaying(true);
			});
			jsCanvas.on('paused', (e) => {
				setIsPlaying(false);
			});
			jsCanvas.on('animate', (e) => {
				setProgress((100 * e.time) / duration);
			});
			if (playing) {
				playing({
					playing: isPlaying,
					progress: progress,
				});
			}
		}, [isPlaying, progress]);

		return (
			<div id="canvasContainer">
				<div
					className={inline ? '' : 'Canvas'}
					id="recorderCanvas"
					ref={canvasRef}
				>
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
					<div className={inline ? 'playerWrapperInline' : 'playerWrapper'}>
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
								value={progress.toString()}
								min="0"
								max="100"
							/>
						</div>
					</div>
				)}
			</div>
		);
	}
);

const Canvas = forwardRef(
	(
		{
			children,
			width,
			height,
			jsCanva,
			controls,
			playing,
			fullWidth,
			animationDuration,
			inline,
		},
		ref
	) => {
		return (
			<JsCanvasContext.Provider
				value={
					new Scene(
						{},
						{
							easing: Scene.EASE_IN_OUT,
							iterationCount: 1,
							selector: true,
						}
					)
				}
			>
				<CanvasContainer
					ref={ref}
					height={height}
					width={width}
					controls={controls}
					playing={playing}
					jsCanva={jsCanva}
					fullWidth={fullWidth}
					animationDuration={animationDuration}
					inline={inline}
				>
					{children}
				</CanvasContainer>
			</JsCanvasContext.Provider>
		);
	}
);

Canvas.defaultProps = {
	width: 1920,
	height: 1080,
	children: [],
	controls: true,
	playing: () => {},
	fullWidth: false,
	animationDuration: () => {},
	inline: false,
};

Canvas.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	children: PropTypes.any,
	controls: PropTypes.bool,
	playing: PropTypes.func,
	fullWidth: PropTypes.bool,
	animationDuration: PropTypes.func,
	inline: PropTypes.bool,
};

export { Canvas };
