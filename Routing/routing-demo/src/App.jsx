import Navigation from './components/navigation/Navigation';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import HotdChar from './components/HotdChar/HotdChar';

function App() {
	
	return (
		<>
			<h1>React Router</h1>

			<Routes>
				<Route path ='/stronger-char' element = {<HotdChar />}/>
			</Routes>

			<Navigation />

			<Routes>
				<Route path='/contacts' element = {<Home />}/>
				
			</Routes>

			<footer>All rights reserved &copy;</footer>
		</>
	);
}

export default App
