import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import CategorySlider from "../components/CategorySlider";


const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // Kategorileri API'den çek
  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Kategori yüklenirken hata:", err));

    // Öne çıkan ürünleri API'den çek
    fetch("http://localhost:8080/api/products/featured")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data))
      .catch((err) => console.error("Öne çıkan ürünler yüklenirken hata:", err));
  }, []);

  return (
    <div className="home-container">
      <CategorySlider />
      <h1 className="home-title">Hoş Geldiniz!</h1>
      
      {/* Kategoriler */}
      <section className="categories">
        <h2>Kategoriler</h2>
        <div className="category-list">
          {categories.length > 0 ? (
            categories.map((category) => (
              <Link key={category.id} to={`/category/${category.name}`} className="category-card">
                {category.name}
              </Link>
            ))
          ) : (
            <p>Kategoriler yükleniyor...</p>
          )}
        </div>
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="featured-products">
        <h2>Öne Çıkan Ürünler</h2>
        <div className="product-list">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>Fiyat:</strong> ${product.price}</p>
                <button className="add-to-cart">Sepete Ekle</button>
              </div>
            ))
          ) : (
            <p>Ürünler yükleniyor...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
