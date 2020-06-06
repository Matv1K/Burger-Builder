import React from 'react';
import Add from '../../hoc/Add';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Add>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Add>
);

export default layout;