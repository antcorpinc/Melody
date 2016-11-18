"use strict";
require('angular2-universal/polyfills');
var ngCore = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var ngUniversal = require('angular2-universal');
var common_2 = require('angular2-universal/common');
var app_1 = require('./components/app/app');
var routes_1 = require('./routes');
var bootloader = ngUniversal.bootloader({
    async: true,
    preboot: false,
    platformProviders: [
        ngCore.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
    ]
});
function default_1(params) {
    var config = {
        directives: [app_1.App],
        providers: [
            ngCore.provide(common_2.ORIGIN_URL, { useValue: params.origin }),
            ngCore.provide(common_2.REQUEST_URL, { useValue: params.url })
        ].concat(ngUniversal.NODE_HTTP_PROVIDERS, [
            router_1.provideRouter(routes_1.routes)
        ], ngUniversal.NODE_LOCATION_PROVIDERS),
        // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
        // Waiting on https://github.com/angular/universal/issues/347
        template: '<!DOCTYPE html>\n<html><head></head><body><app></app></body></html>'
    };
    return bootloader.serializeApplication(config).then(function (html) {
        return { html: html };
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=boot-server.js.map