import './App.css';
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About';
import Left from './components/left/Left';
import Right from './components/right/Right';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Left />
      <Right />
      <Header />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
