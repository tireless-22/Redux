import {createSlice } from '@reduxjs/toolkit'

// this is the one of the feature
// createSlice is used to make a single reducer in the features tab and
// again we will merge them all in the index.js
// which is parent of all the files that we have in this project

//Action
// it is the only way that we can interact with the state
// it will carry some info from our app to the redux store


// Reducer
// function that accepts state and action as arguments,
// and returns the next state of the application

const initialStateValue = {
  name: "temp",
  age: 0,
  email: "temp@gmail.com",
};

export const userSlice = createSlice({
	
	name: "user",
	initialState: {
		value: {
			name: "temp", age: 0, email: "temp@gmail.com"
		}
	},

	reducers: {
		login: (state, action) => { 
			state.value = action.payload;
		},

		logout: (state, action) => {
			state.value = initialStateValue;
		}
	}
})

export const { login,logout } = userSlice.actions;


export default userSlice.reducer;

