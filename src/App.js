import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Estudios from './components/Estudios';
import SoftSkills from './components/SoftSkills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Estudios />
      <SoftSkills />
      <Footer />
    </div>
  );
}

export default App;