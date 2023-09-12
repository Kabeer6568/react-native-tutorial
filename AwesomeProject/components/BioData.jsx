import {

    Text,
    View,

} from "react-native"

const Firstname = "Kabeer";
  const Lastname = "Ali Alvi"
  const age = 20;

const BioData = () =>{

    return(
        <>

      <View>
        <Text style={{fontSize: 50}}>
          Bio Data
        </Text>

        <Text>
          First Name = {Firstname}
          {'\n'}
          Last Name = {Lastname}
          {'\n'}
          Full Name = {Firstname + " " + Lastname}
          {'\n'}
          Age = {age}

        </Text>

        <Text>
          {age>20 ? "You are eligible" : "Your are not aligible"}
        </Text>
      </View>

    </>
  
    )

}

export default BioData