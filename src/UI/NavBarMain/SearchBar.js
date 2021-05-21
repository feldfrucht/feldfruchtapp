import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { InputBase, Paper, IconButton } from '@material-ui/core';
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownSearch from '../Search/DropDownSearch';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingLeft: "10px",
      display: 'grid',
      gridTemplateColumns: "auto auto",
      backgroundColor: "var(--LightGreen)",
      borderRadius: "var(--imgRoundCorner)",
      border: "none",
      width: "65vw",
      margin: "0 auto",
      height: "2rem",
      boxShadow: "none"
    },
    input: {
        color: props => props.color,
    },
    iconButton: {
        height: "2rem",
        width: "2rem",
        color: "var(--DarkBlue)",
        justifySelf: "end",
        marginRight: "10px",
    }
  }),
);

const SearchBar = () => {

  const [clicked, setClicked] = useState(false);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  let dropDownText = {
        match0: "bla",
        match1: "bla",
        match2: "bla",
        suggestion0: "bla",
        suggestion1: "bla",
        suggestion2: "bla"
    }

  return(
    <>
    {/* <div className="searchbarMain-container">
      <input type="search" id="search" placeholder="Suchen" onFocus={()=>{setClicked(true)}} onBlur={()=>{setClicked(false)}} />
      <span className="searchbarMain-icon">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      < DropDownSearch clicked={clicked} text={dropDownText} />
    </div> */}
    <Paper component="form" className={classes.root}>
    <InputBase 
        classes={{
            input: classes.input,
            root: classes.inputRoot
        }}
        placeholder="Suchen"
        InputProps={{ classes: {input: classes.input} }}
        onClick={handleClick}
        />
    <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <FontAwesomeIcon icon={faSearch} />
    </IconButton>
    < DropDownSearch anchorEl={anchorEl} text={dropDownText} handleClose={handleClose} background="var(--LightGreen)" />
  </Paper>
  </>
  );
};

export default SearchBar;