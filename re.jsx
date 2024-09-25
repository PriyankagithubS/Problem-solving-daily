const { useState, useEffect } = require("react")




const counter=()=>{
    const [counter,setCounter]=useState(0);


useEffect(()=>{
    if(counter>=20){
        alert("Count reached 20");
    }
},[counter]);
    const increHandler=()=>{
        if(counter<20){
            setCounter(counter+1);
        }
    }
}
return(
    <div>
        <h1>Count:{counter}</h1>
        <button onClick={increHandler}>Increm</button>
    </div>
)



SELECT * FROM teachers JOIN location ON teachers.location_id=location.id WHERE loction.city='chennai';

db.teachers.aggregate([
    {
        $lookup:{
            from:"Location",
            localFeild:"location_id",
            foreignFeild:"_id",
            as:"location_details"
        }
    },
    {
        $unwind:"$location_details"
    },
    $match:{
        "location_details.city":"chennai"
    }
])