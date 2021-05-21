import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// get our fontawesome imports
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
    root: {
      minWidth: "0 !important",
    }
  });

const ArrowBack = () => {
    const theme = useTheme();
    const classes = useStyles();
    
    return (
        <Button classes={{root: classes.root}} variant="text" color={theme.palette.primary.light} href={"/"}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Button> 
    )};

export default ArrowBack;