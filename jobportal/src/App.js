import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import AppJob from './Pages/ApplyJob';
import Application from './Pages/Applications';
import { AppContextProvider } from './Context/AppContext';
import NavBar from './Components/NavBar';

function App() {
  return (
    <AppContextProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='apply-job/:id' element={<AppJob/>} />
        <Route path='applications' element={<Application/>} />
      </Routes>
    
    </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;