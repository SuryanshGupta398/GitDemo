import { useState } from 'react'
import './App.css'

function App() {

  const products = [
    {
      id: 1,
      name: "White Casual Sneaker",
      price: 70,
      image: "https://m.media-amazon.com/images/I/71LTBCP6qyL._AC_UY1000_.jpg"
    },
    {
      id: 2,
      name: "MACTREE Men's Mid Top Ankle Boots",
      price: 90,
      image: "https://m.media-amazon.com/images/I/51qySOKgq6L._AC_UY1000_.jpg"
    },
    {
      id: 3,
      name: "Campus Men's Sneakers",
      price: 50,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3zw7-fdBY1hovBZDWgKR-lmXyHftFgyzJVt91eeZ4w&s"
    },
    {
      id: 4,
      name: "Campus Men's OG-03 Sneakers",
      price: 75,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3DVF_gmSsh-wjOXa-aLblNOoc6wWC-Kjy5hYQl7VXgVQi305H7NcutNz&s=10"
    },
    {
      id: 5,
      name: "U.S.POLO ASSN, Mens Panal Sneaker",
      price: 99,
      image: "https://uspoloassn.in/cdn/shop/files/1_18a6959b-8d7c-4e56-a46d-1a349f92c3f4.jpg"
    },
    {
      id: 6,
      name: "ASIAN Men's Sports Shoes",
      price: 68,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSN4SQewkA2epkqZeGLyXE38ZU6FhPBB-l6VFBOz74uw&s"
    },
    {
      id: 7,
      name: "ASIAN Mens Thar-13 Sneaker",
      price: 120,
      image: "https://5.imimg.com/data5/SELLER/Default/2025/8/533992483/XT/UJ/FL/3678405/asian-thar-13-white-tblue-sports-running-shoes.jpg"
    },
    {
      id: 8,
      name: "ASIAN Men's AIRWEAVE-02 Sports Shoes",
      price: 40,
      image: "https://5.imimg.com/data5/SELLER/Default/2025/8/533990372/KW/TN/LE/3678405/asian-airweave-02-dgrey-black-sgreen-sports-running-shoes.jpg"
    }
  ]

  const [cart, setCart] = useState([]);

  const addCart = (product) => {

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const increaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  }

  const decreaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter((item) => item.quantity > 0));
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <>
      <div className='app'>
        <div className="navbar">
          <div className="logo">
            <img src="./src/assets/logo.png" alt="Logo" />
          </div>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <main className="content">
          <section className="product-section" id="categories">
            <div className="shoe-products">
              {products.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <button onClick={() => addCart(product)}>Add Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="cart-section">
            <h3>Cart</h3>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>

                  <div className='quantity'>
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total: ${total.toFixed(2)}</h3>
            </div>
          </aside>
        </main>
      </div>
    </>
  )
}

export default App
