import React from 'react';
import { useState } from 'react'


import { useDispatch } from "react-redux"

import { changeColor } from "../features/theme"

function ChangeColor() {
	const dispatch = useDispatch();

	const [color,setColor]=useState("")
	return <div>
		<input type="text" onChange={e =>
		{ setColor(e.target.value); }} />


		<button onClick={() => {
			dispatch(changeColor(color))
			}}>change color</button>
		</div>;
}

export default ChangeColor;
