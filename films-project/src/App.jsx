
import { Route,Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import Header from './components/Header/Header';

import './App.css';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header/>
        <Routes element={<Header/>}>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/list/:id" element={<ListPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
