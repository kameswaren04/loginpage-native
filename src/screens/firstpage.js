import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Carousel from 'react-native-snap-carousel'
// import windowWidth from '../components/Dimensions'
// import Data from '../modal/data'
// import BannerSlider from '../components/BannerSlider'

const firstpage = ({navigation}) => {

//     const renderBanner =({item,index})=>{
// return <BannerSlider data={item} />
//     }
  return (
    <SafeAreaView>
   <ScrollView style={{padding:20}} >
    <View>
      <Text style={{fontSize:20}} >Hello Kamesh</Text>
    </View>
    <View>
        <TextInput placeholder='Search' 
        style={{height:50, width:300, borderColor:'grey',borderWidth:2, marginLeft:30,marginTop:20,borderRadius:15}}></TextInput>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}} >
        <Text style={{fontSize:28}} >Upcoming</Text>
        <Text style={{fontSize:18, color:'blue'}} >See all</Text>
    </View>
    <View>
    {/* <Carousel
              ref={(c) => { this._carousel = c; }}
              data={Data}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 40}
              itemWidth={300}
            /> */}
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default firstpage