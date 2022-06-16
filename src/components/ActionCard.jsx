import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Button, CardContent, Typography } from '@mui/material';

function ActionCard(props) {
  const [value, setValue] = useState('Kebab');
  const { title } = props;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            This is an action called {title}
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" onClick={() => setValue('Bagel')}>
        {value}
      </Button>
    </div>
  );
}

export default ActionCard;
