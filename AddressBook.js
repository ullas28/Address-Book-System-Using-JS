const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();


//Ability to add user-defined values to the PersonInfoData
try {
    let contactInfo = new ContactDetails();
    contactInfo.fName = prompt("Enter First Name : ");
    contactInfo.lName = prompt("Enter Last Name : ");
    contactInfo.addressName = prompt("Enter Address : ");
    contactInfo.cityName = prompt("Enter City : ");
    contactInfo.stateName = prompt("Enter State : ");
    contactInfo.zipNumber = prompt("Enter Zip : ");
    contactInfo.phoneNo = prompt("Enter Phone Number : ");
    contactInfo.emailID = prompt("Enter Email : ");
    console.log(contactInfo.toString());
} catch (e) {
    console.error(e);
}