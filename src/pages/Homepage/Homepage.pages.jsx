import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setSearchBarUnfocused } from '../../redux/searchBar/searchBar.actions';


const Homepage = ({ setUnfocused }) => {

    useEffect(() => {
        setUnfocused()
    }); 

    return (
        <div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setUnfocused: () => dispatch(setSearchBarUnfocused()),
})

export default connect(null, mapDispatchToProps)(Homepage);