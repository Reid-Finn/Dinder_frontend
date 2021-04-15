import React from 'react';
import Button from '@material-ui/core/Button';

export default function SwitchPerson() {
    return (
        <div>
           <h1>Switch Person!</h1>
           <Button variant="contained" color="primary">
                Person 1
           </Button>
            <br></br>
            <br></br>
           <Button variant="contained" color="primary">
                Person 2
           </Button>
        </div>
    )
}
