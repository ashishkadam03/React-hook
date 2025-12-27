import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Products.css";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <p className="status">Loading products...</p>;
  }

  if (error) {
    return <p className="status error">Error: {error}</p>;
  }

  return (
    <div className="products-container">
      <h2>Product List</h2>
      <div className="products-grid">
        {data &&
          data.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
