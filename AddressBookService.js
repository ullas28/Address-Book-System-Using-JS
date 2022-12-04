//importing another class file to the class file
const ContactDetails = require("./ContactDetails.js"); 
const prompt = require('prompt-sync')();

class AddressBookService {
    contactInfoList = new Array();
    insert(contactInfoList) {
        try{
            let contactInfo = new ContactDetails();
            contactInfo.fName = prompt("Enter First Name : "); 
            contactInfo.lName = prompt("Enter Last Name : "); 
            contactInfo.addressName = prompt("Enter Address : "); 
            contactInfo.cityName = prompt("Enter City : "); 
            contactInfo.stateName = prompt("Enter State : "); 
            contactInfo.zipNumber = prompt("Enter Zip : "); 
            contactInfo.phoneNo = prompt("Enter Phone Number : "); 
            contactInfo.emailID = prompt("Enter Email : "); 

            contactInfoList.push(contactInfo);

            return contactInfoList;
        } catch ( e ) {
            console.error(e);
        }
    }
}

module.exports = AddressBookService;