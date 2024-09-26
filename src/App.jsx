import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import NotFound from './components/NotFound';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Courses from './components/Courses';
import Courspage from './components/Courspage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      
      <Route path="/" element={<MainLayout/>}>
      <Route index={true} element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contacts" element={<Contacts/>}/>
      <Route path='courses' element={<Courses/>}/>
      <Route path='courses/:slug' element={<Courspage/>}/>
      <Route path="*" element={<NotFound/>}/>
       </Route>
      
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
