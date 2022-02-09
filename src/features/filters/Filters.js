import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { fetchFilters, setFilter } from './filtersSlice';

import './filters.sass';

const Filters = ({postList}) => {
    const dispatch = useDispatch();
    const {filters} = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(fetchFilters());
        // eslint-disable-next-line
    }, []);

    const renderFilters = (arr) => {
        if(arr.length === 0) {
            return <h5>Фильтры не найдены</h5>
        }

        return arr.map(({name, label}) => {
            const linkClasses = classNames('filter__link', {'filter__link_post-list' : postList});

            return(
                <li 
                    className="filter" 
                    key={name} 
                    id={name}
                    onClick={() => dispatch(setFilter(name))}>
                    <a href="!#" className={linkClasses}>{label}</a>
                </li>
            )
        })
    }

    const links = renderFilters(filters);

    const classes = postList ? "filters filters_post-list" : "filters"

    return(
        <ul className={classes}>
            {links}
        </ul>
    )
}

export default Filters;