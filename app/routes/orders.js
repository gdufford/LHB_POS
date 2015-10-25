import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var newOrderLine = this.store.createRecord('orders',{id: 1, orderNumber: '102515_001122'});
    newOrderLine.save();
  },
  /*model: function() { return this.store.find('order',1); } //for FIXTURES*/
  model: function() {
    return this.store.find('orders',1);
  } //Model initally empty, order is new, will need to change if a lookup mode is established
});
