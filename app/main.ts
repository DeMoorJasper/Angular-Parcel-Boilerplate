// Load all the required libraries
import '../node_modules/angular2/bundles/angular2-polyfills.js';
import '../node_modules/systemjs/dist/system.src.js';
import '../node_modules/rxjs/bundles/Rx.js';
import '../node_modules/angular2/bundles/angular2.dev.js';
import '../node_modules/es6-shim/es6-shim.min.js';

// Bootstrap the application
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

bootstrap(AppComponent);