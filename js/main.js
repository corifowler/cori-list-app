import angular from 'angular';
import 'angular-ui-router';

import configFunc from './config';

import PageController from './controllers/pagecontroller';

angular
  .module('app', ['ui.router'])
  .config(configFunc)
  .controller('PageController', PageController);
