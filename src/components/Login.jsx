import React from 'react';
import { useDispatch } from "react-redux"
import { login,logout} from "../features/user"

// Dispatch
// dispatch is a function of the Redux store. You call store. dispatch to dispatch an action. 
// This is the only way to trigger a state change.
// With React Redux, your components never access the store directly


function Login() {

	const dispatch = useDispatch();
	return <div>
			
		<h1>Login</h1>

		<button onClick={() => {
			dispatch(login({
				name: "knk", age: 20, email: "knk@gmail.com"
			}))
		}}>
			login

		</button>
		<button onClick={()=>{dispatch(logout())}}>

			LOGOUT
		</button>



		</div>;
}

export default Login;
