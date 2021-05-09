import React, {useState} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { InputBase, Paper, Divider, MenuItem, FormControl, Select } from '@material-ui/core';
import DropDownSearch from '../Search/DropDownSearch';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingLeft: "10px",
      display: 'grid',
      gridTemplateColumns: "2fr 1px 1fr",
      alignItems: 'center',
      backgroundColor: props => props.background,
      borderRadius: "var(--imgRoundCorner)",
      border: "none",
      width: props => props.width,
      margin: "0 auto",
      height: "2rem"
    },
    input: {
        color: props => props.color,
      },
    divider: {
      backgroundColor: props => props.color,
    },
    selectControl: {
        height: "2rem",
        paddingLeft: "10px",
        paddingRight: "10px",
    },
    selectInput: {
        color: props => props.color,
    },
    paper: {
        backgroundColor: props => props.background,
        borderRadius: "var(--imgRoundCorner)",
        padding: "8px !important",
    },
    menuList: {
        borderRadius: "var(--imgRoundCorner)",
        backgroundColor: "var(--mainWhite)",
        color: "var(--DarkBlue)"
    },
  }),
);


const StandardFilter = ({width, background, color, type, placeholderText}) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles({width: width, background: background, color: color});

    let dropDownText = {
        match0: "bla",
        match1: "bla",
        match2: "bla",
        suggestion0: "bla",
        suggestion1: "bla",
        suggestion2: "bla"
    }

    return(
        <Paper component="form" className={classes.root}>
            <InputBase 
                classes={{
                    input: classes.input,
                }}
                placeholder={placeholderText}
                InputProps={{ classes: {input: classes.input} }}
                onClick={handleClick}
                />
            < DropDownSearch anchorEl={anchorEl} handleClose={handleClose} 
                background={background} text={dropDownText} color={color} 
            />
            {type==="location" &&
            <>
            <Divider className={classes.divider} orientation="vertical"/>
            <FormControl className={classes.selectControl}>
                <Select
                    classes={{
                        root: classes.selectInput,
                        icon: classes.selectInput,
                        
                    }}
                    MenuProps={{
                        classes: {
                            paper: classes.paper,
                            list: classes.menuList
                        },
                    }}
                    id="demo-simple-select"
                    defaultValue={10}
                    //value={age}
                    //onChange={handleChange}
                >
                    <MenuItem value={10}>klein</MenuItem>
                    <MenuItem value={20}>mittel</MenuItem>
                    <MenuItem value={30}>groß</MenuItem>
                </Select>
            </FormControl>
            </>
            }
        </Paper>
    );
};

export default StandardFilter;