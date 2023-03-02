const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);


mix.copyDirectory('resources/assets/images', 'public/static/images');


mix.styles("resources/assets/css/bootstrap.css", "public/static/css/bootstrap.css").sourceMaps()
    .styles("resources/assets/css/responsive.css", "public/static/css/responsive.css").sourceMaps()
    .styles("resources/assets/css/style.css", "public/static/css/style.css").sourceMaps();

mix.js("resources/assets/js/jquery-3.4.1.min.js", "public/static/js/jquery-3.4.1.min.js").sourceMaps()
    .js("resources/assets/js/bootstrap.js","public/static/js/bootstrap.js").sourceMaps()
    .js("resources/assets/js/custom.js","public/static/js/custom.js").sourceMaps();

mix.version();
