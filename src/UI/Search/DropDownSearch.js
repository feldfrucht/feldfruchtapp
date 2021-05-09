import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { MenuItem, Menu, Paper } from '@material-ui/core';
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const useStyles = makeStyles({
    menuPaper: {
        backgroundColor: props => props.background,
        width: "40vw",
        borderRadius: "0 0 var(--imgRoundCorner) var(--imgRoundCorner)",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",

    },
    list: {
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        gridRowGap: "10px",
        alignContent: "center",
        width: "40vw !important",
        padding: "8px !important",
        
    },
    paperItem: {
        borderRadius: "var(--imgRoundCorner)",
        alignSelf: "center",
        color: "var(--DarkBlue)"
    }
  })

const DropDownSearch = ({anchorEl, handleClose, background, text}) => {
    
    const classes = useStyles({background: background});

    return(
    <Menu
        classes={{
            paper: classes.menuPaper,
            list: classes.list,
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
        keepMounted
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
    >
        <Paper className={classes.paperItem}>
            <MenuItem onClick={handleClose} > 
                {text.match0}
            </MenuItem>
            <MenuItem onClick={handleClose} > 
                {text.match1}
            </MenuItem>
            <MenuItem onClick={handleClose} > 
                {text.match2}
            </MenuItem>
        </Paper>
        <Paper className={classes.paperItem}>
            <MenuItem onClick={handleClose} > 
                <FontAwesomeIcon icon={faSearch} style={{marginRight: "4px"}} />{text.suggestion0}
            </MenuItem>
            <MenuItem onClick={handleClose} > 
                <FontAwesomeIcon icon={faSearch}  style={{marginRight: "4px"}}/>{text.suggestion1}
            </MenuItem>
            <MenuItem onClick={handleClose} > 
                <FontAwesomeIcon icon={faSearch}  style={{marginRight: "4px"}}/>{text.suggestion2}
            </MenuItem>
        </Paper>
    </Menu>
);
}

export default DropDownSearch;