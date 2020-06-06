import React from 'react';
import Add from '../../../hoc/Add';
import Button from '../../UI/Button/Button'

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });

    return (
        <Add>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>You have to pay <span style={{fontWeight: "bold"}}>{props.price.toFixed(2)} $</span></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled} >CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued} >CONTINUE</Button>
        </Add>
    )
};

export default orderSummary;