import './App.css';
import './styles/dashboard.css'
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
