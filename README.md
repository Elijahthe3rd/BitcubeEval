# BitcubeEval
Bitcube assessment section 1 OOPS


## INSTRUCTIONS ON HOW TO RUN THE PROJECT

**Firstly :)  ('_')**

> 1. Please make sure you have latest **`NODEJS`** version installed on your system(`pc`)

>  2. Please install **`Docker`** on your system terminal

>  3. Install **`MongoDB shell version v4.2.8 or lastest`**

> cd into cloned repo & on `Terminal` run the command:
>
> ```
> npm run then hit enter.
>
> ```
> `to see all available tests scripts`
>
>Assuming that the mentioned tools are installed at this point.
 ```js

 npm run startDb
 npm run test_student
 npm run test_lecture

 package.json scripts looks like this:

"startDb": "nodemon db_connections/dbConnector", //starts database connection

 "test_student":"node classes/student", //runs the class.file/module student and prints out data on the console!!!!!!!!!!!

 "test_lecture":"node classes/lecturer" //runs the class.file/module named leturer and prints out data on the console!!!!!!!!!!!
 ```

>

### ***Guide Lines on how to run `Docker & MongoDB` if the tools are already installed and setup***

***You have to set up database on your local machine follow the bellow commands***

>- Make sure you have Docker installed on your pc

>- Open your teminal/command prompt

***Type the following in your terminal and hit enter/return key in ascending order***
    
>
    > ```bash
    > sudo service docker status
    > 
    > sudo service docker stop
    > ```
>
    > `choose one from options below`
    > ```bash
    > 1. sudo service docker start
    > ```   
> 
    > ```bash
    > 2. sudo service docker restart
    > ```                
>  
    > ```bash
    > 3. sudo service docker force-reload 
    > ```
>
    > `Check if docker server is up and running.`
    > ```bash
    > sudo service docker status
    > ``` 
> Pull docker image of `mongo version=4.0.4` which is the lastest at this time from docker hub.
> ```bash
> Sudo docker pull mongo:4.0.4
> ```
>
> ***`or`***

> ### (Recommemded) `Command`: ->
> ```bash
> sudo docker run -d -p 27017-27019:27017-27019 -v data/data:./data/mongoData --name mongodb mongo:4.0.4
> ```
>  `The above will try to run local image if avail if not it will pull it from remote docker hub and create a container named mongodb also make it available locally.`


> Executing `or` running Interactive Docker terminal with the mongo instance `or` container 
>
> ```bash
> sudo docker exec -it mongodb bin/bash mongo
>```

>**`Example on how to interact or even insert new records in to mongodatabase`**

>```bash    
> use collection name
>``` 
>
> *`in my case i have ?????? for now`*
>
> e.g 
>   
>```bash
>
> use umuzi_users then hit return or enter key
>```
>
> **Insert**
>```bash
> db.collection.insertOne()	
>```
> `Command above, Inserts a single document into a collection.`

> #### `OR` 
>```bash
    > db.umuzi_users.save({name:"Eli",age:"26",description:"coder-web"})
    >
    > db.umuzi_users.save(name:"Elijah",age:"27",description:"coder"})
    >
    > db.umuzi_users.save(name:"Clive",age:"23",description:"Teacher"})
>```
` As you can see from the above its kinda tidious to insert multiple objects or data. The easy way to solve that is below`

 > **`Insert Bulk documnets `**
 >
 > (N.B) This is just an example.Please do the test on your own ('-_-')
>
>```bash
> db.umuzi_usersinsertMany([
>    { name: "card", age: 15,discription:"junior developer" },
>
>    { name: "envelope", age: 20,discription:"dancer" },
>
>    { name: "stamps" , age: 30,discription:"music producer" }])

>  **`Find all documents available (Find())`**
> ```bash
> > db.umuzi_users.find({})

> **`Save data to collection (save())`**
> ```sql
>
>  db.umuzi_users.save({name:"Elijah",age:"27",description:"coder"})
>
>  db.umuzi_users.save({name:"Clive",age:"23",description:"Teacher"})
>```

> **Find specific object/data from your collection using findByIdAndDelete(id)**
>
>```sql
>  db.umuzi_users.findByIdAndDelete(id)
>```