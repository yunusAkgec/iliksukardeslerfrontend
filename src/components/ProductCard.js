import { useState } from "react";
import { addToCart } from "../services/api";

function ProductCard({ product, token }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    await addToCart(product.id, token);
    setAdded(true);
  };

  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><b>Price:</b> ${product.price}</p>
      <p><b>Stock:</b> {product.stockQuantity}</p>
      <button onClick={handleAddToCart} disabled={added} style={styles.button}>
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

const styles = {
  card: { border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" },
  button: { padding: "5px 10px", cursor: "pointer", background: "#007bff", color: "white", border: "none" },
};

export default ProductCard;
