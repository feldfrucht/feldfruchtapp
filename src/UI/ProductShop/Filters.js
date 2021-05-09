import React from 'react';
import Filter from './Filter';
import Slider from '../Buttons/Slider';
import WeekdayBtn from '../Filters/WeekdayBtn';
import SearchBar from '../Search/SearchBar';
import MoreFiltersBtn from '../Buttons/MoreFiltersBtn';
import StandardFilter from '../Filters/StandardFilter';
import { Switch } from '@material-ui/core';

const Filters = ({filterVisible, setFilterVisible}) => {

    return(
        <section className="productShop-filters">
            <SearchBar text="Produkte suchen" />
            <div className="productShop-visibleFilters">
                < Filter name="Gemüse" image={require('../../css/images/assortment-cabbage-cherry-tomatoes-1458694.jpg')} />
                < Filter name="Obst" image={require('../../css/images/berries-blackberries-blueberries-87818.jpg')} />
                < Filter name="Fleisch" image={require('../../css/images/breads-cherry-tomatoes-chopping-board-1927383.jpg')} />
                < Filter name="Sonstiges" image={require('../../css/images/assorted-assortment-blur-277276.jpg')} />
            </div>
            <div className={(filterVisible)?"productShop-inVisibleFilters":"hide"}>
                < StandardFilter placeholderText = "Alle Erzeuger" color="var(--DarkBlue)" background="var(--LightGreen)" width="80vw"/>
                < StandardFilter placeholderText = "Alle Orte" color="var(--DarkBlue)" background="var(--LightGreen)" width="80vw"/>
                < StandardFilter placeholderText = "Alle Märkte" color="var(--DarkBlue)" background="var(--LightGreen)" width="80vw"/>
                
                <Slider min="1" max="50" value1={12} value2={30} unit="€" title="Preis"></Slider>
                <Slider min="1" max="100" value1={10} value2={20} unit="kg" title="Menge"></Slider>
                
                <div className="productShop-filtersWeekdays">
                    <WeekdayBtn dayLetter="M" />
                    <WeekdayBtn dayLetter="D" />
                    <WeekdayBtn dayLetter="M" />
                    <WeekdayBtn dayLetter="D" />
                    <WeekdayBtn dayLetter="F" />
                    <WeekdayBtn dayLetter="S" />
                    <WeekdayBtn dayLetter="S" />
                </div>
                <div className="productShop-toggleSwitch">
                    <p className="productShop-toggleSwitchText">Nur verfügbare Produkte anzeigen</p>
                    <Switch
                        checked={false}
                        //onChange={handleChange}
                    />
                </div>
            </div>
            < MoreFiltersBtn filterVisible={filterVisible} setFilterVisible={setFilterVisible} />
        </section>
    );
};

export default Filters;