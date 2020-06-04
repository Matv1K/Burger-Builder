import React, { Component } from 'react';
import Aux from '../../hoc/Add';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controllers</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;