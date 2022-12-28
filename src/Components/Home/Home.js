import { useState } from 'react';
import ProductCard from "../ProductCard/ProductCard";

const Home = (props) =>{
    return(<>
        <div className="container-fluid">
            <div className="row">
            {props.products.map((product,index) =>(<ProductCard addTocart={props.addProductToCart} key={index} product={product}/>))}
            </div>
        
        </div>
    </>)

}

export default Home;