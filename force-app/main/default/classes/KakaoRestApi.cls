@RestResource(urlMapping='/checkContact/*')
global without sharing class KakaoRestApi {
    @HttpGet
    global static String contentsGroup() {
 
        RestRequest req 	= RestContext.request;
        String      phoneNo	= req.params.get('phoneNo');
        String      result 	= 'false';
        
        List<Contact> contactList = [
			SELECT Id, Phone, Name, Title, Account.Name 
			FROM Contact 
			WHERE MobilePhone LIKE :('%' + phoneNo + '%') 
			OR phone LIKE :('%' + phoneNo + '%') LIMIT 10];
        if(contactList.size() > 0){
        	result = 'true';
        }
        return result;
    }
}