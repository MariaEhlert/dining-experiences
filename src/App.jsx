import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Restaurant } from './Pages/Restaurant/Restaurant';
import { Footer } from './Components/Footer/Footer';
import { Details } from './Pages/Restaurant/Details';
import { Categori } from './Components/Category/Category';
import { Employee } from './Pages/About/Employee';
import { SearchBar } from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/restauranter" element={<Restaurant />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path='/category/:id' element={<Categori />}/>
            <Route path='/employee' element={<Employee />}/>
            <Route path='/search' element={<SearchBar/>}/>
          </Routes>
        </Main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
