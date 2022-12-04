//importing another class file to the class file
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

class AddressBookService {
    contactInfoList = new Array();

    /**
     * Purpose : To insert new contact in the address book 
     * 
     * @param {*} contactInfoList 
     * @returns 
     */
    insert(contactInfoList) {
        let found = false;
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

            if (contactInfoList.length < 0) {
                contactInfoList.push(contactInfo);
            } else if (contactInfoList.length >= 0) {
                contactInfoList.forEach(element => {
                    if ((element.fName === contactInfo.fName) == true) {
                        found = true;
                        return;
                    }
                });
                if (found == true) {
                    console.log();
                    console.log("Duplicate entry exists!");
                    console.log();
                } else {
                    contactInfoList.push(contactInfo);
                }
            }

            return contactInfoList;
        } catch (e) {
            console.error(e);
        }
    }


    /**
     * Purpose : To edit contact details by giving the first name of contact
     * 
     * @param {*} contactInfoList 
     * @param {*} fname 
     * @returns 
     */
    editContact(contactInfoList, fname) {
        contactInfoList.forEach(element => {
            if ((element.fName === fname) == true) {
                console.log("Press 1 to edit Last Name");
                console.log("Press 2 to edit Address");
                console.log("Press 3 to edit City")
                console.log("Press 4 to edit State");
                console.log("Press 5 to edit Zip");
                console.log("Press 6 to edit Phone Number");
                console.log("Press 7 to edit Email");
                let option = parseInt(prompt("Enter your choice : "));
                let contactInfo = new ContactDetails();

                switch (option) {
                    case 1:
                        contactInfo.lName = prompt("Enter Last Name : ");
                        element.lName = contactInfo.lName;
                        break;
                    case 2:
                        contactInfo.addressName = prompt("Enter Address : ");
                        element.addressName = contactInfo.addressName;
                        break;
                    case 3:
                        contactInfo.cityName = prompt("Enter City : ");
                        element.cityName = contactInfo.cityName;
                        break;
                    case 4:
                        contactInfo.stateName = prompt("Enter State : ");
                        element.stateName = contactInfo.stateName;
                        break;
                    case 5:
                        contactInfo.zipNumber = prompt("Enter Zip : ");
                        element.zipNumber = contactInfo.zipNumber;
                        break;
                    case 6:
                        contactInfo.phoneNo = prompt("Enter Phone Number : ");
                        element.phoneNo = contactInfo.phoneNo;
                        break;
                    case 7:
                        contactInfo.emailID = prompt("Enter Email : ");
                        element.emailID = contactInfo.emailID;
                        break;
                    default:
                        console.log("You have entered invalid input!");
                        break;
                }
            }
        });
        return contactInfoList;
    }


    /**
     * Purpose : To delete contact details by giving their first name 
     * 
     * @param {*} contactInfoList 
     * @param {*} fname 
     * @returns 
     */
    deleteContact(contactInfoList, fname) {
        contactInfoList.forEach(value => {
            if ((value.fName === fname) == true) {
                let index = contactInfoList.indexOf(fname);
                contactInfoList.splice(index, 1);
            }
        });
        return contactInfoList;
    }

    /**
     * Purpose : TO search person through city or state name
     * 
     * @param {*} contactInfoList 
     */
    searchContact(contactInfoList) {
        console.log("Press 1 to search by City");
        console.log("Press 2 to search by State");
        let userChoice = parseInt(prompt("Enter your choice : "));
        let count = 0;
        switch (userChoice) {
            case 1:
                let city = prompt("Enter the City Name : ");
                contactInfoList.forEach(value => {
                    if ((value.city === city) == true) {
                        console.log(value);
                        count++;
                        }                
                });
                console.log("Number of contact persons in " + city + " is "+count);
               
                break;
            case 2:
                let state = prompt("Enter the State Name : ");
                contactInfoList.forEach(value => {
                    if ((value.state === state) == true) {
                        console.log(value);
                        count++;
                    }
                });
                console.log("Number of contact persons in " + state + " is "+count);
                break;
            default:
                console.log("You have entered invalid input!");
                break;
        }
    }

    /**
     * Purpose : To sort the contact detials alphabetically by Person's Name
     * 
     * @param {*} contactInfoList 
     */
     sortContact(contactInfoList) {
        console.log("Press 1 to sort the Address Book by First Name");
        console.log("Press 2 to sort the Address Book by City");
        console.log("Press 3 to sort the Address Book by State");
        console.log("Press 4 to sort the Address Book by Zip");
        let userChoice = parseInt(prompt("Enter your choice : "));

        switch (userChoice) {
            case 1:
                contactInfoList.sort((a, b) => {
                    if (a === b) {
                        return 0;
                    }
                    return a.fName < b.fName ? -1 : 1;
                });
                console.log(contactInfoList);
                break;
            case 2:
                contactInfoList.sort((a, b) => {
                    if (a === b) {
                        return 0;
                    }
                    return a.city < b.city ? -1 : 1;
                });
                console.log(contactInfoList);
                break;
            case 3:
                contactInfoList.sort((a, b) => {
                    if (a === b) {
                        return 0;
                    }
                    return a.state < b.state ? -1 : 1;
                });
                console.log(contactInfoList);
                break;
            case 4:
                contactInfoList.sort((a, b) => {
                    if (a === b) {
                        return 0;
                    }
                    return a.zip < b.zip ? -1 : 1;
                });
                console.log(contactInfoList);
                break;
            default:
                console.log("You have entered invalid input!");
                break;
        }
    }
}

module.exports = AddressBookService;