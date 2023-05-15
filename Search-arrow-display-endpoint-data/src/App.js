import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Navbar from './components/Navbar';
import All from './components/All';
import { New } from './components/New';
import { Images } from './components/images';
import { Videos } from './components/videos';
import { Shoppings } from './components/shoppings';
import { Maps } from './components/maps';

function App() {
  const location = useLocation();

  return (
    <>
       {location.pathname === '/' ? null : <Navbar />}
        <Routes>
          <Route exact path="/" element={<SearchPage />} />
          <Route path="/all" element={<All />} />
          <Route path="/new" element={<New />} />
          <Route path="/images" element={<Images />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/shoppings" element={<Shoppings />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
    </>
  );
}

export default App;