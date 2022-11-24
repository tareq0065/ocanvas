import React, { useRef, useState } from 'react';
import { Canvas } from './Canvas';
import { Layer } from '../components/Layer';
import { AudioLayer } from '../components/AudioLayer';
import { VideoLayer } from '../components/VideoLayer';

export default {
	title: 'Canvas',
};

export const BaseInlineCanvas = () => {
	const [ratio, setRatio] = useState({
		width: 1920,
		height: 1080,
	});
	const [canva2, setCanva2] = useState(null);

	return (
		<>
			<div>
				<Canvas inline width={ratio.width} height={ratio.height}>
					<Layer
						ratio={ratio}
						id={1}
						name={
							`fade in`.replaceAll(' ', '_') +
							Math.floor(Math.random() * 1000 + 1)
						}
						delay={0}
						style={{
							opacity: 0,
						}}
						keyframes={{
							0: {
								opacity: 0,
								transform: 'translate(-50%, 0)',
							},
							9: {
								opacity: 1,
								transform: 'translate(-50%, 0)',
							},
							0.9: { opacity: 1, transform: 'translate(0, 0)' },
						}}
						iteration={1}
					>
						<img
							width="100%"
							src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
						/>
					</Layer>
					<AudioLayer
						play={false}
						id={3}
						delay={0}
						seekStart={3}
						seekEnd={13}
					/>
				</Canvas>
			</div>
			<div>
				<Canvas
					inline
					width={ratio.width}
					height={ratio.height}
					// playing={({ playing, progress }) => {
					// 	console.log('playing:', playing);
					// 	console.log('progress:', progress);
					// }}
				>
					<Layer
						ratio={ratio}
						id={1}
						name={
							`fade in`.replaceAll(' ', '_') +
							Math.floor(Math.random() * 1000 + 1)
						}
						delay={0}
						style={{
							opacity: 0,
						}}
						keyframes={{
							0: {
								opacity: 0,
								transform: 'translate(-50%, 0)',
							},
							9: {
								opacity: 1,
								transform: 'translate(-50%, 0)',
							},
							0.9: { opacity: 1, transform: 'translate(0, 0)' },
						}}
						iteration={1}
					>
						<img
							width="100%"
							src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
						/>
					</Layer>
					<AudioLayer
						play={false}
						id={3}
						delay={0}
						seekStart={3}
						seekEnd={13}
					/>
				</Canvas>
				<div>
					<button onClick={() => console.log('canva2:', canva2)}>
						Stop canvas 2
					</button>
				</div>
			</div>
		</>
	);
};
