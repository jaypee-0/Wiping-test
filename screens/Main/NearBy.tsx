import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";
import tw from "twrnc";
import React from "react";

const NearBy = () => {
  const navigation = useNavigation()
    return (
        <SafeAreaView style={tw`h-[100%] bg-[#F5F5F5] px-6 text-white flex flex-col pt-[${Constants.statusBarHeight}]`}>
            <View style={tw`flex flex-row mb-10 items-center`}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mr-auto`}>
                    <AntDesign name="arrowleft" size={24} />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-1 px-8 items-center flex flex-col`}>
                <View style={tw`text-[#474F6E] my-auto mx-auto flex flex-row text-center items-center`}>
                    <Text style={tw`text-center`}>Coming Soon</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NearBy;

const styles = StyleSheet.create({});
