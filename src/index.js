import './app/vendors/timetable';
import './app/vendors/timetablejs.css';

import angular from 'angular';

import 'angular-material/angular-material.css';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';
import 'angular-material-icons';

import {dashboard} from './app/features/dashboard/dashboard.component';
import {schedule} from './app/features/schedule/schedule.component';
import {login} from './app/features/login/login.component';
import {signIn} from './app/features/signIn/signIn.component';
import sysAPI from './app/core/api';


import 'angular-ui-router';
import routesConfig from './routes';

import './index.styl';

export const app = 'app';

angular
  .module(app, [
    'ui.router',
    'ngMaterial',
    'ngMdIcons'
  ])
  .config(routesConfig)
  .service('sysAPI', sysAPI)
  .component('sysLogin', login)
  .component('sysSignIn', signIn)
  .component('sysDashboard', dashboard)
  .component('sysSchedule', schedule);
