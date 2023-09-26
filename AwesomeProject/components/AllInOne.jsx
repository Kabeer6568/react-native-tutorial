import React, { useState } from "react";
import {Button, Text, } from "react-native";



const AllInOne = () => {


    const [number , useNumber] = useState(0)

    return(

        <>
        
        <Text style={{fontSize: 80}}>
            All In One
        </Text>
        <Text style={{fontSize: 40}}>
            Using State & Props
        </Text>

        <Selectednumber number = {number} />

        <Button title="Update Number" onPress={()=>useNumber(1)} />


        </>
    )

}


const Selectednumber = (prop)=>{

    return(
    <Text style={{fontSize: 30}}>

        {prop.number}

    </Text>
    )
}

export default AllInOne