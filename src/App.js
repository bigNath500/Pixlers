import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import './App.scss'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact element={ <Home /> } path="/"/>
			</Routes>
		</Router>
	)
}

export default App