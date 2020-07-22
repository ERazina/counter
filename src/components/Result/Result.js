import React from 'react';
import { useSelector } from 'react-redux';

function Result () {

    const result = useSelector(state => state.counter); //get state from store

    return (
        <div className="result">
            {result}
        </div>
    );
}

export default Result;