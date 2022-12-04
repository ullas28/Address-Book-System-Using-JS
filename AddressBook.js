const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

var contactInfo = new ContactDetails("Virat","Kohli","Vijayanagar","Sagar","Madhya Pradesh","405605","4568745645"
                  ,"zazzazaza@yahoo.com");

console.log(contactInfo.toString());

contactInfo.firstName = "Rohith";
contactInfo.lastName = "Sharma";
contactInfo.address = "MG road";
contactInfo.city = "Vadodara";
contactInfo.state = "Gujarat";
contactInfo.zip = "459895";
contactInfo.phoneNumber = "5645143421";
contactInfo.email = "rrr22r2r2r2r2@gmail.com";
console.log(contactInfo.toString());

contactInfo.firstName = prompt("Enter First Name : "); 
contactInfo.lastName = prompt("Enter Last Name : "); 
contactInfo.address = prompt("Enter Address : "); 
contactInfo.city = prompt("Enter City : "); 
contactInfo.state = prompt("Enter State : "); 
contactInfo.zip = prompt("Enter Zip : "); 
contactInfo.phoneNumber = prompt("Enter Phone Number : "); 
contactInfo.email = prompt("Enter Email : "); 
console.log(contactInfo.toString());