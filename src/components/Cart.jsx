import PropTypes from "prop-types";

const Cart = ({ cartItems, onRemoveFromCart, totalQuantity, totalPrice }) => {

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.count), 0).toFixed(2);
    };

    return (
        <div className="w-full p-4 rounded-md bg-white">
            <h2 className="text-2xl font-primaryBold text-primaryRed mb-8">Your Cart ({totalQuantity})</h2>

            {cartItems.length === 0 ? (
                <>
                    <div className="w-full flex justify-center items-center mb-2">
                        <img src="illustration-empty-cart.svg" alt="Empty cart" />
                    </div>
                    <p className="text-center text-rose-500 font-semibold mb-4">Your added items will appear here</p>
                </>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold text-rose-900 mb-2">{item.productName}</h3>
                                    <div className="flex gap-6">
                                        <p className="font-semibold text-primaryRed">{item.count}x</p>
                                        <p className="text-rose-400">@ ${item.price.toFixed(2)}</p>
                                        <p className="text-rose-500 font-semibold">
                                            ${item.price.toFixed(2)} x {item.count} = ${(item.price * item.count).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => onRemoveFromCart(item.productName)} className="w-6 h-6 rounded-full border border-rose-500 flex justify-center items-center">
                                    <img src="icon-remove-item.svg" alt="Remove" />
                                </button>
                            </div>
                            {index < cartItems.length - 1 && <hr className="my-2" />}
                        </div>
                    ))}

                    <p className="text-lg font-bold mt-4">Order Total: ${calculateTotalPrice()}</p>

                    <div className="w-full flex items-center justify-center gap-2 p-3 rounded-md bg-rose-100">
                        <img src="/icon-carbon-neutral.svg" alt="Carbon" />
                        <p className="text-xs text-stone-800">This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>
                    <button className="my-4 border border-primaryRed bg-primaryRed text-white rounded-full px-4 py-3 text-center w-full">
                        Confirm Order
                    </button>
                </>
            )}
        </div>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.string.isRequired,
            productName: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
        })
    ).isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    totalQuantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
};

export default Cart;
