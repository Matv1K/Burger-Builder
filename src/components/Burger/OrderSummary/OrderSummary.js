import React, { Component } from 'react';
import Add from '../../../hoc/Add';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This could be a functional component(does not have to be a class component)
    componentWillUpdate() {
        console.log('[Order Summary will update]')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        });

        return (
        <Add>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>You have to pay <span style={{fontWeight: "bold"}}>{this.props.price.toFixed(2)} $</span></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled} >CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>
        </Add>
        )
    }
};

export default OrderSummary;