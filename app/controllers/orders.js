import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: "application",

  actions: {
    newOrderLine: function(){
      var newOrderLine = this.store.createRecord('orderline',{id: 103, quantity: 1, cost: 0, tax: 0, total: 0});
      newOrderLine.save();

      this.store.find('orders', 1).then(function(order) {
        newOrderLine.set('order', order);
      });


      var order = this.store.find('orders', 1);
      var email = order.get('customerEmail');
      var orderlines = order.get('orderlines');//.pushObject(this.store.find('orderlines', 103));
      var lastorderline = this.store.find('orderline',103);
      var orderitems = order.get('orderlines');
      //order.get('orderlines').pushObject(lastorderline);
      //debugger;
      //alert(orderlines.length);
      //order.save();
      //order.orderlines.add(103);
      //order.save();
      //this.store.save();

      //var orderlines = this.get('model');
      //orderlines.createRecord();
      //orderlines.save();
      //this.get('model').createRecord('orderline',{ quantity: 1, cost: 0, tax: 0, total: 0}).save();
    }
  }
});
