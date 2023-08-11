
import './App.css';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';
import NavBar from './components/NavBar';
import WorksComponent from './components/WorksComponent';

function App() {
  return (
    <div>
      <NavBar />
      <MainComponent />
      <AboutComponent />
      <WorksComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
}

export default App;
