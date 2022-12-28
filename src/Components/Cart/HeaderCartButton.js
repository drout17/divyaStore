import { useState } from "react";
import CartIcon from "./CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) =>{
    
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const buttonClasses = `${classes.button} ${btnIsHighlighted?classes.bump:''}`;
    console.log("Hii",props)
    return(
        <>
        <button className={buttonClasses} onClick={props.onCartClick}>
            <span className={classes.icon}>
                    <CartIcon/>
            </span>
            <span className={classes.badge}>{props.cartProducts.length}</span>
        </button>
        </>
    );
};

export default HeaderCartButton;