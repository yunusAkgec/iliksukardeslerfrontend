import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token"); // Kullanıcı token’ı

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} token={token} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
