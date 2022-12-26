import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc";

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
                        <Image source={icon} style={tw`text-[#fff] rounded-lg h-[56px] w-[54px]`} />
                    </View>
                )
            })}
        </ScrollView>
        </View>
    </View>
  )
}

export default Matches
