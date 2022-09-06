import { View, Text,StyleSheet,SafeAreaView,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const RegistrationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} >
      
      <Text style={styles.text} >Registration Screen</Text>
      <View style={styles.email} >
          <MaterialIcons name='alternate-email' size={30}  />
          <TextInput placeholder='User Name' keyboardType='alphabetic' style={{fontSize:20, flex:1, paddingLeft:10}} />
      </View>
      <View style={styles.email} >
          <MaterialIcons name='alternate-email' size={30}  />
          <TextInput placeholder='Email ID' keyboardType='alphabetic' style={{fontSize:20, flex:1, paddingLeft:10}} />
      </View>

      <View style={styles.email} >
          <Ionicons name='ios-lock-closed-outline' size={30}  />
          <TextInput placeholder='Password' secureTextEntry={true} style={{fontSize:20, flex:1, paddingLeft:10}} />
          
      </View>
      <View style={styles.email} >
          <Ionicons name='ios-lock-closed-outline' size={30}  />
          <TextInput placeholder='Confirm Password' secureTextEntry={true} style={{fontSize:20, flex:1, paddingLeft:10}} />
          
      </View>
      
      
      <TouchableOpacity
         onPress={()=> navigation.navigate('Login')}
         style={{  flexDirection:'column',alignItems:'center' ,width:'80%'}} >
        
         <Text style={{fontSize:20, color:'white',paddingTop:10, marginTop:20, backgroundColor:'violet',height:50,width:160,borderRadius:10, textAlign:'center'}} >Register</Text>
      </TouchableOpacity>
       

      <View>

      </View>

      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
  },
  text:{
    fontSize:25,
    color:'green'
  },
  email:{
    flexDirection:'row',
    paddingHorizontal:0,
    // backgroundColor:'grey',
    height:50,
    borderRadius:10,
    width:'90%',
    marginTop:10,
    borderColor:'grey',
    borderWidth:2
    
    

  }

});
    


export default RegistrationScreen