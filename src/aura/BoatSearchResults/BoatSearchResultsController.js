({
	doInit : function(component, event, helper) {
		var type = "";
		helper.onSearch(component, type);
	},
	doSearch: function (component, event, helper) {
        var params = event.getParam('arguments');
        if (params){
        var boatTypeId = params.boatTypeId;
            helper.onSearch(component,boatTypeId);
        }
    },
	onBoatSelect: function (component, event, helper) {
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId",boatId);
    }
})
