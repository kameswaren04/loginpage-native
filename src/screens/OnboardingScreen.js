import { SafeAreaView, Text, TouchableOpacity,Button,Image } from 'react-native'
import React from 'react'

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      {/* <Image source={{uri:'https://wordpress.org/plugins/login-customizer/'}} /> */}
      <Image style={{height:160,width:160}}
      source={require('../assets/image/loginimage.jpg')} />
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} >
        <Button title='Lets Begin' />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnboardingScreen;