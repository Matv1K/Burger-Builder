import React from 'react'
import classes from './Modal.css';
import Add from '../../../hoc/Add';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
    <Add>
        <Backdrop clicked={props.modalClosed} show={props.show} />
        <div className={classes.Modal} 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'}}>
            {props.children}
        </div>
    </Add>
);

export default modal;