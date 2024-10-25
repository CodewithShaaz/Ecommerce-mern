import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch new arrivals from an API or service
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products/new-arrivals");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      }
    };

    fetchNewArrivals();
  }, []);

  // Inline styles
  const styles = {
    newArrivals: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '2.5rem',
    },
    productGrid: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    productCard: {
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      maxWidth: '250px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    productImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '4px',
      marginBottom: '10px',
    },
    productName: {
      fontSize: '1.25rem',
      marginBottom: '10px',
    },
    productDescription: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '15px',
    },
    productPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    addToCartButton: {
      padding: '10px 15px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    addToCartButtonHover: {
      backgroundColor: '#218838',
    },
  };

  return (
    <div style={styles.newArrivals}>
      <h1 style={styles.heading}>New Arrivals</h1>
      <div style={styles.productGrid}>
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} style={styles.productCard}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.productDescription}>{product.description}</p>
              <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
              <button
                style={styles.addToCartButton}
                onMouseOver={e => e.currentTarget.style.backgroundColor = styles.addToCartButtonHover.backgroundColor}
                onMouseOut={e => e.currentTarget.style.backgroundColor = styles.addToCartButton.backgroundColor}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No new arrivals at the moment. Please check back later!</p>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
