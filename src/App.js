import './App.css';
import { Route, Routes } from 'react-router-dom';
import Author from './components/author';
import Post from './components/post';
import "bootstrap/dist/css/bootstrap.min.css";
import { NotFound } from './components/NotFound';
import { Profile } from './components/profile';
import Login from './components/login';
import Protected from './components/protected.route';

function App() {
  return (
    <Routes>  
      <Route exact path='/home' element={<Protected Component={Author}/>}/>
      <Route exact path='/post' element={<Protected Component={Post}/>}/>
      <Route path='/profile' element={<Protected Component={Profile}/>}/>
      <Route path='/profile/:id' element={<Protected Component={Profile}/>}/>
      <Route path='/post/:id' element={<Protected Component={Post}/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
