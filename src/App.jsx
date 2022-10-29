import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import ActionCard from './components/ActionCard';
import SideMenu from './components/SideMenu';
import GameContext from './gameContext';

function App(props) {
  const { game } = props;
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  game.updateCallback = (ms) => { forceUpdate(); };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GameContext.Provider value={{ ...game }}>
      <CssBaseline enableColorScheme />
      <div className="App">
        <header className="App-header">
          <ActionCard title="hejsan" />
          <SideMenu />
        </header>
      </div>
    </GameContext.Provider>
  );
}

export default App;
