import React from 'react';
import { useSelector } from 'react-redux';




const FooterComponent = () => {
    const prix = useSelector ((state) => state.price)


return(
   <div className="footer_details">
            <span className="footer_price">Price: 33 333 euros</span>
            <span className="footer_split">/</span>
            <button className="footer_boutonRecap">
                <div className="footer_boutonRecapContent">Récapitulatif</div>
            </button>
        </div>
    );

}

export default FooterComponent;
