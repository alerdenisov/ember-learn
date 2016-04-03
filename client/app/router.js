import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('revisions', { path: '/'}, function() {
    this.route('features', function() {
      this.route('feature', { path: ':id'}, function() {
        
      });
    }); 
  });

  this.route('tasks');
});

export default Router;