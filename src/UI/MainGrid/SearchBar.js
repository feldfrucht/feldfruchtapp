import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
//import './hero.css';

const useStyles = makeStyles({
    button: {
        
        marginTop: "0.9rem",
    }
  })

const SearchBar = () => {
    const classes = useStyles();

    return(
    <section className="searchNav">
        <div className="section-title">
            <p>Entdecken</p>
        </div>
        <div className="searchNav-btnCont">
            <Button variant="contained" size="large" color="secondary" className={classes.button} href={"/farmerOverview"}>
                Erzeuger
            </Button> 
            <Button variant="contained" size="large" color="secondary" className={classes.button} href={"/productShop"}>
                Produkte
            </Button> 
            <Button variant="contained" size="large" color="secondary" className={classes.button} href={"/marketOverview"}>
                Märkte
            </Button> 
        </div>
    </section>
  )};

export default SearchBar;