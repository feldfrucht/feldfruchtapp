import React from 'react';
// get our fontawesome imports
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import WeekdayBtn from '../Filters/WeekdayBtn';
import MoreFiltersBtn from '../Buttons/MoreFiltersBtn';
import DialogClose from '../Buttons/DialogClose';
import StandardFilter from '../Filters/StandardFilter';

const FiltersMap = ({hideAll, setHideAll, filterVisible, setFilterVisible}) => {


    return(
        <section className="marketOverviewMap-filters">
            <div className={(hideAll)?"hide":"marketOverviewMap-initiallyVisible"}>
                <div className="marketOverviewMap-visibleFilters">
                    < StandardFilter width="80vw" background="var(--DarkBlue)" color="var(--LightGreen)" type="location" placeholderText="Alle Orte"/>
                </div>
                <div className={(filterVisible)?"marketOverviewMap-inVisibleFilters":"hide"}>
                    < StandardFilter placeholderText="Alle Erzeuger"  background="var(--DarkBlue)" color="var(--LightGreen)" width="80vw"/>
                    
                    <div className="marketOverview-filtersWeekdays">
                        <WeekdayBtn dayLetter="M" theme="dark" />
                        <WeekdayBtn dayLetter="D" theme="dark" />
                        <WeekdayBtn dayLetter="M" theme="dark" />
                        <WeekdayBtn dayLetter="D" theme="dark" />
                        <WeekdayBtn dayLetter="F" theme="dark" />
                        <WeekdayBtn dayLetter="S" theme="dark" />
                        <WeekdayBtn dayLetter="S" theme="dark" />
                    </div>
                    <button className="marketOverviewMap-filtersCollapse" onClick={()=>{setFilterVisible(false)}}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
                <div className={(filterVisible)?"hide":"marketOverviewMap-moreFiltersAndClose"}>
                    < MoreFiltersBtn filterVisible={filterVisible} setFilterVisible={setFilterVisible} />
                    < DialogClose action={()=>{setHideAll(true)}} />
                </div>
            </div>
            <span className={(hideAll)?"farmerOverview-dragBtn":"hide"} onClick={() => setHideAll(false)}></span>
        </section>
    );
};

export default FiltersMap;