import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Canvas.scss';
import useWindowDimensions from '../../util/useWindowDimensions';
import Animations from '../animations';

const Canvas = ({ slides, width, height }) => {
	const canvasRef = useRef(null);
	const {
		height: windowHeight,
		width: windowWidth,
		parentWidth,
		parentHeight,
		scale,
	} = useWindowDimensions(canvasRef, width, height);
	// set fit = scale(0.1771)
	const [zoom, setZoom] = useState(0.1);

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
							className="Layer"
							style={{
								width: width,
								height: height,
							}}
						>
							{slides.map((s, si) => Animations(s))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Canvas.propTypes = {
	slides: PropTypes.array,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default Canvas;
