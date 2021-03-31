import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// get our fontawesome imports
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from '../Buttons/CartIcon';
import LogoAndDots from '../Buttons/LogoAndDots';
import SideBar from '../NavBarMain/SideBar';

const NavBack = ({ classNameHero, numberItems }) => {


    const [ show , setShow ] = useState(false);

    const modalStyle = (modalOpen) => {
      if(modalOpen){
        return({display: "block"});
      } else {
        return({display: "none"});
      }
    };
  
    const openSideBarModal = () => {
      setShow(true);
    };
  
    const closeSideBarModal = () => {
      setShow(false);
    };
  
    //close modal if user clicks anywhere outside of it
    window.addEventListener("click", function(event) {
      if (event.target === document.getElementById("navbar-overlaySideBarMain")) {
        closeSideBarModal();
      };
    });

    const classNameHeader = "navbarBack " + classNameHero;
    return(
        <React.Fragment>
            <header className={classNameHeader}>
                <div className="navbarBack-heroCenter">
                    < LogoAndDots action={openSideBarModal}/>
                    <span className="navbarBack-heroArrowIcon">
                        <Link to="/"> 
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Link>
                    </span>
                    < Cart classNameContainer="navbarBack-heroRight" numberItems={numberItems} />
                </div>
            </header>
            < SideBar closeDialog = {closeSideBarModal} style = {modalStyle(show)} id = "navbar-overlaySideBarMain"/>
        </React.Fragment>
    );
};

export default NavBack;