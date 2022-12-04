const prompt = require('prompt-sync')();

class UserInputOutput {
    menu() {
        console.log("Press 1 - To insert new contact");
        console.log("Press 2 - To display details");
        console.log("Press 3 - To exit");
        return parseInt(prompt("Enter your choice : "));
    }
}
module.exports = UserInputOutput;