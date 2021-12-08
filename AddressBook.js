//UC1-Create Address Book
let addressBookArray=new Array();
class AddressBook
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    displayDetails() //method
    {
        console.log("\nFirstName: "+this.firstName+"\nLastName: "+this.lastName+"\nAddress: "+this.address+"\nCity: "+this.city+"\nState: "+this.state+"\nZip: "+this.zip+"\nPhoneNumber: "+this.phoneNumber+"\nEmail: "+this.email);
    }
}

function validateAddress()
{
let addressBook=new AddressBook();
//To test First name and Last name
try{
    let firstNameRegex=RegExp('^[A-Z]{1}[A-za-z]{3,}$'); //Regular Expression shows that firstName starts with caps and minimum of 3 character
    let lastNameRegex=RegExp('^[A-Z]{1}[A-za-z]{3,}$');//Regular Expression shows that lastName starts with caps and minimum of 3 character
    addressBook.firstName="Vignesh";
    addressBook.lastName="Marimuthu";
    if(firstNameRegex.test(addressBook.firstName) && lastNameRegex.test(addressBook.lastName))
    {
        console.log("\n-------Validating FirstName and LastName-------")
        console.log("FirstName: "+addressBook.firstName+"\nLastName: "+addressBook.lastName);
    }
    else throw 'Names are incorrect-check first letter should be capital'
}
catch(e)
{
    console.error(e);
}

//To test Address,City and State
try{
    let addressRegex=RegExp('^[A-Za-z]{4,}$'); //Regular Expression shows that address contains minimum of 4 character
    let cityRegex=RegExp('^[A-za-z]{4,}$'); //Regular Expression shows that address contains minimum of 4 character
    let stateRegex=RegExp('^[A-za-z]{4,}$'); //Regular Expression shows that address contains minimum of 4 character
    addressBook.address="Happ";
    addressBook.city="Trichy";
    addressBook.state="TamilNadu";
    if(addressRegex.test(addressBook.address) && cityRegex.test(addressBook.city) && stateRegex.test(addressBook.state))
    {
        console.log("\n------Validating Address,City and State------");
        console.log("Address: "+addressBook.address+"\nCity: "+addressBook.city+"\nState: "+addressBook.state);
    }
    else throw 'Address,City or State should contain atleast 4 characters'
}
catch(e)
{
    console.error(e);
}

//To test Zip,PhoneNumber and Email
try{
    let zipRegex=RegExp('^[0-9]{6}$'); //Regular Expression shows that zip should contain numbers with only 6 characters
    let phoneNumberRegex=RegExp('^[1-9]{2}[ ]{1}[0-9]{10}$'); //Regular Expression shows that number should contain country code followed by space and 10 digit number
    let emailRegex=RegExp('^[a-zA-Z0-9]+[+-._]?[a-zA-Z0-9]*[+-._]?[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]{1}[a-zA-Z]{2,3}[.]?[a-zA-Z]{0,3}$'); //Regular expression to test all valid emails
    addressBook.zip=620025;
    addressBook.phoneNumber="91 9624873168";
    addressBook.email="vicky@gmail.com";
    if(zipRegex.test(addressBook.zip) && phoneNumberRegex.test(addressBook.phoneNumber) && emailRegex.test(addressBook.email))
    {
        console.log("\n------Validating Zip,PhoneNumber and Email------");
        console.log("Zip: "+addressBook.zip+"\nPhoneNumber: "+addressBook.phoneNumber+"\nEmail: "+addressBook.email);
    }
    else throw 'Check Zip-Only Number of 6 Character, PhoneNumber-Country Code followed by 10 character number, Email-Should not start with special characters'
}
catch(e)
{
    console.error(e);
}
addressBookArray.push(addressBook);
}validateAddress();

let newContact=new AddressBook();
//UC3-Create AddressBook Array and add new contact
function addNewContactToArray()
{
    newContact.firstName='Praveen'; newContact.lastName='Muthu'; newContact.address='Happ'; newContact.city='Trichy'; newContact.state='Tamil Nadu'; 
    newContact.zip=620025; newContact.phoneNumber="91 7854269872"; newContact.email="praveen@gmail.com";
}addNewContactToArray();
addressBookArray.push(newContact);

//UC4-Edit Person Contact Using Name
let editContact=new AddressBook();
function editContactInArray()
{
    editContact.firstName='Praveen';
    if(editContact.firstName == newContact.firstName)
    {
        editContact.lastName='Marimuthu';
        editContact.address='NGO Colony';
        editContact.city='Dindigul';
        editContact.state='Tamil Nadu';
        editContact.phoneNumber='91 7397512233';
        editContact.email='praveenmuthu@gmail.com';
        console.log("Edited Contact Details Using First Name");
        
    }
} editContactInArray();
addressBookArray.push(editContact);
console.log(addressBookArray);

//UC5-Delete Contact with name
function deleteContact()
{
    let delContact=new AddressBook();
    delContact.lastName='Muthu';
    if(delContact.lastName == newContact.lastName)
    {
       addressBookArray.splice(1,1);
       console.log("Contact with lastName Muthu is removed");
    } 
}deleteContact();
console.log(addressBookArray);
