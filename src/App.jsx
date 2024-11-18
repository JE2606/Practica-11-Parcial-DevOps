import { useState } from "react"
import Cart from "./components/Cart"
import ProductCard from "./components/ProductCard"

function App() {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  const removeFromCart = (productName) => {
    setCartItems((prevItems) => {
        return prevItems.reduce((acc, item) => {
            if (item.productName === productName) {
                if (item.count > 1) {
                    acc.push({ ...item, count: item.count - 1 });
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, []);
    });
};

  const totalQuantity = cartItems.reduce((total, item) => total + item.count, 0)

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.count, 0).toFixed(2)


  return (
    <section className="py-4 px-8 flex flex-col w-full h-full">
      <h1 className="text-4xl font-primaryBold mb-8 text-stone-800">Desserts</h1>
      <section className="flex flex-col justify-center items-center gap-12 w-full h-full ">

        <ProductCard src="./images/image-waffle-desktop.jpg" alt="Waffle" product="Waffle" productName="Waffle with Berries" price="6.50" onAddToCart={addToCart}/>
        
        <ProductCard src="./images/image-creme-brulee-desktop.jpg" alt="Crème Brûlée" product="Crème Brûlée" productName="Vanilla Bean Crème Brûlée" price="7.00" onAddToCart={addToCart}/>
        
        <ProductCard src="./images/image-macaron-desktop.jpg" alt="Macaron" product="Macaron" productName="Macaron Mix of Five" price="8.00" onAddToCart={addToCart}/>
        
        <ProductCard src="./images/image-tiramisu-desktop.jpg" alt="Tiramisu" product="Tiramisu" productName="Classic Tiramisu" price="5.50" onAddToCart={addToCart}/>

        <ProductCard src="./images/image-baklava-desktop.jpg" alt="Baklava" product="Baklava" productName="Pistachio Baklava" price="4.00" onAddToCart={addToCart}/>

        <ProductCard src="./images/image-meringue-desktop.jpg" alt="Pie" product="Pie" productName="Lemon Meringue Pie" price="5.00" onAddToCart={addToCart}/>

        <ProductCard src="./images/image-cake-desktop.jpg" alt="Cake" product="Cake" productName="Red Velvet Cake" price="4.50" onAddToCart={addToCart}/>

        <ProductCard src="./images/image-brownie-desktop.jpg" alt="Brownie" product="Brownie" productName="Salted Caramel Brownie" price="4.50" onAddToCart={addToCart}/>

        <ProductCard src="./images/image-panna-cotta-desktop.jpg" alt="Panna Cotta" product="Panna Cotta" productName="Vanilla Panna Cotta" price="5.50" onAddToCart={addToCart}/>

        <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} totalQuantity={totalQuantity} totalPrice={totalPrice} />
      </section>
    </section>
  )
}

export default App
