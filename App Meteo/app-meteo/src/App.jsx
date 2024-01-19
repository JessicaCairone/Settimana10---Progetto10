import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CityWeather from './pages/CityWeather';
import ResultsPage from './pages/ResultsPage';
import NotFound from './pages/NotFound';


function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element = {<HomePage />}/>
       <Route path='/SearchBar' element = {<SearchBar />}/>
      <Route path ='/ResultsPage' element = {<ResultsPage />} />
    <Route path='/CityWeather/:name' element = {<CityWeather />}/> 
    <Route path ='*' element = {<NotFound/>} />
      
    

        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
