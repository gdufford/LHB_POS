import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var newOrder = this.store.createRecord('order',{id: 1, orderNumber: '102515_001122'});
    newOrder.save();
  },
  model: function() {
    return this.store.find('order',1);
  } //Model initally empty, order is new, will need to change if a lookup mode is established
});
