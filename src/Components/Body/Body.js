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
    let flag = true;
    const [cartItems,setCartItems] = useState([]);
    
    const addProductHadler=(newProduct)=>{
        flag=true;
        if(cartItems!==undefined && cartItems.length!==0)
        checkCartItem(newProduct);
        else
        pushProducts(newProduct);
    }

    const checkCartItem = (newProduct)=>{
        cartItems.forEach(product => {
            if(product.id===newProduct.id)
            {
                    product.count++;
                    flag=false;
            }
        });

        if(flag)
        pushProducts(newProduct);
        else
            setCartItems(cartItems);
    }

    const pushProducts=(newProduct)=>{
        setCartItems([...cartItems,{id:newProduct.id,price:newProduct.price,
            name:newProduct.name,count:1}]);
    }

    return(<>
    <Header cartProducts={cartItems}/>
    <div className="p-5 text-center bg-light">
        <Routes>
            <Route path="/" exact element={<Home addProductToCart={addProductHadler} products={PRODUCT_ARRAY}/>}/>
            <Route path="/home" element={<Home addProductToCart={addProductHadler} products={PRODUCT_ARRAY}/>}/>
        </Routes>
    </div>
    </>);

}

export default Body;