({
	onBoatSelected: function (component, event, helper) {
        var boat = event.getParam("boat");
		var boatId = boat.Id;
		component.set("v.boat",boat);
        component.set("v.id",boatId);
        var service = component.find("service");
        service.reloadRecord();
		var boatReviewsComp =component.find("boatReviews");
        if(boatReviewsComp){
            boatReviewsComp.refresh();
        }
    },
    onRecordUpdated: function (component, event, helper) {
        var boatReviewsComp =component.find("boatReviews");
        if(boatReviewsComp){
            boatReviewsComp.refresh();
        }
    },
    onBoatReviewAdded: function (component, event, helper) {
        component.set("v.selectedTabId","boatreviewtab");
        var boatReviewsComp =component.find("boatReviews");
        if(boatReviewsComp){
            boatReviewsComp.refresh();
        }
    },
})