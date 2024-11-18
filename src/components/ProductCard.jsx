import PropTypes from 'prop-types';
import { useState } from 'react';


const ProductCard = ({ src, alt, product, productName, price, onAddToCart }) => {


    const [inCart, setInCart] = useState(false)
    const [count, setCount] = useState(1)

    const handleAddToCart = () => {
        onAddToCart({ product, productName, price: Number(price), count });
        setInCart(true);
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            setInCart(false);
        }
    };



    return (
        <div className="w-full relative">
            <img
                src={src}
                alt={alt}
                className={`w-full h-60 object-cover rounded-xl mb-4 ${inCart ? 'border-2 border-primaryRed' : ''}`} />

            {inCart ? (
                <div className='absolute top-[60%] right-0 w-full h-auto  flex justify-center items-center'>
                    <div className='border flex justify-between items-center gap-8 border-primaryRed rounded-full px-6 py-3 bg-primaryRed'>
                        <button onClick={handleDecrease} className='border border-white rounded-[100%] w-6 h-6 gap-2 flex justify-center items-center'>
                            <img src="./icon-decrement-quantity.svg" alt="Decrement" />
                        </button>
                        <span className='text-white text-center'>{count}</span>
                        <button onClick={handleIncrease} className='border border-white rounded-[100%] w-6 h-6 gap-2 flex justify-center items-center'>
                            <img src="./icon-increment-quantity.svg" alt="Increment" />
                        </button>
                    </div>
                </div>
            ) : (

                <div
                    className="absolute top-[60%] right-0 w-full h-auto  flex justify-center items-center">
                    <button
                        className="border flex items-center gap-2 border-primaryRed rounded-full px-6 py-3 bg-white"
                        onClick={handleAddToCart}>
                        <img
                            src="./icon-add-to-cart.svg"
                            alt="Cart" />
                        <span className="text-stone-800 font-primaryBold">Add to cart</span>
                    </button>
                </div>
            )}

            <span
                className="text-rose-400 font-primaryRegular">{product}</span>
            <h2
                className="text-stone-800 font-bold text-[1em] my-1">{productName}</h2>
            <p
                className="text-primaryRed text-xl font-semibold">
                ${price}
            </p>
        </div>
    )
}

ProductCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};


export default ProductCard