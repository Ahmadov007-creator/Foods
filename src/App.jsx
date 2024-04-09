import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import NotFound from './pages/404/NotFound';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/setting' element={<h1>Setting</h1>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
