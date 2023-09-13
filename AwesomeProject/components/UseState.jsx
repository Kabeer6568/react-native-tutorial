import React, {useState} from "react";

import { Button, Text, View } from "react-native";


const UseState = () =>{

    const [name , setName] = useState("Kabeer")

    const updatedFullName = () =>{
        setName("Kabeer Ali Alvi")
    }


    return(
        <>

        <Text style={{fontSize: 35}}>
            Working With "STATE"
        </Text>

        <Text style={{fontSize: 25}}>
            {name}
        </Text>
        
        <Button title="Updated full Name" onPress={updatedFullName} />
        </>
    )
}

export default UseState;