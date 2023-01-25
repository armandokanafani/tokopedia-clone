import './assets/scss/main.scss';
import MobileNavbar from './components/MobileNavbar';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='test'>
      <header>
        <Navbar />
        <MobileNavbar />
      </header>
    </div>
  );
}

export default App;
