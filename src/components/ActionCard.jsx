import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Button, CardContent, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import GameContext from '../gameContext';

function ActionCard(props) {
  const [value, setValue] = useState('Kebab');
  const { actionManager } = React.useContext(GameContext);
  const action = actionManager?.currentAction;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            Word of the Day {action?.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            Current action progress {(action.progressPercentage * 100).toFixed(1)}%.
          </Typography>
        </CardContent>
        <LinearProgress variant="determinate" value={action.progressPercentage * 100} />
      </Card>
      <Button variant="contained" onClick={() => setValue('Bagel')}>
        {value}
      </Button>
    </div>
  );
}

export default ActionCard;
