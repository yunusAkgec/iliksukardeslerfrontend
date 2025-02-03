import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Tüm ürünleri çek
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Sepete ürün ekle
export const addToCart = async (productId, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/cart/add/${productId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
