
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown'

function App() {
  return (
    <div className="App">
      <Header >
        <Dropdown />
      </Header>
      <Footer >

      </Footer>
      
    </div>
  );
}

export default App;
