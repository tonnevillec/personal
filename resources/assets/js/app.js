global.jQuery = require('jquery');
let $ = global.jQuery;
window.$ = $;

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./bootstrap');
// require('wowjs');

require('./elements/jquery.mixitup');
// require('./elements/jquery.counterup.min');
// require('./elements/waypoints.min');
require('./elements/jquery.nav');
require('./elements/jquery.easing.min');
require('./elements/nivo-lightbox');
require('./elements/jquery.slicknav');

require('./elements/main');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
