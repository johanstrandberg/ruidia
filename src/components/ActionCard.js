import React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ActionCard(props) {
    const [value, setValue] = useState("Kebab");

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
                        This is an action called {props.title}
                    </Typography>
                </CardContent>
            </Card>
            <Button variant="contained" onClick={() => setValue('Bagel')}>
                {value}
            </Button>
        </div>
    );
}

export default ActionCard