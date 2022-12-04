// importing another class file to this class file
const prompt = require('prompt-sync')();
const UserInputOutput = require("./UserInputOutput.js");
const AddressBookService = require("./AddressBookService.js");

let userInputOutput = new UserInputOutput();
let addressBookService = new AddressBookService();
let contactInfoList = new Array();
flag = true;

while (flag) {

    let userChoice = userInputOutput.menu();
    switch (userChoice) {
        case 1:
            contactInfoList = addressBookService.insert(contactInfoList);
            break;
        case 2:
            console.log(contactInfoList);
            break;
        case 3:
            let fName = prompt("Enter the first Name to edit Contact details : ");
            contactInfoList = addressBookService.editContact(contactInfoList, fName);
            break;
        case 4:
            let pName = prompt("Enter the first Name to delete Contact details : ");
            contactInfoList = addressBookService.deleteContact(contactInfoList,pName);
            break;
        case 5:
            console.log("EXITED !!!");
            flag = false;
            break;
        default:
            console.log("You have entered invalid input!");
            break;
    }
}