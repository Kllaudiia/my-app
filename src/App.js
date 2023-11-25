import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';
import Footer from './components/Footer';
import Account from './components/Account';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App;
