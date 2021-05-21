import React, { useState } from 'react';
// get our fontawesome imports
import Cart from '../Buttons/CartIcon';
import LogoAndDots from '../Buttons/LogoAndDots';
import SideBar from '../NavBarMain/SideBar';
import ArrowBack from '../Buttons/ArrowBack';

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
                      <ArrowBack/>
                    </span>
                    < Cart classNameContainer="navbarBack-heroRight" numberItems={numberItems} />
                </div>
            </header>
            < SideBar closeDialog = {closeSideBarModal} style = {modalStyle(show)} id = "navbar-overlaySideBarMain"/>
        </React.Fragment>
    );
};

export default NavBack;