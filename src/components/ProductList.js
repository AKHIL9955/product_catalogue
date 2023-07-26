import React, { useState, useEffect } from "react";
import axios from "axios";

const Maincontent = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const fetchProductData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
    }
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="main_content">
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5">
        {products.map((item) => {
          return(
            <div className="col">
              <div className="card h-100 ">
                <div className="card_img">
                <img src={item.thumbnail} className="card-img-top d" alt="..." />
                </div>
                <div className="card-body ch">
                  <h5 className="card-title ch1">{item.title}</h5>
                  <p className="card-text ch2">
                    {item.description}
                  </p>
                  <p className="price">₹{item.price}</p>
                  <p className="rating">Rating : {item.rating}</p>
                  <button className="cart btn">Add To Cart </button>
                </div>
              </div>
            </div>
        )})
        }
      </div>
      </div>
    
     
  );}
  

export default Maincontent;
