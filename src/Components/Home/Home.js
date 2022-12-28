import ProductCard from "../ProductCard/ProductCard";

const Home = (props) =>{
    return(<>
        <div className="container-fluid">
            <div className="row">
            {props.products.map((product,index) =>(<ProductCard addTocart={props.addProductToCart} key={index} product={product}/>))}
            {props.products.length===0 && <h4><b>No Product Found</b></h4>}
            </div>
        </div>
    </>)
}

export default Home;