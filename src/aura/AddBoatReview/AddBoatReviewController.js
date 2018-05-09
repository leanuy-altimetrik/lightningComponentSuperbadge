({
	onSave: function (component, event, helper) {
        component.find("service").saveRecord(function (saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                var resultsToast = $A.get("e.force:showToast");
                if (resultsToast) {
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    resultsToast.fire();
                } else {
                    alert('New record saved successfully');
                }
            }
        });
        component.getEvent("BoatReviewAdded").fire();
        helper.onInit(component, event, helper);
    },
    onRecordUpdated: function (component, event, helper) {
        var eventParams = event.getParams();
        var resultsToast = $A.get("e.force:showToast");
        if (eventParams.changeType === "CHANGED") {
            var changedFields = eventParams.changedFields;
            if (resultsToast) {
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record was updated."
                });
                resultsToast.fire();
            } else {
                console.log('Fields that are changed: ' + JSON.stringify(changedFields));
            }
            // } else if(eventParams.changeType === "LOADED") {
            //     console.log("Record is loaded successfully.");
        } else if (eventParams.changeType === "REMOVED") {
            if (resultsToast) {
                resultsToast.setParams({
                    "title": "Deleted",
                    "message": "The record was deleted."
                });
                resultsToast.fire();
            } else {
                console.log('The record was deleted');
            }
        } else if (eventParams.changeType === "ERROR") {
            console.log('Error: ' + component.get("v.recordError"));
        }
    },
    doInit: function (component, event, helper) {
        helper.onInit(component);
    },
	ratingValue : function(component, event, helper){
		var rating = component.get("v.boatReview").Rating__c;
		console.log("Rating:::: "+rating);
	}
})