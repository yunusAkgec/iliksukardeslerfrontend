import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios"; // 📌 API çağrısı için axios ekledik.

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const handlePurchase = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before purchasing.");
      return;
    }

    try {
      // ✅ Backend'e sipariş gönderme isteği
      const response = await axios.post("http://localhost:8080/api/orders/create", {
        products: cart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Kullanıcı giriş yapmışsa JWT token ekleyelim
        }
      });

      alert("Your order has been placed successfully!");
      console.log("Order response:", response.data);

      clearCart(); // 📌 Sipariş verildikten sonra sepeti temizleyelim
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Stock: {item.stockQuantity}</p>
              <div>
                <button 
                  onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span> {item.quantity} </span>
                <button 
                  onClick={() => updateQuantity(item.id, Math.min(item.quantity + 1, item.stockQuantity))}
                  disabled={item.quantity >= item.stockQuantity}
                >
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={clearCart} style={{ marginTop: "10px", backgroundColor: "red", color: "white" }}>
            Clear Cart
          </button>
          <button onClick={handlePurchase} style={{ marginTop: "10px", backgroundColor: "green", color: "white" }}>
            Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
