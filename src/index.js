import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';


const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp />, divRoot);

// ReactDOM.render(<PrimeraApp saludo='Hola, soy Goku'/>, divRoot);
