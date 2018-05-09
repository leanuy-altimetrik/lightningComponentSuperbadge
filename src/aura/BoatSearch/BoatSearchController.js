({
	onFormSubmit:function (component, event, helper) {
        var boatTypeId = event.getParam("formData").boatTypeId;
        //get the value of the attribute into the event FormSubmit
        component.find("boatSearchResults").search(boatTypeId);
        //find the component boatSearchResults, where component is a reference to the component
        //containg the component.
        //The find() function has one parameter, wich is the local ID of component within the markup
    }
})