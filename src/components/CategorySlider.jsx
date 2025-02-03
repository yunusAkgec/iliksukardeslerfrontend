import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/CategorySlider.css";


// Kategori verileri
const categories = [
  { id: 1, name: "Ford Courier", img: "/images/courier.jpg" },
  { id: 2, name: "Ford Focus", img: "/images/focus.jpg" },
  { id: 3, name: "Ford Fiesta", img: "/images/fiesta.jpg" },
  { id: 4, name: "Ford Transit", img: "/images/transit.jpg" },
  { id: 5, name: "Ford Connect", img: "/images/connect.jpg" },
];

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Görünecek kategori sayısı
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="category-slider">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.img} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
