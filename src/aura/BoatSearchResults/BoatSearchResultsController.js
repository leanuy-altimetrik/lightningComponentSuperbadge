({
	doInit : function(component, event, helper) {
		var type = component.get("v.boatTypeId");
		helper.onSearch(component, type);
	}
})
