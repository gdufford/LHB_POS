import Ember from 'ember';

export default Ember.Component.extend({
  //--put properties in here, make sure to add .property() to end of function
  productCategories: ["Jewelry","Henna","Shoes","Books","Clothing","Gifts"],
  calcLineTotal: function() {
    var lineTotal = Number(this.get('line').get('quantity')) * Number(this.get('line').get('cost'));
    this.get('line').set('total', lineTotal);
  }.observes('line.cost','line.quantity')
});
