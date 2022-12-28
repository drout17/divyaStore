import { Link,NavLink } from "react-router-dom";
import logo from '../../Resources/favicon.png';
import HeaderCartButton from '../Cart/HeaderCartButton';

const Header = (props) =>
{
//style="background-color: cadetblue"
    return(<>
<header className="font-weight-bold" style={{backgroundColor:'cadetblue',fontWeight: 'bold'}}>
  <nav className="navbar navbar-expand-lg navbar-light">
  <img src={logo} alt="Logo" style={{height:'53px',paddingLeft:'15px'}}/>
    <div className="container-fluid">
      <div className="collapse navbar-collapse d-flex text-light flex-row" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active px-4">
            <Link style={{paddingLeft: 13, textDecoration: 'none', color:'black'}} to="/home">Home</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row-reverse">
            <li className="nav-item px-4" style={{paddingTop: 17}}>
            <Link style={{paddingLeft: 13,  textDecoration: 'none', color:'black'}} to="/home">Login</Link>
            </li>
            <li>
              <HeaderCartButton cartProducts={props.cartProducts}/>
            </li>
            &nbsp;
            <li className="pt-2">
            <button type="button" className="btn btn-light form-control">Search</button>
            </li>
            &nbsp;
            <li className="pt-2">
              <input className="form-control text-center" type="text" placeholder="Search"/>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
</header>
    </>);
}

export default Header;