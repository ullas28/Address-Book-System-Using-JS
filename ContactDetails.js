class ContactDetails {

    //entities
    firstName = "";
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(...params) {

        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];

    }

    // getters and setters
    get fName() {
        return this.firstName;
    }
    
    set fName(firstName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regex.test(firstName)) {
            this.firstName = firstName;
        }
        else {
            throw "Incorrect First Name !!!";
        }
    }

    get lName() {
        return this.lastName;
    }
   
    set lName(lastName) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regex.test(lastName)) {
            this.lastName = lastName;
        }
        else {
            throw "Incorrect Last Name !!!";
        }
    }

    get addressName() {
        return this.address;
    }
    
    set addressName(address) {
        let regex = RegExp('^([0-9A-Za-z\\s,-\\\\.]{4,})$');
        if ( regex.test( address )) {
            this.address = address;
        }
        else {
            throw "Incorrect Address !!!";
        }
    }

    get cityName() {
        return this.city;
    }
   
    set cityName(city) {
        let regex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( regex.test( city )) {
            this.city = city;
        }
        else {
            throw "Incorrect City Name !!!";
        }
    }

    get stateName() {
        return this.state;
    }
   
    set stateName(state) {
        let regex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( regex.test( state )) {
            this.state = state;
        }
        else {
            throw "Incorrect State Name !!!";
        }
    }

    get zipNumber() {
        return this.zip;
    }
    
    set zipNumber(zip) {
        let regex = RegExp('^([0-9]{6})|([0-9]{3}(\\s)[0-9]{3})$');
        if ( regex.test( zip )) {
            this.zip = zip;
        }
        else {
            throw "Incorrect Zip Number !!!";
        }
    }

    get phoneNo() {
        return this.phoneNumber;
    }
    
    set phoneNo(phoneNumber) {
        let regex = RegExp('^(0|91)?[\\s][0-9]{10}$');
        if ( regex.test( phoneNumber )) {
            this.phoneNumber = phoneNumber;
        }
        else {
            throw "Incorrect phone number !!!";
        }
    }

    get emailID() {
        return this.email;
    }
    
    set emailID(email) {
        let regex = RegExp('^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$');
        if ( regex.test( email )) {
            this.email = email;
        }
        else {
            throw "Incorrect email address !!!";
        }
    }

    toString() {
        return "firstName = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address + ", city = " + this.city +
            ", state = " + this.state + ", zip = " + this.zip + ", phoneNumber = " + this.phoneNumber + ", email = " + this.email;
    }

}

// exporting class file to another file
module.exports = ContactDetails;