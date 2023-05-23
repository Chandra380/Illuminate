import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function App() {
	const history = useHistory()

	const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
                lastName,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/login')
		}
	}

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={firstName}
					onChange={(e) => setfirstName(e.target.value)}
					type="text"
					placeholder="First Name"
				/>
				<br />
                <input
					value={lastName}
					onChange={(e) => setlastName(e.target.value)}
					type="text"
					placeholder="Last Name"
				/>
                <br/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Register" />
			</form>
		</div>
	)
}

export default App