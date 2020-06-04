import React from 'react';
import Add from '../../hoc/Add';
import './Layout.css';

const layout = ( props ) => (
    <Add>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Add>
);

export default layout;