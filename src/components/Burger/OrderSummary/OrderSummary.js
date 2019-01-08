import React, {Component} from 'react'

import Button from '../../UI/Button/Button'

class OrderSummary extends Component {


    componentWillUpdate () {
        console.log('[OrderSummary] Will Update')
    }
    render() {

        const ingredientSummary=Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style={{textTransform:'capitalize'}}>
                            {igKey}
                        </span>
                        :
                        {this.props.ingredients[igKey]}
                    </li>
        })
        return(
            <>
                <h3>Your Order</h3>
                <p>Delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price is $<strong>{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType='Success' clicked= {this.props.purchaseContinued}>CONTINUE</Button>
            
            
            
            </>
    
    
        )

    }
    

}

export default OrderSummary;