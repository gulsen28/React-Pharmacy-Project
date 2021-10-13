import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pharmacy from './Pharmacy';
import reportWebVitals from './reportWebVitals';

const router=
<Router>
<Route path="/" exact component={Pharmacy}></Route>
</Router>

ReactDOM.render(router,document.getElementById('root'));

reportWebVitals();
