import './App.css';
import QRgenerator from './components/QRgenerator';
import QRscanner from './components/QRscanner';

function App() {
  return (
    <div class="main-container">
      <QRgenerator/>
      <QRscanner/>
    </div>
  );
}

export default App;
