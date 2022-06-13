import './App.css';
import ActionCard from './components/ActionCard';
import SideMenu from './components/SideMenu';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <ActionCard title="hejsan">
        </ActionCard>
        <SideMenu tab={props.game}></SideMenu>
      </header>
    </div>
  );
}

export default App;
