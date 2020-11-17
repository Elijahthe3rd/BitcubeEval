const mongoose = require("mongoose"); //importing databaseDriver manager mongoose
const student = require('../classes/student')
const Post = require('../model/userInfo')


let { env } = require('dotenv/').config();
let URL = process.env.URL;
let DbName = process.env.DB

//using mongoose to connect to mongodb container instance
//it takes in dburl & callback function
let connection = () => {

    try {
        mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            err ?
                console.log("\n=> Warning: \n\n" + err) :
                console.log(`\n=> Connection to database:${DbName} was successful `);
            console.log("\n\n(N.B) Database runs on / in mongodb:4.0.4 DOCKER IMAGE & CONTAINER NAMED mongodb");
        })
    } catch (error) {
        console.log({ message: error })
        return ({ message: error })
    }
}


findAll = async() => {
    const learner = new student("Elijah Noko", "Sepuru", "1993/04/25", "elijah.sepuru@umuzi.org", ["https://www.localhost:8080.co.za"]);

    let output = learner.studentDetails();

    try {
        const savedPost = Post.find({}, (err, data) => {
            err ? ({ message: err }) : console.log(data)
        })


    } catch (error) {
        return ({ message: error });
    }
}
findAll()
    .catch(error => { console.error(error) })

module.exports = { connection }