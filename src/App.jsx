import './App.css';
import ActionCard from './components/ActionCard';
import SideMenu from './components/SideMenu';
import GameContext from './gameContext';

function App(props) {
  const { game } = props;

  return (
    <GameContext.Provider value={game}>
      <div className="App">
        <header className="App-header">
          <ActionCard title="hejsan" />
          <SideMenu tab={1} />
        </header>
      </div>
    </GameContext.Provider>
  );
}

export default App;
