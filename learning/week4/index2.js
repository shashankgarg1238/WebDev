/* 
   GET: user can chcek how many kidneys he have and their health
   POST : user can add a new kidney
   PUT : User can replace a kidney , make it healthy
   DELETE : user can remove a kidney

*/


const express = require("express");

const app = express();

const users = [{
    name : "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res){          //"/files/:fileName"
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i = 0; i<noOfKidneys; i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys += 1;
        }
    }
    const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;

    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    });
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Updated"
    });
})


//removing all the unhealthy kidneys
app.delete("/", function(req,res){
    //do this, if atleast 1 unhealthy kidney
    if(isThereAtLeastOneUnKi()){
        const newKidneys = [];
        for(let i = 0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "Deleted"
    });
    } else {
        res.status(411).json({
            msg: "You have no bad kidney"
        });
    }
    
})

function isThereAtLeastOneUnKi(){
    let atleastOneUn = false;
    for(let i = 0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUn =  true;
        }
    }
    return atleastOneUn
}

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});



