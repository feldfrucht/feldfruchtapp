import React  from 'react';
import { Link } from 'react-router-dom';
import addBackgrdImage from '../../Utils/addBackgrdImage';

const RoundMap = ({ text, link, image }) => {

  return( 
    <Link className="roundMap" to={link} style={addBackgrdImage(image)}>
      <p>{text}</p>
    </Link>
  );
};

export default RoundMap;