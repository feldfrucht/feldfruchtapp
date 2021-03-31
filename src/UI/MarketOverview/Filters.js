import React from 'react';
import WeekdayBtn from '../Filters/WeekdayBtn';
import SearchBar from '../Search/SearchBar';
import LocationFilter from '../Filters/LocationFilter';
import MoreFiltersBtn from '../Buttons/MoreFiltersBtn';
import RoundMap from '../Buttons/RoundMap';

const Filters = ({filterVisible, setFilterVisible}) => {


    return(
        <section className="marketOverview-filters">
            <SearchBar text="Märkte suchen"/>
            <div className="marketOverview-visibleFilters">
                < LocationFilter width="60vw"/>
                < RoundMap text="Auf Karte anzeigen" image={require('../../css/images/map.PNG')} link="/marketOverviewMap" />
            </div>
            <div className={(filterVisible)?"marketOverview-inVisibleFilters":"hide"}>
                <input className="marketOverview-marketFilter" type="text" placeholder="Alle Erzeuger"></input>

                <div className="marketOverview-filtersWeekdays">
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