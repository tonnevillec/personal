let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copyDirectory('resources/assets/img', 'public/img')
    .copyDirectory('resources/assets/fonts', 'public/fonts')
    .copyDirectory('resources/assets/pdf', 'public/pdf')
    .copyDirectory('resources/assets/js/components', 'public/js/components')
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .autoload({
        jquery: ['$', 'jQuery', 'jquery', 'window.jQuery'],
        'popper.js/dist/umd/popper.js': ['Popper']
    })
    .extract(['jquery', 'popper.js', 'bootstrap'])
    .version();
