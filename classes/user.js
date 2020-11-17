const userSchema=require('../model/userInfo')

class User {
  constructor(foreName, surname, email, dob) {
    this.forenames = [foreName];
    this.lastName = surname;
    this.email = email;
    this.dateOfBirth = dob;
    this.firstName = this.forenames[0];
    this.fullNames = this.forenames + " " + this.lastName;
  }

  getFirstName = () => {
    let firstNameRegex = /[?<=\w]+[^\s]/g;
    let firstName = this.firstName.match(firstNameRegex)[0];
    return firstName;
  };

  linkValidator = (link) => {
    let validateLinkRegex = /[?<=[https]+:+[+\/\/].+[www\.].+/g;
    let isValidLink = validateLinkRegex.test(link);
    let finalValue =
      isValidLink == true
        ? link.match(validateLinkRegex)
        : "Not a valid link,please provide a valid link";

    return finalValue[0];
  };

  getFullnames = () => {
    return this.forenames + " " + this.lastName;
  };

  userDetails = () => {
    let info=new userSchema()
  
    let userInfo = {
      Forenames: this.forenames[0],
      Surname: this.lastName,
      DOB: this.dateOfBirth,
      EmailAddress: this.email,
      FirstName: this.getFirstName(),
      FullNames: this.getFullnames(),
    };
    info=userInfo
    return info;
  };
}

module.exports = User;
