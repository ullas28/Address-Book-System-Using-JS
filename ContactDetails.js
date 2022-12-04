class ContactDetails {

    //entities
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor (firstName,lastName,address,city,state,zip,phoneNumber,email){

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;

    }
    
    // getters and setters
    get firstName() {
        return this.firstName;
    }
   
    set firstName(firstName) {
        this.firstName = firstName;
    }

    get lastName() {
        return this.lastName;
    }
    
    set lastName(lastName) {
        this.lastName = lastName;
    }

    get address() {
        return this.address;
    }
   
    set address(address) {
        this.address = address;
    }

    get city() {
        return this.city;
    }
   
    set city(city) {
        this.city = city;
    }

    get state() {
        return this.state;
    }
   
    set state(state) {
        this.state = state;
    }

    get zip() {
        return this.zip;
    }
    
    set zip(zip) {
        this.zip = zip;
    }

    get phoneNumber() {
        return this.phoneNumber;
    }
   
    set phoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    get email() {
        return this.email;
    }
    
    set email(email) {
        this.email = email;
    }

    toString() {
        return "firstName = " +this.firstName + ", lastName = " +this.lastName + ", address = " +this.address + ", city = " +this.city +
                                ", state = " +this.state + ", zip = " +this.zip + ", phoneNumber = " +this.phoneNumber + ", email = " +this.email;
    }


}

// exporting class file to another file
module.exports = ContactDetails;