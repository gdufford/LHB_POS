//-- controllers/order.js --//

import Ember from 'ember';

//-- This line was 'Ember.Controller.extend' and was NOT working, the resulting orderline wasn't showing --//
export default Ember.ObjectController.extend({
  needs: "application",
  calcOrderTotal: function() {
    var orderTotal = 0;
    var allorderlines = this.get('orderlines');
    allorderlines.forEach(function (orderline) {
      orderTotal += orderline.get('total');
    });
    this.set('orderTotal', orderTotal);
  }.observes('orderlines.@each.total'),
  actions: {
    newOrderLine: function(){
      var orderLinesByID = this.model.get('orderlines').mapBy('id');
      var nextId = orderLinesByID.length === 0 ? 1 : Math.max(...orderLinesByID) + 1;

      var newOrderLine = this.store.createRecord('orderline',{id: nextId, quantity: 1, cost: 0, tax: 0, total: 0});

      this.store.find('order', 1).then(function(order) {
        newOrderLine.set('order', order);
      });
    }
  }
});
