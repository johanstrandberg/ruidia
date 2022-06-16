import './App.css';
import ActionCard from './components/ActionCard';
import SideMenu from './components/SideMenu';

function App(props) {
  const { game } = props;

  return (
    <div className="App">
      <header className="App-header">
        <ActionCard title="hejsan" />
        <SideMenu tab={game} />
      </header>
    </div>
  );
}

export default App;
