import React from 'react';

import { useHistory } from 'react-router-dom';

import SearchIcon from '../Images/search.png'
import { connect } from 'react-redux';
import './SearchBar.css';

import { getPossibleStocks } from '../../redux/getPossibleStocks/getPossibleStocks.actions';

import { getSearchBarState, setSearchBarFocused } from '../../redux/searchBar/searchBar.actions';
import SearchBarDropDown from '../SearchBarDropDown/SearchBarDropDown';

const SearchBar = ({ searchBarState, setFocused, getSearchBarState, getPossibleStocks, possibleStocks }) => {

    const changeHandler = async (keyWord) => {
        await getSearchBarState(keyWord);
        getPossibleStocks(keyWord);
    }

    const history = useHistory();

    const keyDownHandler = (event) => {
        const reset = ''
        if (event.key === "Enter") {
            const keyword = possibleStocks[0].symbol
            if (keyword) {
                history.push(`/stock/${keyword}`)
            }
            getSearchBarState(reset);
            getPossibleStocks(reset);
        }
    }
    
    return (
        <section onFocus={setFocused} className='Search-Bar--Container'>
            <section className='Search-Bar--Main'>
                <input  onKeyDown={(event) => keyDownHandler(event)} onChange={(event) => changeHandler(event.target.value)} type='text' name='searchBar' id='searchBar' className='Search-Bar' value={searchBarState} placeholder="Which stock are you looking for? " />
                <img alt='search bar' src={SearchIcon} className='Search-Bar--Icon' />
            </section>
            <SearchBarDropDown />
        </section>
        
    )
}

const mapStateToProps = ({ searchBar: { searchBarState }, getPossibleStocks: { stocks } }) => ({
    searchBarState: searchBarState,
    possibleStocks: stocks
});

const mapDispatchToProps = dispatch => ({
    setFocused: () => dispatch(setSearchBarFocused()),
    getSearchBarState: keyWord => dispatch(getSearchBarState(keyWord)),
    getPossibleStocks: keyWord => dispatch(getPossibleStocks(keyWord)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
