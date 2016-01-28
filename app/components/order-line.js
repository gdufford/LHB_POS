import Ember from 'ember';

export default Ember.Component.extend({
  //--put properties in here, make sure to add .property() to end of function
  productCategories: ["Jewelry","Henna","Shoes","Books","Clothing","Gifts"],
  multipleLines: null,
  calcLineTotal: function() {
    var lineTotal = Number(this.get('line').get('quantity')) * Number(this.get('line').get('cost'));
    var taxRate = this.get('line').get('category') === 'Henna' ? 0 : 0.093;

    var taxAmount = Math.round((lineTotal * taxRate) * 100) / 100;
    this.get('line').set('tax',taxAmount);

    this.get('line').set('total', lineTotal + taxAmount);
    this.get('line').save();
  }.observes('line.cost','line.quantity','line.category'),
  actions: {
	removeOrderLine: function(param) {  
		this.get('targetObject.store').find('orderline',param).then( function(foundOrderLine) { foundOrderLine.destroyRecord();});
	}
  }
});
