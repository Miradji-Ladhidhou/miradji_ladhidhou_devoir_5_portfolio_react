import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.js';
import AboutAndSkills from './components/AboutAndSkills.jsx';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <AboutAndSkills />
      <Footer />
    </div>
  );
}



export default App;
