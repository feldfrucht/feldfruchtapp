import React, { useState, useEffect } from 'react';
import LogoAndDots from '../Buttons/LogoAndDots';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import Cart from '../Buttons/CartIcon';


const NavBar = ({ numberItems }) => {

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
  
  useEffect(() => {

    const onClickFunction = (event) => {
      if (event.target === document.getElementById("navbar-overlaySideBarMain")) {
        closeSideBarModal();
      };
    }
    window.addEventListener("click", onClickFunction);

    return function cleanup() {
      window.removeEventListener('click', onClickFunction);
    };
  },[]);


  return(
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-center">
          < LogoAndDots action = {openSideBarModal}/>
          < SearchBar />
          < Cart classNameContainer="navbar-right" numberItems={numberItems} />
        </div>
      </nav>
      < SideBar closeDialog = {closeSideBarModal} style = {modalStyle(show)} id = "navbar-overlaySideBarMain"/>
    </React.Fragment>
  );

};

export default NavBar;