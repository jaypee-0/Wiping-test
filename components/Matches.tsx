import { Image, ScrollView, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import tw from "twrnc";
import LinearGradient from 'react-native-linear-gradient';

const Matches = ({data}:any) => {

  return (
    <View>
      <Text style={tw`mt-2 font-bold`}>Matches</Text>
        <View style={tw`flex flex-row justify-between`}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={tw`mt-1`}>
            {data.map(({name, icon, isOnline}:any, index:number)=> {
                return(                    
                    <View key={index} style={tw`flex flex-col mr-4 relative`}>
                        {isOnline && <View style={tw`bg-[#2F80ED] h-3 w-3 rounded-full absolute -right-[5px] top-0 z-10`}></View>}
                        {/* <LinearGradient
                            colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={styles.grediant}
                        > */}
                          <Image source={icon} style={tw`text-[#fff] rounded-lg h-[56px] w-[54px]`} />
                        {/* </LinearGradient> */}
                    </View>
                )
            })}
        </ScrollView>
        </View>
    </View>
  )
}

export default Matches

const styles = StyleSheet.create({
  container: {
      flex: 1.0,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
  },
  grediant: {
      height: 44,
      width: 300,
      justifyContent: 'center',
      alignSelf: 'center'
  },
})