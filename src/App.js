import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import travelData from './components/travelData';
import Card from './components/Card';

function App() {
  const travelCard = travelData.map(item => {
    return <Card 
    key={item.id}
    {...item}
    
    />
  })
  return (
    <div className="App">
      <Navbar />
      <div className="journal-body">
        {travelCard}
      </div>
      
    </div>
  );
}

export default App;
