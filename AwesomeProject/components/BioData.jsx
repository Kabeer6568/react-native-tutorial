import {

  Button,
    Text,
    View,

} from "react-native"

const Firstname = "Kabeer";
  const Lastname = "Ali Alvi"
  const age = 20;

  let CompanyEmp = 50

  const UpdatedCompanyEmp = ()=>{
    CompanyEmp = 80
    console.warn(CompanyEmp)
    }

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

      <Text>
        Company Emp = {CompanyEmp}
      </Text>

      <Button title="Hello" onPress={UpdatedCompanyEmp} color={"red"}/>

    </>
  
    )

}

export default BioData