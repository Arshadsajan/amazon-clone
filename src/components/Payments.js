import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Payments.css'

function Payments() {
    const [{ basket, user }] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

    return (
        <div className="payments">
            <table>
                <tr>
                    <th>Delivery Address</th>
                    <td>
                        <p>{user?.email || 'arshadsajan@gmail.com'}</p>
                        <p>sajan galli,</p>
                        <p>Kudachi,Karnataka</p>
                    </td>
                </tr>
                <tr>
                    <th>Review Items and Delivery</th>
                    <td>
                        {
                            basket.length > 0 ?
                                basket.map(item =>
                                    <CheckoutProduct item={item} />
                                ) : <h5>Your Cart is Empty</h5>
                        }
                    </td>
                </tr>
                <tr>
                    <th>Payment Method</th>
                    <td className="card_elements">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="card__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>
                                            Order Total: <strong>{value}</strong>
                                        </h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </div>
                        </form>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Payments
