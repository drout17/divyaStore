
import logo from '../../Resources/product.png';

const ProductCard = (props) =>{
    return(<>
        <br/>
        <br/>
        <div className="card pt-3" style={{height:"51vh",width:"40vh"}}>
        <img src={logo} alt="Product Image"/>
        <div class="d-flex justify-content-around pt-2">
            <h5><b>{props.product.name}</b> </h5>
            <h5><p>Rs.{props.product.price}</p></h5> 
        </div>
        <button type="button" className="btn btn-success form-control">Add</button>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>)
}

export default ProductCard;