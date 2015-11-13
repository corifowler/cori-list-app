import angular from 'angular';
import 'angular-ui-router';

import configFunc from './config';

import HomeController from './controllers/homecontroller';
import AddController from './controllers/addcontroller';
import SingleController from './controllers/singlecontroller';
import EditController from './controllers/editcontroller';
import EditListController from './controllers/editlistcontroller';
import CommentController from './controllers/commentcontroller';

import ListService from './services/listservice';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'mS5BjTbDocbwextTJPxtHggVlRS5iXntkLRUjHL5',
        'X-Parse-REST-API-Key': 'G9VfYonn5rUNIHw7JRGtK6OpEApviiRb83Vqi15z'
      }
    }
  })
  .config(configFunc)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('SingleController', SingleController)
  .controller('EditController', EditController)
  .controller('EditListController', EditListController)
  .controller('CommentController', CommentController)
  .service('ListService', ListService);
