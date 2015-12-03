//-- routes/order.js --//

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var newOrder = this.store.createRecord('order',{id: 1, orderNumber: '120315_111200'});
    newOrder.save();
  },
  model: function() {
    //return this.store.find('order',1);

    return this.store.findAll('order');
  }, //Model initally empty, order is new, will need to change if a lookup mode is established
  actions: {
    openModal: function() {
      //this.controllerFor(modalName).set('model',model);
      return this.render('modal', {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
