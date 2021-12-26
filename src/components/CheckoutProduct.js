import React from 'react'
import { useStateValue } from '../context/StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct(props) {
    const { id, title, image, price, rating } = props.item;
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: { ...props.item }
        })
    }

    return (
        <div className="cart__items">
            <img src={image} alt="item" />
            <div className="cart__item__details">
                <p className="item__tile">
                    {title}
                </p>
                <p className="item__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (<span>⭐</span>))
                    }
                </p>
                <button className="cart__btn" onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
