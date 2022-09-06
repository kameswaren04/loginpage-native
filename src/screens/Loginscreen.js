import { SafeAreaView,
  StyleSheet,
  View, 
  Text, 
  TextInput ,
  Image, 
  TouchableOpacity} from 'react-native'
import React from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import google from '../assets/image/google.png';

const Loginscreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} >
      
      <Text style={styles.text} >Login Screen</Text>
      <View style={styles.email} >
          <MaterialIcons name='mail' size={30}  />
          <TextInput placeholder='Email ID' keyboardType='alphabetic' style={{fontSize:20, flex:1, paddingLeft:10}} />
      </View>

      <View style={styles.email} >
          <Ionicons name='ios-lock-closed-outline' size={30}  />
          <TextInput placeholder='Password' secureTextEntry={true} style={{fontSize:20, flex:1, paddingLeft:10}} />
          
      </View>
      <TouchableOpacity>
          <Text style={{fontSize:15, color:'red'}} >Forget Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
         onPress={()=>{navigation.navigate('firstpage')}}
         style={{  flexDirection:'column',alignItems:'center' ,width:'80%'}} >
        
         <Text style={{fontSize:20, color:'white',paddingTop:10,marginBottom:10, marginTop:20, backgroundColor:'violet',height:50,width:160,borderRadius:10, textAlign:'center'}} >Login</Text>
      </TouchableOpacity>
       <Text style={{fontSize:18}} >Or, login with...</Text>
       <View >
          <TouchableOpacity style={{flexDirection:'row'}} >
              <Image 
              style={{width:40,height:40,marginRight:10}}
              source={require('../assets/image/google.png')} ></Image>
              <Image 
              style={{width:40,height:40}}
              source={require('../assets/image/download.png')} ></Image>
          </TouchableOpacity>
       </View>

      <View>
        

      </View>

      <View style={{flexDirection:'row',marginTop:10}} >
          <Text style={{fontSize:20}} >New to the App?</Text>
          <TouchableOpacity  onPress={()=>navigation.navigate('Register')}>
            <Text style={{color:'violet',fontSize:20}} >Register</Text>
          </TouchableOpacity>
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


export default Loginscreen;