import React from 'react';
import Aux from './../../../hoc/Auxillary';
const orderSummary = (props) => {
    // Need to change format because we receive ingredients in object format
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
        :{props.ingredients[igKey]}
                </li>)
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue or checkout?</p>
        </Aux>
    )
};

export default orderSummary;