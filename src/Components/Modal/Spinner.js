//import LoadingOverlay from 'react-loading-overlay';
import Spin from 'react-bootstrap/Spinner';

const Spinner = () =>{
   // const isActive = true;
    return(<>
         {/* <LoadingOverlay active={isActive} spinner text='Loading...'></LoadingOverlay> */}
         <div style={{paddingLeft:"40rem",paddingTop:"15rem",color:"white"}}>
            <Spin animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spin>
        </div>
    </>)
}

export default Spinner;