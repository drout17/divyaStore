import { useState } from 'react';
import ProductCard from "../ProductCard/ProductCard";

const Home = (props) =>{
    return(<>
        <div className="container-fluid">
            <div className="row">
            {props.products.map((product,index) =>{
                console.log(index)
           return (<ProductCard key={index} product={product}/>)})}
            </div>
        
        </div>
    </>)

}

export default Home;