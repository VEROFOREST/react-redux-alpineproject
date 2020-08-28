import React from 'react';
import logo from '../images/sources-homepage/logo/logo-white.png';
import { Button } from 'react-bootstrap';




const NavComponent = () => {


return(

    <div className="menuFilariane">
        <ul className="menuFilarianeUl">
          <img className="menuFilarianeImg" src={logo} alt=""/>

          <li className="menuFilarianeLi">
            <div id="cercle"><div id="line"></div> </div> 
            <Button href="./" className="menuBoutonFilariane">
            <div className="menuBoutonFilariane_content">1/ Version</div>
            </Button>
          </li>
          <li className="menuFilarianeLi">
            <div id="cercle"><div id="line"></div></div> 
            <Button href="./couleurs" className="menuBoutonFilariane">
              <div className="menuBoutonFilariane_content">2/ Couleur</div>
            </Button>
          </li>
          <li className="menuFilarianeLi">
            <div id="cercle"><div id="line"></div></div> 
            <button className="menuBoutonFilariane">
              <div className="menuBoutonFilariane_content">3/ Jantes</div>
            </button>
          </li>
          <li className="menuFilarianeLi">
            <div id="cercle"><div id="line"></div></div> 
            <button className="menuBoutonFilariane">
              <div className="menuBoutonFilariane_content">4/ Sellerie</div>
            </button>
          </li>
          <li className="menuFilarianeLi">
            <div id="cercle"><div id="line"></div></div> 
            <button className="menuBoutonFilariane">
              <div className="menuBoutonFilariane_content">5/ Equipements</div>
            </button>
          </li>
          <li className="menuFilarianeLi">
            <div id="cercle"><div id="line"></div></div> 
            <button className="menuBoutonFilariane">
              <div className="menuBoutonFilariane_content">6/ Accessoires</div>
            </button>
          </li>
        </ul>

    </div>



);

}

export default NavComponent;
