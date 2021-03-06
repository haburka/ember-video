import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('contact');
  this.route('thread',{ path: '/thread/:thread_id' });
  this.route('mosaic',
    function() {
      this.route('mobile');
    }
  );
});

export default Router;
