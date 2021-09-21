import React from 'react';
import Card from '@mui/material/Card';

export default class ActionCard extends React.Component {
    render() {
        return (
            <Card variant="outlined">
                <p className="card-body">
                    This is an action called {this.props.title}
                </p>
            </Card>
        )
    }
}