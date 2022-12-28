
import logo from '../../Resources/product.png';

const ProductCard = (props) =>{

    const addProductToCart = () =>{
        props.addTocart(props.product);
    }

    return(<>
        <div className="card pt-3" style={{height:"51vh",width:"40vh"}}>
        <img src={logo} alt="Product Image"/>
        <div className="d-flex justify-content-around pt-2">
            <h5><b>{props.product.name}</b> </h5>
            <h5><p>Rs.{props.product.price}</p></h5> 
        </div>
        <div className="d-flex justify-content-around">
            <button type="button" className="btn btn-info form-control" onClick={addProductToCart}>Add</button>
            &nbsp;&nbsp;
            <button type="button" className="btn btn-primary form-control">Buy Now</button>
        </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>)
}

export default ProductCard;