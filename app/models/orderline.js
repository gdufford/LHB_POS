//-- model/orderline.js --//

import DS from 'ember-data';
//import currency from 'currency';

var orderline = DS.Model.extend({
  quantity: DS.attr('number'),
  category: DS.attr('string'),
  cost: DS.attr('number'),
  tax: DS.attr('number'),
  total: DS.attr('number'),
  order: DS.belongsTo('order')
});

export default orderline;
