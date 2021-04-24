import { useEffect } from 'react';
import React from 'react';
import MarketInfo from '../MarketOverview/MarketInfo';

import 'ol/ol.css';
import '../../css/map.css';
import {Feature} from 'ol';
import {Vector} from 'ol/source';
import {Style, Text, Fill} from 'ol/style';
import {Point} from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import Tile from 'ol/layer/Tile';
import {OSM} from 'ol/source';
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';
import {click} from 'ol/events/condition';
import Select from 'ol/interaction/Select';

import "@fortawesome/fontawesome-free/css/all.css"

const OlMap = ({markets, mapContainer, showMarketInfo , setShowMarketInfo, setMarketInfo, marketInfo, setHideFilter}) => {

  

  useEffect(() => {

    const iconStyle = new Style({
      text: new Text({
        text: '\uf041',
        font: '900 20px "Font Awesome 5 Free"',
        textBaseline: 'bottom',
        fill: new Fill({
          color: 'hsl(192, 45%, 23%)',
        })
      })
    });
  
    const selectedFeatureStyle = new Style({
      text: new Text({
        text: '\uf041',
        font: '900 20px "Font Awesome 5 Free"',
        textBaseline: 'bottom',
        fill: new Fill({
          color: '#50858b',
        })
      })
    });

    const addMarker = (market, style, markerList) =>{
      var marker = new Feature({
        geometry: new Point(fromLonLat([market.marker.lon, market.marker.lat])),
        image: market.imageHeroUrl, 
        name: market.name, 
        street: market.street, 
        city: market.city, 
        times: market.marketTimes
      }); 
  
      marker.setStyle(style);
      markerList.push(marker);
    };
  
    const onFeatureSelect = (feature) => {
      let featureProps = feature.getProperties();
      
      setMarketInfo({
        image: featureProps.image, 
        name: featureProps.name, 
        street: featureProps.street, 
        city: featureProps.city, 
        times: featureProps.times
      });
      setShowMarketInfo(true);
      setHideFilter(true);
  
      feature.setStyle(selectedFeatureStyle);
    };
  
    let markers = [];
    markets.forEach((market, i) => {addMarker(market, iconStyle, markers)})
  
    let source = new Vector({
      features: markers
    });
    
    let select = new Select({
        condition: click
    });

    const onClickFunction = (event) => {
      if (event.target === document.getElementById("marketOverviewMap-infoBox")) {
        setShowMarketInfo(false);
      };
    };
    
      window.addEventListener("click", onClickFunction);

      let map = new Map({
        layers:[
          new Tile({source: new OSM()}),
          new VectorLayer({source: source})
        ],
        target: mapContainer,
        view: new View({
          center: fromLonLat([10, 50]),
          zoom: 6
        })
      });

      map.addInteraction(select);
      select.on('select', function(e) {
        let nbFeatures = e.target.getFeatures().getProperties().length;
        if (nbFeatures > 1){
          e.target.getFeatures().removeAt(0);
          let selectedFeature = e.selected[0];
          onFeatureSelect(selectedFeature);
        } else if (nbFeatures === 1){
          let selectedFeature = e.selected[0];
          onFeatureSelect(selectedFeature);
        }
      });
    

    return () => {
        setShowMarketInfo(false);
        setMarketInfo({
          image:"", name:"", street:"", city:"", times:[
              {day:"", begin:"", end:""}
          ]
        });
        setHideFilter(false);
        window.removeEventListener('click', onClickFunction);
      }

  },[markets, mapContainer, setShowMarketInfo, setMarketInfo, setHideFilter]);

  //return (null);
  return (
    < MarketInfo id = "marketOverviewMap-infoBox" showMarketInfo={showMarketInfo} setShowMarketInfo={setShowMarketInfo} market={marketInfo} />
    
  );
};

export default OlMap;