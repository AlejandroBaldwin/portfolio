import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SearchBarDropDown.css';

import { getPossibleStocks } from '../../redux/getPossibleStocks/getPossibleStocks.actions';
import { getSearchBarState} from '../../redux/searchBar/searchBar.actions';

const SearchBarDropDown = ({  stocks, isSearchBarPending, searchBarState, isFocused, getSearchBarState, getPossibleStocks }) => {

    const barStateHandler = () => {
        getSearchBarState('');
        getPossibleStocks('');
    }

    const list = stocks.map(stock => {
        return (
            <Link onClick={barStateHandler} key={stock.name} to={`/stock/${stock.symbol}`} >
                <li className='Search-Bar--Dropdown--Item'>
                    <p className='Search-Bar--Dropdown--Company Name'>
                        {stock.name}
                    </p>
                    <p className='Search-Bar--Dropdown--Company Ticket'>
                        {stock.symbol}
                    </p>
                </li>
            </Link>
            
        );
    });

    return isFocused ? (
        <ul className='Search-Bar--Dropdown--List'>
            {
                list.length > 0 && searchBarState !== '' ?
                list : searchBarState !== '' ?
                isSearchBarPending ?
                <li className='Search-Bar--Dropdown--Item'>
                    <p className='Search-Bar--Dropdown--Company Name'>
                        Loading...
                    </p>
                </li> : <li className='Search-Bar--Dropdown--Item'>
                    <p className='Search-Bar--Dropdown--Company Name'>
                        No Results...
                    </p>
                </li> : null
                }
        </ul>
    ) : null;
};

const mapStateToProps = ({ getPossibleStocks: { stocks, isSearchBarPending }, searchBar: { isFocused, searchBarState } }) => ({
    stocks,
    isFocused,
    searchBarState,
    isSearchBarPending
});

const mapDispatchToProps = dispatch => ({
    getPossibleStocks: keyWord => dispatch(getPossibleStocks(keyWord)),
    getSearchBarState: keyWord => dispatch(getSearchBarState(keyWord))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarDropDown);