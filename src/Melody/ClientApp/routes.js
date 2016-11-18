"use strict";
var home_1 = require('./components/home/home');
var fetch_data_1 = require('./components/fetch-data/fetch-data');
var counter_1 = require('./components/counter/counter');
exports.routes = [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: home_1.Home },
    { path: 'counter', component: counter_1.Counter },
    { path: 'fetch-data', component: fetch_data_1.FetchData },
    { path: '**', redirectTo: 'home' }
];
//# sourceMappingURL=routes.js.map