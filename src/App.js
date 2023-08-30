import './App.scss';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Main from './components/Main.jsx/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Hero/>
      <Main/>
      <Articles/>
      <Footer/>
    </main>
  );
}

export default App;
