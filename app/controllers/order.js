import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: "application",

  actions: {
    newOrderLine: function(){
      var orderLinesByID = this.model.get('orderlines').mapBy('id');
      var nextId = orderLinesByID.length === 0 ? 1 : Math.max(...orderLinesByID) + 1;

      var newOrderLine = this.store.createRecord('orderline',{id: nextId, quantity: 1, cost: 0, tax: 0, total: 0});
      newOrderLine.save();

      this.store.find('order', 1).then(function(order) {
        newOrderLine.set('order', order);
        //order.save();
      });
    }
  }
});
