({
	doInit: function (component, event, helper) {
	   var createRecordEvent = $A.get("e.force:createRecord");
	   //$A.get This sintax is to get an instance of an application event
	   if (createRecordEvent) {
	   //if createRecordEvent exists or != null I set createRecordIsSupported attribute in true
		   component.set("v.createRecordIsSupported", true);
	   } else {
		   console.log("No anda esta puta");
	   }
	   var action = component.get("c.getBoatTypes");
	   //That get all the boats types to list into the drop down list
	   action.setCallback(this, function (response) {
		   var state = response.getState();
		   if (state === 'SUCCESS') {
			   //if exists some boatType
			   var list = response.getReturnValue();
			   //we charged the boatTypes attribute with this values
			   component.set("v.boatTypes", list);
		   }
	   })
	   $A.enqueueAction(action);
	   //execute the action
   },
   newBoat: function (component, event, helper) {
	   var createRecordEvent = $A.get("e.force:createRecord");
	   //$A.get This sintax is to get an instance of an application event
	   var selectedBoatTypeId = component.get("v.boatTypeId");
	   createRecordEvent.setParams({
		   "entityApiName": "Boat__c"
	   });
	   if (selectedBoatTypeId) {
		   createRecordEvent.setParams({
			   "defaultFieldValues": {'BoatType__c': selectedBoatTypeId}
		   });
	   }
	   createRecordEvent.fire();
   }
})
