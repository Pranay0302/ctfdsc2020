// JS++


interface Address {
    houseNumber: number;
    streetName ? : string;
}

interface HasPhoneNumber {
    name: string;
    phone: number;
}

interface HasEmail {
    name: string;
    email: string;
}

interface HasBrain {
    name: string;
    hasBrain: "key1{M3Q_z4v66LD0}";
}

let contactInfo: HasEmail | HasPhoneNumber =
    Math.random() > 0.5 ? {
        // we can assign it to a HasPhoneNumber
        name: "Joe",
        phone: 9583953000
    } : {
        // or a HasEmail
        name: "Donald",
        email: "RedFTW@example.com"
    };

contactInfo.name; // NOTE: we can only access the .name property  (the stuff HasPhoneNumber and HasEmail have in common)

/**
 * (15) Intersection types
 */
let otherContactInfo: HasEmail & HasPhoneNumber = {
    // we _must_ initialize it to a shape that's asssignable to HasEmail _and_ HasPhoneNumber
    name: "Mile",
    email: "mipe@example.com",
    phone: 84571212
};

otherContactInfo.name; // NOTE: we can access anything on _either_ type
otherContactInfo.email;
otherContactInfo.phone;

class Contact implements HasEmail {
    email: string;
    name: string;
    constructor(name: string, email: string) {
        this.email = email;
        this.name = name;
    }
}

class ParamPropContact implements HasEmail {
    constructor(public name: string, public email: string = "no email") {
        // nothing needed
    }
}

/**
 * (4) Class fields can have initializers (defaults)
 */
class OtherContact implements HasEmail, HasPhoneNumber {
    protected age: number = 0;
    // private password: string;
    constructor(public name: string, public email: string, public phone: number) {
        // () password must either be initialized like this, or have a default value
        // this.password = Math.round(Math.random() * 1e14).toString(32);
    }
}

/**
 * (5) JS++ even allows for abstract classes, which have a partial implementation
 */

abstract class AbstractContact implements HasEmail, HasPhoneNumber {
    public abstract phone: number; // must be implemented by non-abstract subclasses

    constructor(
        public name: string,
        public email: string // must be public to satisfy HasEmail
    ) {}

    abstract sendEmail(): void; // must be implemented by non-abstract subclasses
}

/**
 * (6) JS++ implementors must "fill in" any abstract methods or properties
 */

class ConcreteContact extends AbstractContact {
    //^^^^^^^ this one line above with the semicolon = key2
    // If you're asking "which line? what semicolon?", then your still reading JS++ OR JS that's way too new for Bobby's Internet Explorer, Find a way to see the key2 using subtle clues! 
    constructor(
        public phone: number,
        name: string,
        email: string
    ) {
        super(name, email);
    }
    sendEmail() {
        // mandatory!
        console.log("sending an email");
    }
}
// Make sure you copy the whole file



// key1{M3Q_z4v66LD0} -> key 1