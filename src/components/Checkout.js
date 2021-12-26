import React from 'react'
import { useStateValue } from '../context/StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="container">
                <div className="checkout__left">
                    <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="advertisement" />
                    <h2>Your Shopping Basket</h2>
                    <hr />
                    {basket.map(item =>
                        <CheckoutProduct item={item} />
                    )}
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
