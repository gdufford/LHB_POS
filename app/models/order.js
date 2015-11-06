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

/*
order.reopenClass({ FIXTURES:[]});

order.reopenClass({
  FIXTURES: [
    {
      id: 1,
      orderNumber: '102315_0956',
      customerName: 'Garry Dufford',
      customerEmail: 'gdufford@gmail.com',
      zipCode: '80904',
      salesClerk: 'Frida',
      paymentType: 'Credit',
      orderTotal: 0,
      orderlines: [100,101,102]
    }
  ]
});
*/
export default order;
