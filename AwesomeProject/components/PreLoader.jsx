import React from "react";
import { ActivityIndicator, View }  from 'react-native'


const PreLoader = () => {


    return(
        <>
        <View style={{flex:1, justifyContent: 'center',alignItems: 'center',}}>

            <ActivityIndicator size={"large"} color={"#000"} />

        </View>
        </>
    )
}

export default PreLoader