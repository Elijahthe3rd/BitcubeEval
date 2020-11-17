const user = require("./user");

class Student extends user {
  constructor(foreName, surname, email, dob,degreeLink,firstName,fullNames) {
    super(foreName,surname,dob,email,firstName,fullNames);
    this.degreeLink = degreeLink;
    
  }

  checkNoOfDegrees = () => {
    if (this.degreeLink.length > 1) {
      return "Student can only be enrolled for 1 degree";
    } else {
      return this.linkValidator(this.degreeLink[0]);
    }
  };

  studentDetails = () => {
    let degreeLink =this.checkNoOfDegrees();
    let forenames=this.forenames
    let surname=this.lastName
    let dob=this.dateOfBirth
    let email=this.email
    let firstName=this.getFirstName()
    let fullNames=this.getFullnames()
    return ({forenames,surname,dob,email, degreeLink,firstName,fullNames});
  }

}


module.exports=Student


