import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
// import Home from './common/home.component.jsx'
// import About from './common/about.component.jsx'
// import Car from './car/car.component.jsx'
// import CarDetail from './car/car-detail.component.jsx'

import Signage from './components/signage'

const data = [];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            {/* <Route path="/" component={Home}/> */}
            <Route path="/" component={Signage} />
            {/* <Route path="/:vehicle_id" component={SignageDetail} /> */}
            {/* <Route path="/cars" component={Car} data={data}/> */}
            {/* Parameter route*/}
            {/* <Route path="/cars/:id" component={CarDetail} data={data}/> */}
            {/* <Route path="/about" component={About}/> */}
        </Route>
    </Router>,
    document.getElementById('routes')
);
