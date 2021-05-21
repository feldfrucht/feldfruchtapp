import React from 'react';
import { Link } from 'react-router-dom'
import HeartBtn from '../../HeartBtn';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    borderRadius: "var(--imgRoundCorner)",
    background: "var(--LightBlue)",
  },
  media: {
    width: "11rem",
    height: "11rem",
    borderRadius: "var(--imgRoundCorner)",
    zIndex: "1",
    position: "absolute",
    top: "0.8rem",
    left: "0.8rem",
  },
  content: {
    padding: "0.6rem",
    paddingTop: "3.2rem",
    background: "var(--LightGreen)",
    borderRadius: "var(--imgRoundCorner)",
    position: "absolute",
    top: "9rem",
    display: "grid",
    gridTemplateRows: "auto auto",
    gridTemplateColumns: "auto auto",
    
  },
  action: {
    position: "relative",
  },
  contentDescr: {
    gridColumn: "1/-1",
    height: "67px",
    overflow: "hidden"
  }
});

const Farmer = ({ image, description, name }) => {

  const classes = useStyles();

  const heartButtonStyle = {
    justifySelf: "end"
  };

  return(
    <>
    <Card className={classes.root} elevation={0}>
      
      <CardActionArea className={classes.action}>
        <Link to="/farmerId"> 
        <CardMedia
          className={classes.media}
          image={image}
          title="Erzeuger der Woche"
        />
        </Link> 
        <CardContent className={classes.content}>
          <Link to="/farmerId"> 
            <Typography gutterBottom variant="body" component="h3">
              {name}
            </Typography>
            </Link> 
            <HeartBtn style={heartButtonStyle}/>
            <Link to="/farmerId"  className={classes.contentDescr}> 
            <Typography variant="body2" component="p">
              {description}
            </Typography>
            </Link> 
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
    </>
  );
};
  

export default Farmer;