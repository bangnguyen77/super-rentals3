import Ember from 'ember';

export default Ember.Component.extend({
  isNewCityShowing: false,
  actions: {
    debug() {
      debugger;
    },
    save1() {
      var params = {
        name: this.get('name'),
        country: this.get('country'),
      };
      this.sendAction('save2', params);
    },
    cityShow: function() {
      debugger;
      this.set('isNewCityShowing', true);
    },
    cityHide: function() {
      this.set('isNewCityShowing', false);
    }
  }
});
