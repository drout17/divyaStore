import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import Header from '../Header/Header';

const PRODUCT_ARRAY =[
    {id:1,name:"Product 1",price:100},
    {id:2,name:"Product 2",price:110},
    {id:3,name:"Product 3",price:120},
    {id:4,name:"Product 4",price:130},
    {id:5,name:"Product 5",price:140}];

const Body = () =>{
    
    const [cartProducts,setCartProducts] = useState([]);
    const [products,setProducts] = useState(PRODUCT_ARRAY);
    
    let flag = true;
    
    const addProductHadler=(newProduct)=>{
        flag=true;
        if(cartProducts!==undefined && cartProducts.length!==0)
        checkCartProducts(newProduct);
        else
        pushProducts(newProduct);
    }

    const checkCartProducts = (newProduct)=>{
        cartProducts.forEach(product => {
            if(product.id===newProduct.id)
            {
                    product.count++;
                    flag=false;
            }
        });

        if(flag)
        pushProducts(newProduct);
        else
        setCartProducts(cartProducts);
    }

    const pushProducts=(newProduct)=>{
        setCartProducts([...cartProducts,{id:newProduct.id,price:newProduct.price,
            name:newProduct.name,count:1}]);
    }

    const seachHandler = (searchString) => {
        let tempProducts = [];
        PRODUCT_ARRAY.forEach(product => {
            if(product.name.includes(searchString))
            {
                tempProducts.push(product)
            }
        });
        setProducts(tempProducts);
    }

    return(<>
    <Header cartProducts={cartProducts} search={seachHandler}/>
    <div className="p-5 text-center bg-light">
        <Routes>
            <Route path="/" exact element={<Home addProductToCart={addProductHadler} products={products}/>}/>
            <Route path="/home" element={<Home addProductToCart={addProductHadler} products={products}/>}/>
        </Routes>
    </div>
    </>);

}

export default Body;