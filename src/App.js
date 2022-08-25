import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact element={ <Home /> } path="/"/>
			</Routes>
			<Footer />
		</Router>
	)
}

export default App