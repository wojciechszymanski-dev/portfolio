import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
	return (
		<Router>
			<Navbar />
			<div className='bg-gray-900 min-h-screen p-4'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/education' element={<Education />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
