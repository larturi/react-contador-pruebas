import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value = 10 } ) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleRestar = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
       <Fragment>
           <h1>CounterApp: </h1>
           <h2>{ counter }</h2>

           <button onClick={ handleRestar }>-1</button>
           <button onClick={ handleReset }>Reset</button>
           <button onClick={ handleAdd }>+1</button>
       </Fragment>
    );
};

CounterApp.propTypes = {
    saludo: PropTypes.number
}

export default CounterApp;