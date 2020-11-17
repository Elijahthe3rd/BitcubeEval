const User = require("./user");
const userSchema=require('../model/userInfo')

class Lecturer extends User {
  constructor(degreeList) {
    super("Mmaphuti Clive", "Sepuru", "mc.sepuru@ul.org", "1997/02/26");
    this.degreeList = degreeList;
  }

  lectureDetails = () => {
    let forenames=this.forenames
    let surname=this.lastName
    let dob=this.dateOfBirth
    let email=this.email
    let firstName=this.getFirstName()
    let fullNames=this.getFullnames()
   
    let degreeList=this.degreeList.map((c) => `${c}`)
    return ({forenames,surname,dob,email,degreeList,firstName,fullNames});
  };
}

// let lecture = new Lecturer(["Data-Science", "Web-Dev", "Computer-Science", "Electo-Techniques"]);
// let output = lecture.lectureDetails();
// console.log(output);
module.exports=Lecturer;
