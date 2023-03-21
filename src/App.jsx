import './App.css';
import Welcome from './components/welcome/Welcome';
import { Routes, Route } from 'react-router-dom';
import RedTeam from './components/redTeam/RedTeam';
import BlueTeam from './components/blueTeam/BlueTeam';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Welcome/>} />

            <Route path='/red' element={<RedTeam/>} />

            <Route path='/blue' element={<BlueTeam/>} />
        </Routes>
    );
}

export default App;
