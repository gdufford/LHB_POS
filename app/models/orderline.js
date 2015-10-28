import DS from 'ember-data';

var orderline = DS.Model.extend({
  quantity: DS.attr('number'),
  category: DS.attr('string'),
  cost: DS.attr('number'),
  tax: DS.attr('number'),
  total: DS.attr('number'),
  order: DS.belongsTo('order',{inverse: orderline})
});

orderline.reopenClass({ FIXTURES:[]});
/*
orderline.reopenClass({
  FIXTURES: [
    { id: 100, quantity: 1, category: 'Jewelry', cost: 1, tax: .093, total: 1.093},
    { id: 101, quantity: 1, category: 'Henna', cost: 20, tax: 0, total: 20},
    { id: 102, quantity: 10, category: 'Books', cost: 10, tax: .93, total: 10.93}
  ]
});
*/

export default orderline;
