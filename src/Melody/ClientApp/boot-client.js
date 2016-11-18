"use strict";
require('zone.js');
require('bootstrap');
require('reflect-metadata');
require('./styles/site.css');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_1 = require('./components/app/app');
var routes_1 = require('./routes');
platform_browser_dynamic_1.bootstrap(app_1.App, http_1.HTTP_PROVIDERS.concat([
    common_1.FormBuilder,
    router_1.provideRouter(routes_1.routes)
]));
if (module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=boot-client.js.map