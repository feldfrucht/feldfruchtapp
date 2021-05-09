import React from 'react';

import Slider from '../Buttons/Slider';
import WeekdayBtn from '../Filters/WeekdayBtn';
import SearchBar from '../Search/SearchBar';
import MoreFiltersBtn from '../Buttons/MoreFiltersBtn';
import StandardFilter from '../Filters/StandardFilter';


const Filters = ({filterVisible, setFilterVisible}) => {

    return(
        <section className="farmerOverview-filters">
            <SearchBar text="Erzeuger suchen" />
            <div className="farmerOverview-visibleFilters">
                < StandardFilter type="location" placeholderText="Alle Orte" color="var(--DarkBlue)" background="var(--LightGreen)" width="80vw" />
            </div>
            <div className={(filterVisible)?"farmerOverview-inVisibleFilters":"hide"}>
                <StandardFilter placeholderText = "Alle Märkte" color="var(--DarkBlue)" background="var(--LightGreen)" width="80vw" />

                <Slider min="1" max="50" value1={12} value2={30} unit="€" title="Preis"></Slider>
                <Slider min="1" max="100" value1={10} value2={20} unit="kg" title="Menge"></Slider>
                
                <div className="farmerOverview-filtersWeekdays">
                    <WeekdayBtn dayLetter="M" />
                    <WeekdayBtn dayLetter="D" />
                    <WeekdayBtn dayLetter="M" />
                    <WeekdayBtn dayLetter="D" />
                    <WeekdayBtn dayLetter="F" />
                    <WeekdayBtn dayLetter="S" />
                    <WeekdayBtn dayLetter="S" />
                </div>
            </div>
            < MoreFiltersBtn filterVisible={filterVisible} setFilterVisible={setFilterVisible} />
        </section>
    );
};

export default Filters;