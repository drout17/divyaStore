import { useState } from "react";
import CartIcon from "./CartIcon";
import { NavLink } from "react-router-dom";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) =>{
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const buttonClasses = `${classes.button} ${btnIsHighlighted?classes.bump:''}`;
    return(
        <>
        <NavLink to="/checkout">
            <button className={buttonClasses} onClick={props.onCartClick}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span className={classes.badge}>{props.cartProducts.length}</span>
            </button>
        </NavLink>
        </>
    );
};

export default HeaderCartButton;