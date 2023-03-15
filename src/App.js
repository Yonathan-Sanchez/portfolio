import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
