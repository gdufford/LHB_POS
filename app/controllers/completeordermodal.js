import Ember from 'ember';

export default Ember.Controller.extend({
	emailReceipt: false,
	disabledEmail: true,
	couponSelections: ['Free $5 Henna','BOGO','15% Off next purchase'],
	//unboundCustomerEmail: Ember.computed.oneWay('customerEmail'),
	//Trying one-way binding so that it can be changed without bouncing back to customerEmail
	//unboundCustomerEmail: Ember.computed.alias(')
	unboundCustomerEmail: function() { 
		//start with a copy of the customer email, but it can be changed if needed and not affect the other
		//debugger;
		return this.model.get('customerEmail');
	}.property(),
	watchEmailReceipt: function(){
		if (this.get('emailReceipt')) {
			this.set('disabledEmail',false);
		}
		else {
			this.set('disabledEmail',true);
		}
	}.observes('emailReceipt'),
	
	actions: {
		showAlert: function() { alert('here'); },
		pingMe: function() { alert('ping!');} 
	}
});
