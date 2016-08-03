import angular from 'angular';
import 'angular-ui-router';

//import SERVER
import { SERVER } from './server';

//import constants
import { headers } from './credentials';

//import services
import { DataService } from './data.service';

//import Controllers
import { HomeController } from './controllers/home.controller';


angular
	.module('app', [])
	.constant('SERVER', SERVER)
	.constant('headers', headers)
	.service('DataService', DataService)
	.controller('HomeController', HomeController)
	;