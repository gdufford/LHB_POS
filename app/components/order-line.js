import Ember from 'ember';

export default Ember.Component.extend({
  //--put properties in here, make sure to add .property() to end of function
  productCategories: ["Jewelry","Henna","Shoes","Books","Clothing","Gifts"],
  calcTotal: function() {
    return Number(this.get('line').get('quantity')) * Number(this.get('line').get('cost'));
  }.property('line.cost','line.quantity')
}); 
