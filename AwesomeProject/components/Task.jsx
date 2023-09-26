import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import HoverableButton from "./HoverableButton";


const view1 = () => {
    return (
        <View style={{ backgroundColor: "red", alignItems: "center", flex: 1,  justifyContent:"center" }}>
            <Text>
                View 1
            </Text>
        </View>
    )
}
const view2 = () => {
    return (
        <View style={{ backgroundColor: "green", alignItems: "center", justifyContent:"center", flex:1}}>
            <Text>
                View 2
            </Text>
        </View>
    )
}
const view3 = () => {
    return (
        <View style={{ backgroundColor: "yellow", alignItems: "center", flex: 1,justifyContent:"center" }}>
            <Text>
                View 3
            </Text>
        </View>
    )
}


const Tabs = () => {

    const [index , setIndex] = useState(1)

    return (

        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.viewStyle}>
                    <TouchableOpacity onPress={()=>setIndex(1)}>
                        <Text style={styles.textStyle}>
                            View 1
                        </Text>
                        {/* <HoverableButton title={"View 1"}  />  onPress={()=>setIndex(1)}*/}

                    </TouchableOpacity>




                    <TouchableOpacity onPress={()=>setIndex(2)}>
                        <Text style={styles.textStyle}>
                            View 2
                        </Text>

                    </TouchableOpacity>




                    <TouchableOpacity onPress={()=>setIndex(3)}>
                        <Text style={styles.textStyle}>
                            View 3
                        </Text>

                    </TouchableOpacity>
                </View>

                {index == 1 ? view1(): index== 2 ? view2(): view3()}
                
            </View>
        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        padding: 10

    },
    viewStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        
    },

    textStyle: {
        fontWeight: "bold",
        fontSize: 24
    },


})

export default Tabs