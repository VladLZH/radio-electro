import './App.css';
import AboutUsStructure from './components/AboutUs/AboutUsStructure';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MapStructure from './components/Map/MapStructure';
import MeansStructure from './components/Means/MeansStructure';
import NewsStructure from './components/News/NewsStructure';



function App() {
  return (
    <>
      <Header/>
      <Main/>
      <NewsStructure/>
      <AboutUsStructure/>
      <MeansStructure/>
      <MapStructure/>
      <Footer/>
    </>
  );
}

export default App;
