import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/index';
import Connect from './Connect/index';
import Projects from './Projects/index';
import About from './About/index';

function App() {
    console.log('App component rendering');
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

