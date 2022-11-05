import { useEffect, useState } from 'react';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } =
		typeof window !== 'undefined' ? window : {};
	return {
		width,
		height,
	};
}

export default function useWindowDimensions(
	canvasContentRef,
	maxWidth,
	maxHeight
) {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			let theRatio = {
				height: getWindowDimensions().height / (16 / 9),
				width: getWindowDimensions().width / (16 / 9),
			};

			// theRatio.parentWidth = Math.round(
			// 	(maxWidth / 2) * (refData.height / refData.width)
			// );
			// theRatio.parentHeight = Math.round(
			// 	(maxHeight / 2) * (refData.height / refData.width)
			// );

			// if (theRatio.parentHeight < )

			theRatio.scale = Math.min(
				theRatio.width / maxWidth,
				theRatio.height / maxHeight
			);
			setWindowDimensions(theRatio);
		}

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}
