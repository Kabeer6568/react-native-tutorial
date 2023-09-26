import React, { useState } from "react";
import { TouchableOpacity,StyleSheet, Text } from "react-native";

const HoverableButton = ({title}) =>{

    const [isHovered, setIsHovered] = useState(false)

return(
    
        <TouchableOpacity
        onPressIn={()=>setIsHovered(true)}
        onPressOut={()=>setIsHovered(false)}
        style = {{backgroundColor: isHovered  ? "lightgray" : "white"}}
        >
            <Text style={styles.textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    
)


}

const styles = StyleSheet.create({
    

    textStyle: {
        fontWeight: "bold",
        fontSize: 24
    },


})

export default HoverableButton