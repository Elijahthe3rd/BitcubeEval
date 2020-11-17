const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    Forenames: {
        type:[],
        require:true
    },
    Surname:  {
        type: String,
        require:true
    },
    DOB:   {
        type: String,
        require:true
    },
    EmailAddress:  {
        type: String,
        require:true
    },
    degree:   {
        type: [],
        require:true
    },
    FirstName:   {
        type: String,
        require:true
    },
    FullNames:   {
        type: String,
        require:true
    },
    
})

module.exports=mongoose.model('USER_POSTS',userSchema)