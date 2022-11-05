import React, { createElement } from 'react';
import RainDrop from './RainDrop';

const Animations = {
	raindrop: RainDrop,
};

export default (block) => {
	if (typeof Animations[block.name] !== 'undefined') {
		return createElement(Animations[block.name], {
			key: block.id,
			...block,
		});
	}
	return createElement(
		() => <div>The animation {block.name} has not been created yet.</div>,
		{ key: block.id }
	);
};
