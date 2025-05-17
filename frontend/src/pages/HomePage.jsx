import axios from 'axios';
import './HomePage.css';
import './header.css'

import { useState , useEffect } from 'react';
export function HomePage() {
    const [products , setProducts]= useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/products').then((response)=>{
            setProducts(response.data)
        })
    },[])
    

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <a href="/" className="header-link">
                        <img className="logo"
                            src="assets/logo-white.png" />
                        <img className="mobile-logo"
                            src="assets/mobile-logo-white.png" />
                    </a>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        <img className="search-icon" src="assets/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <a className="orders-link header-link" href="/orders">

                        <span className="orders-text">Orders</span>
                    </a>

                    <a className="cart-link header-link" href="/checkout">
                        <img className="cart-icon" src="assets/icons/cart-icon.png" />
                        <div className="cart-quantity">3</div>
                        <div className="cart-text">Cart</div>
                    </a>
                </div>
            </div>

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            < >
                                <div key = {product.id} className="product-container">
                                    <div className="product-image-container">
                                        <img className="product-image"
                                            src={product.image}/>
                                    </div>

                                    <div className="product-name limit-text-to-2-lines">
                                        {product.name}
                                    </div>

                                    <div className="product-rating-container">
                                        <img className="product-rating-stars"
                                            src={`assets/ratings/rating-${product.rating.stars *10}`} />
                                        <div className="product-rating-count link-primary">
                                            {product.rating.count}
                                        </div>
                                    </div>

                                    <div className="product-price">
                                       ${(product.priceCents / 100).toFixed(2)}
                                    </div>

                                    <div className="product-quantity-container">
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>

                                    <div className="product-spacer"></div>

                                    <div className="added-to-cart">
                                        <img src="assets/icons/checkmark.png" />
                                        Added
                                    </div>

                                    <button className="add-to-cart-button button-primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </>
                        );
                    })}




                </div>
            </div>
        </>
    );
}