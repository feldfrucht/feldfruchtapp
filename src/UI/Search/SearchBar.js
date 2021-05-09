import React, {useState} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputBase, Paper, IconButton } from '@material-ui/core';

import DropDownSearch from './DropDownSearch';


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
      height: "2rem"
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

const SearchBar = ({ text }) => {

    const [clicked, setClicked] = useState(false);
    const classes = useStyles();

    let dropDownText = {
        match0: "bla",
        match1: "bla",
        match2: "bla",
        suggestion0: "bla",
        suggestion1: "bla",
        suggestion2: "bla"
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Paper component="form" className={classes.root}>
            <InputBase 
                classes={{
                    input: classes.input,
                    root: classes.inputRoot
                }}
                placeholder="Märkte suchen"
                InputProps={{ classes: {input: classes.input} }}
                onClick={handleClick}
                />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <FontAwesomeIcon icon={faSearch} />
            </IconButton>
            < DropDownSearch anchorEl={anchorEl} text={dropDownText} handleClose={handleClose} background="var(--LightGreen)" />
        </Paper>
    );
};

export default SearchBar;