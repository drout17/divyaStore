import Spinner from "./Spinner";
import './OverLay.css';

const OverLay = () =>{

    const hideHandler = () =>{
        document.getElementById("overLay").style.display="none";
    }

    return(
        <>
           <div className="OverLay" id="overLay" onClick={hideHandler}>
            <Spinner/>
           </div>
        </>
    )
}

export default OverLay;