const prompt = require('prompt-sync')();

class UserInputOutput {
    menu() {
        console.log("Press 1 - To insert new contact");
        console.log("Press 2 - To display details");
        console.log("Press 3 - To edit contact details");
        console.log("Press 4 - To delete contact")
        console.log("Press 5 - To get count of contacts in address book")
        console.log("Press 6 - To search person by city or state")
        console.log("Press 7 - To exit");
        console.log();
        return parseInt(prompt("Enter your choice : "));
    }
}
module.exports = UserInputOutput;