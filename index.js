const student=require('./classes/student')
const lecturer=require('./classes/lecturer')
const Post=require('./model/userInfo')
const db=require('./db_connections/dbConnector')


db.connection()

// const lecturePosts=new userSchema({forenames,surname,dob,email,degreeList,firstName,fullNames})
// console.log({forenames,surname,dob,email,degreeList,firstName,fullNames})

// let lecture = new Lecturer(["Data-Science", "Web-Dev", "Computer-Science", "Electo-Techniques"]);
// let output = lecture.lectureDetails();
// console.log(output);



async function save (){
      
    try {
        const infoObject=await new Post(new Object(learner.studentDetails()))
        const savedPost=await infoObject.save()
        
        return ()=>console.log(savedPost);    
    } catch (error) {
        return({message:error});
    }
}


