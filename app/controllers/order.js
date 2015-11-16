//-- controllers/order.js --//

import Ember from 'ember';

//-- This line was 'Ember.Controller.extend' and was NOT working, the resulting orderline wasn't showing --//
export default Ember.ObjectController.extend({
  needs: "application",
  calcOrderTotal: function() {
    var orderTotal = 0;
    var allorderlines = this.get('orderlines');
    if (allorderlines != null) {
      allorderlines.forEach(function (orderline) {
        orderTotal += orderline.get('total');
      });
      this.set('orderTotal', Math.round(orderTotal * 100) / 100);
      this.get('model').save();
    }
  }.observes('orderlines.@each.total'),
  newOrderNumber: function() {
    var today = new Date();
    var day = ("" + today.getDay()).length === 1 ? "0" + today.getDay() : "" + today.getDay();
    var month = ("" + today.getMonth()).length === 1 ? "0" + today.getMonth() : "" + today.getMonth();
    var hour = ("" + today.getHours()).length === 1 ? "0" + today.getHours() : "" + today.getHours();
    var minutes = ("" + today.getMinutes()).length === 1 ? "0" + today.getMinutes() : "" + today.getMinutes();
    var seconds = ("" + today.getSeconds()).length === 1 ? "0" + today.getSeconds() : "" + today.getSeconds();
    return day + month + today.getYear() + "_" + hour + minutes + seconds;
  },
  actions: {
    newOrder: function(){
      var ordersById = this.model.get('orders');
      var nextId = 1;
      if (ordersById !== undefined){
        ordersById = ordersById.mapBy('id');
        nextId = Math.max(...ordersById) + 1;
      }

      var newOrderNumber = this.get('newOrderNumber').call(this);
      var newOrder = this.store.createRecord('order',{id: nextId, orderNumber: newOrderNumber});
      newOrder.save();
      this.model.set('orders', newOrder);

      var orderLinesByID = this.model.get('orderlines');
      var nextOrderlineId = 1;
      if (orderLinesByID !== undefined) {
        orderLinesByID = orderLinesByID.mapBy('id');
        nextOrderlineId = Math.max(...orderLinesByID) + 1;
      }


      var newOrderLine = this.store.createRecord('orderline',{id: nextOrderlineId, quantity: 1, cost: 0, tax: 0, total: 0});
      newOrderLine.save();
    },
    newOrderLine: function(){
      var orderLinesByID = this.model.get('orderlines');
      var nextId = 1;
      if (orderLinesByID !== undefined) {
          orderLinesByID = orderLinesByID.mapBy('id');
          nextId = orderLinesByID.length === 0 ? 1 : Math.max(...orderLinesByID) + 1;
      }

      var newOrderLine = this.store.createRecord('orderline',{id: nextId, quantity: 1, cost: 0, tax: 0, total: 0});
      newOrderLine.save();

      this.store.find('order', 1).then(function(order) {
        newOrderLine.set('order', order);
        order.save();
      });
    }
  }
});
