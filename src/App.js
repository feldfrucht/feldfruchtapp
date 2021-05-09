import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

//import axios from 'axios';

import MainPage from './UI/MainPage';
import FarmerProfile from './UI/FarmerProfile/FarmerProfile';
import ProductInfo from './UI/ProductInfo/ProductInfo';
import ProductShop from './UI/ProductShop/ProductShop';
import CartDialog from './UI/Cart/CartDialog';
import FarmerOverview from './UI/FarmerOverview/FarmerOverview';
import MarketOverview from './UI/MarketOverview/MarketOverview';
import MarketProfile from './UI/MarketProfile/MarketProfile';
import MarketOverviewMap from './UI/MarketOverview/MarketOverviewMap';
import useStateWithLocalStorage from './Utils/useStateWithLocalStorage';

import './css/styles.css';
import './index.css';

const App = () => {

  // axios
  //   .get("http://localhost:5000/BAUER_1")
  //   .then(function(response) {
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });

  //localStorage.clear()

  const theme = createMuiTheme({
    palette: {
      primary: { //blue
        light: 'rgb(80, 133, 139)',
        main: 'rgb(80, 133, 139)',
        dark: 'hsl(192, 45%, 23%)',
        //contrastText: 'hsl(192, 45%, 23%)',
      },
      secondary: { //green
        light: 'rgb(232, 242, 233)',
        main: 'rgb(232, 242, 233)',
        dark: 'hsl(120, 23%, 79%)',
        //contrastText: 'rgb(232, 242, 233)',
      },
      error: {
        light: "#F2E8E8",
        main: "#C67F7F",
        dark: "#C67F7F",
        //contrastText: "#C67F7F",
      },
    },
  });

  const [cartProducts, setCartProducts] = useStateWithLocalStorage('myStorage', {});


  const products=[
    { name:"Produkt 1", description:"Lecker bio, rot und grün!", price:"3", unit:"€/kg", 
    imageUrl:'/images/buntemoehren.png', isAvailable:true,
    location:"Markt 1", amount:"1", amountUnit:"kg", id:1
    },
    { name:"Produkt 1", description:"Lecker bio, rot und grün!", price:"3", unit:"€/kg", 
    imageUrl:'/images/buntemoehren.png', isAvailable:true,
    location:"Markt 1", amount:"1", amountUnit:"kg", id:2
    },
    { name:"Produkt 2", description:"Lecker bio, rot und grün!", price:"3", unit:"€/kg", 
    imageUrl:'/images/buntemoehren.png', isAvailable:true,
    location:"Markt 1", amount:"1", amountUnit:"kg", id:3
    },
    { name:"Produkt 3", description:"Lecker bio, rot und grün!", price:"3", unit:"€/kg", 
    imageUrl:'/images/buntemoehren.png', isAvailable:true,
    location:"Markt 1", amount:"1", amountUnit:"kg", id:4
    },
    { name:"Produkt 4", description:"Lecker bio, rot und grün!", price:"3", unit:"€/kg", 
    imageUrl:'/images/buntemoehren.png', isAvailable:false,
    location:"Markt 1", amount:"1", amountUnit:"kg", id:5
    }
  ];

  const times=[
    {day:"Mo", begin:"10", end:"12"},
    {day:"Di", begin:"10", end:"12"},
    {day:"Mi", begin:"10", end:"12"},
    {day:"So", begin:"10", end:"12"}
  ];

  const markets=[
    {name:"Markt am Rathaus", street:"Am Rathaus 1", city:"Musterstadt", marketTimes:times, 
    imageUrl:'images/architecture-buildings-commerce-439818.jpg', imageHeroUrl:'images/architecture-buildings-commerce-439818.jpg', 
    impressionImages:['images/farmer_img1.jpg', 'images/farmer_img2.jpg', 'images/farmer_img3.jpg'],
    socialLinks:{ website:""}, marker: {elementId:"marker1", lon:"10", lat:"50"}
    },
    {name:"Markt am Rathaus", street:"Am Rathaus 1", city:"Musterstadt", marketTimes:times, 
    imageUrl:'images/architecture-buildings-commerce-439818.jpg', imageHeroUrl:'images/farmer_hero.jpg', 
    impressionImages:['images/farmer_img1.jpg', 'images/farmer_img2.jpg', 'images/farmer_img3.jpg'],
    socialLinks:{ website:""}, marker: {elementId:"marker2", lon:"8", lat:"49.5"} 
    },
    {name:"Markt am Rathaus", street:"Am Rathaus 1", city:"Musterstadt", marketTimes:times, 
    imageUrl:'images/architecture-buildings-commerce-439818.jpg', imageHeroUrl:'images/farmer_hero.jpg',
    impressionImages:['images/farmer_img1.jpg', 'images/farmer_img2.jpg', 'images/farmer_img3.jpg'],
    socialLinks:{ website:""}, marker: {elementId:"marker3", lon:"11", lat:"52"} 
    }
  ];

  const farmers=[
    {name:"Farmer 1", imageUrl:'images/farmer.jpg', imageHeroUrl:'images/farmer_hero.jpg', 
    impressionImages:['images/farmer_img1.jpg', 'images/farmer_img2.jpg', 'images/farmer_img3.jpg'],
    description:"Das ist ein Bauer. I’m a creative geek from San Francisco, CA. I enjoy creating eye candy solutions for web and mobile apps. Contact me at john@mail.com", 
    team:[{name:"Member 1"}, {name:"Member 2"}, {name:"Member 3"}],
    socialLinks:{facebook:"", instagram:"", website:""} 
    },
    {name:"Farmer 1", imageUrl:'images/farmer.jpg', imageHeroUrl:'images/farmer_hero.jpg', 
    impressionImages:['images/farmer_img1.jpg', 'images/farmer_img2.jpg', 'images/farmer_img3.jpg'],
    description:"Das ist ein Bauer. I’m a creative geek from San Francisco, CA. I enjoy creating eye candy solutions for web and mobile apps. Contact me at john@mail.com",
    team:[{name:"Member 1"}, {name:"Member 2"}, {name:"Member 3"}],
    socialLinks:{facebook:"", instagram:"", website:""} 
    },
    {name:"Farmer 1", imageUrl:'images/farmer.jpg', imageHeroUrl:'images/farmer_hero.jpg', 
    impressionImages:['images/farmer_img1.jpg', 'images/farmer_img2.jpg', 'images/farmer_img3.jpg'],
    description:"Das ist ein Bauer. I’m a creative geek from San Francisco, CA. I enjoy creating eye candy solutions for web and mobile apps. Contact me at john@mail.com", 
    team:[{name:"Member 1"}, {name:"Member 2"}, {name:"Member 3"}], 
    socialLinks:{facebook:"", instagram:"", website:""} 
    },
    {name:"Farmer 1", imageUrl:'images/farmer.jpg', imageHeroUrl:'images/farmer_hero.jpg',
    impressionImages:['images/farmer_img1.jpg', 'images/farmer_img2.jpg', 'images/farmer_img3.jpg'],
    description:"Das ist ein Bauer. I’m a creative geek from San Francisco, CA. I enjoy creating eye candy solutions for web and mobile apps. Contact me at john@mail.com",
    team:[{name:"Member 1"}, {name:"Member 2"}, {name:"Member 3"}], 
    socialLinks:{facebook:"", instagram:"", website:""} 
    }
  ];


  document.documentElement.style.setProperty('--numberFarmers', farmers.length);
  document.documentElement.style.setProperty('--numberProducts', products.length);
  

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" render={(props) => <MainPage {...props} farmers={farmers} products={products} numberItems={Object.keys(cartProducts).length} />} />
        <Route path="/farmerId" render={(props) => <FarmerProfile {...props} farmer={farmers[0]} products={products} />} />
        <Route path="/marketId" render={(props) => <MarketProfile {...props} market={markets[0]} farmers={farmers} products={products} />} />
        <Route path="/cartDialog" render={(props) => <CartDialog {...props} products={cartProducts} numberItems={Object.keys(cartProducts).length} setCartProducts={setCartProducts} />} />
        {/* here we have to fetch a product from the api based on its id (props.match.params.productId) */}
        <Route path="/productInfo/:productId" render={(props) => <ProductInfo {...props} product={products[props.match.params.productId-1]} numberItems={Object.keys(cartProducts).length} setCartProducts={setCartProducts} />} />
        <Route path="/productShop" render={(props) => <ProductShop {...props} products={products} numberItems={Object.keys(cartProducts).length} />} />
        <Route path="/farmerOverview" render={(props) => <FarmerOverview {...props} farmers={farmers} numberItems={Object.keys(cartProducts).length} />} />
        <Route path="/marketOverview" render={(props) => <MarketOverview {...props} markets={markets} numberItems={Object.keys(cartProducts).length} />} />
        <Route path="/marketOverviewMap" render={(props) => <MarketOverviewMap {...props} markets={markets} numberItems={Object.keys(cartProducts).length} />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;