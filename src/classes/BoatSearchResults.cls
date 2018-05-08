public with sharing class BoatSearchResults {
	@AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
		List<Boat__c> boats = new List<Boat__c>();
		String query = 'SELECT Id, Name, Contact__r.Name, Picture__c FROM Boat__c';
		if (boatTypeId == ''){
			boats = Database.query(query);
		} else {
			boats = Database.query(query + ' WHERE BoatType__r.Id = \'' + boatTypeId + '\'');
		}
		return boats;
    }
}