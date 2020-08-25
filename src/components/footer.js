import React from 'react';




const FooterComponent = () => {


return(
    <div className="footer">
        <div className="footer_details">
            <span className="footer_price">Price: 33 333 euros</span>
            <span className="footer_split">/</span>
            <button className="footer_boutonRecap">
                <div className="footer_boutonRecapContent">Récapitulatif</div>
            </button>
        </div>
            <button className="footer_boutonOption" type="button">
                <div className="footer_boutonContent">
                <span className="footer_boutonContentSpan">Option suivante: Couleurs</span>
                </div>
            </button>
    </div>

    );

}

export default FooterComponent;
