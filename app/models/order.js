//-- models/order --//

import DS from 'ember-data';

var order = DS.Model.extend({
  orderNumber: DS.attr('string'),
  customerName: DS.attr('string'),
  customerEmail: DS.attr('string'),
  zipCode: DS.attr('string'),
  salesClerk: DS.attr('string'),
  paymentType: DS.attr('string'),
  orderTotal: DS.attr('number'),
  orderlines: DS.hasMany('orderline')
});

export default order;
