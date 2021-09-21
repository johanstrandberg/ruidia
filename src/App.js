import './App.css';
import ActionCard from './components/ActionCard';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SideMenu title="hej">
        </SideMenu>
        <ActionCard title="hej">
        </ActionCard>
      </header>
    </div>
  );
}

export default App;
