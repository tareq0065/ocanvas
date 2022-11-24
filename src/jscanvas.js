import { useEffect, useState, useReducer } from 'react';
import Scene, { EASE_IN_OUT } from 'scenejs';

const JsCanvas = new Scene(
	{},
	{
		easing: EASE_IN_OUT,
		iterationCount: 1,
		selector: true,
	}
).setTime(0);

export { JsCanvas };
