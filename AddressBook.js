// importing another class file to this class file
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
            console.log("EXITED !!!");
            flag = false;
            break;
        default:
            console.log("You have entered invalid input!");
            break;
    }
}