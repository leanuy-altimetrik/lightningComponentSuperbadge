({
	onSearch: function (component,boatTypeId) {
	   var action = component.get("c.getBoats");
	   action.setParams({'boatTypeId':boatTypeId});
	   // i get the boats filtered
	   action.setCallback(this, function (response) {
		   var state = response.getState();
		   if (state==='SUCCESS'){
			   var list = response.getReturnValue();
			   component.set("v.boats", list);
		   }
	   })
	   $A.enqueueAction(action);
   }
})
