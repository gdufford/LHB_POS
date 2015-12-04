import Ember from 'ember';

export default Ember.Controller.extend({
	unboundCustomerEmail: function() { 
		//start with a copy of the customer email, but it can be changed if needed and not affect the other
		return this.model.get('customerEmail');
	}.property(),
	emailReceipt: false,
	disabledEmail: true,
	watchEmailReceipt: function(){
		if (this.get('emailReceipt'))
			this.set('disabledEmail',false);
		else
			this.set('disabledEmail',true);
	}.observes('emailReceipt'),
	
	actions: {
		showAlert: function() { debugger; alert('here'); },
		pingMe: function() { alert('ping!');} 
	}
});
