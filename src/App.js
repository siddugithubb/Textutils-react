import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <div data-bs-theme="dark">
      <Navbar title="Textutils" about="About us"/>
      </div>
      <div className='container my-3 p-3 mb-2 bg-light text-dark' >
      <Textform heading=" Enter the text below"/>
      </div>
    </>
  );
}

export default App;
