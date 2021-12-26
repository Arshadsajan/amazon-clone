import React from 'react'
import { useStateValue } from '../context/StateProvider'
import './Product.css'
// import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ id, title, price, rating, image }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item in the data layer.
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                rating,
                image
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__name">
                    {title}
                </p>

                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (<span>⭐</span>))
                    }
                </div>
            </div>

            <img className="product__image"
                src={image} alt="" />

            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
