import React, { useState } from "react";
import  { Button, Text } from "react-native"




const Props = () =>{

    const [name , setName] = useState("Kabeer Alvi" ) 


    // let name = "Kabeer Ali Alvi"

    return(
        <>
        <Text style={{fontSize: 50}}>
            Props
        </Text>

        <User  name={name} />

        <Button title="Update Name" onPress={()=>setName("Ahmed Ali Khan")}/>
        
        </>
    )
}


const User = (prop) =>{


    return(
        <>
        <Text  style={{fontSize: 30}}>
            {prop.name}
        </Text>
        </>
    )
}

export default Props