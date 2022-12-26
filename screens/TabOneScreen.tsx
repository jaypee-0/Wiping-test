import { Text, TouchableOpacity, View, ActivityIndicator, useColorScheme, Image, TextInput } from "react-native";
import tw from "twrnc";
import Constants from "expo-constants";
import { useState } from "react";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import FacebookIcon from "../components/icons/FacebookIcon";
import AppleIcon from "../components/icons/AppleIcon";
import GoogleIconOriginal from "../components/icons/GoogleIconOriginal";
import { SafeAreaView } from "react-native-safe-area-context";
import { Radio, ScrollView } from "native-base";
import { Checkbox } from "native-base";

export default function CreateAccount({ route, navigation }: any) {
    const [fullname, setfullname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCallingCode, setSelectedCallingCode] = useState<String>("");
    const [showPassword, setShowPassword] = useState(true);
    const [formattedValue, setFormattedValue] = useState("");
    const [value, setValue] = useState("");
    const [checked, setChecked] = React.useState("Remember me");
    const [day, setday] = useState("")
    const [month, setmonth] = useState("")
    const [year, setyear] = useState("")
    const [gender, setgender] = useState("");
    const [showmonth, setshowmonth] = useState(false)

    function setmonthtype(data:any) {
        setmonth(data)
        setshowmonth(false)
    }
    return (
        <SafeAreaView style={tw`h-[100%] px-6 text-black flex flex-col bg-[#fff] pt-[${Constants.statusBarHeight}]`}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mb-8 mr-auto rounded-[16px] items-center`}>
                    <AntDesign name="arrowleft" size={30} color="#3E3E3E" />
                </TouchableOpacity>
                <Text style={tw`text-[#2F80ED] font-bold  text-[30px] w-[80%]`}>Sign Up</Text>
                <Text style={tw`text-[16px] text-[#808080] mb-6`}>Kindly provide email and your unique username.</Text>

                <View style={tw`mx-auto w-full`}>
                    <Text style={tw`text-[#808080] text-[16px] mb-2 w-[80%]`}>Full Name</Text>
                    <View style={tw`w-full flex flex-row rounded-[10px] pl-4 py-5 bg-[#F5F5F5]`}>
                        <TextInput
                            placeholderTextColor="#35377B"
                            onChangeText={(text: string): void => {
                                setfullname(text);
                            }}
                            style={tw`text-[#000]`}
                            value={fullname}
                        />
                    </View>
                    <Text style={tw`text-[#808080] text-[16px] mb-2 w-[80%] mt-5`}>Phone Number</Text>
                    <View style={tw`w-full flex flex-row rounded-[10px] pl-4 py-5 bg-[#F5F5F5]`}>
                        <TextInput
                            placeholderTextColor="#35377B"
                            onChangeText={(text: string): void => {
                                setphonenumber(text);
                            }}
                            style={tw`text-[#000]`}
                            value={phonenumber}
                        />
                    </View>
                    <Text style={tw`text-[#808080] mb-2 text-[16px] w-[80%] mt-5`}>Email Address</Text>
                    <View style={tw`w-full flex flex-row rounded-[10px] pl-4 py-5 bg-[#F5F5F5]`}>
                        <TextInput
                            placeholderTextColor="#35377B"
                            onChangeText={(text: string): void => {
                                setEmail(text);
                            }}
                            style={tw`text-[#000]`}
                            value={email}
                        />
                    </View>
                    {/* Date of birth */}
                    <Text style={tw`text-[#808080] mb-2 text-[16px] w-[80%] mt-5`}>Date of birth</Text>
                    <View style={tw`w-full flex flex-row justify-between`}>
                        <View style={tw`w-[31%] flex flex-row rounded-[10px] pl-4 py-5 bg-[#F5F5F5]`}>
                            <TextInput
                                placeholderTextColor="#80808070"
                                onChangeText={(text: string): void => {
                                    setday(text);
                                }}
                                placeholder="DD"
                                style={tw`text-[#000]`}
                                value={day}
                                keyboardType="number-pad"
                            />
                        </View>
                        <View style={tw`w-[31%] flex flex-row rounded-[10px] pl-4 pt-6 pb-5 bg-[#F5F5F5] relative`}>
                            <Text style={tw`text-[${month ? "#000" : "#80808070"}]`}>{month ? month : 'Month'}</Text>
                            <TouchableOpacity style={tw`absolute right-2 top-[28px]`} onPress={()=>setshowmonth(!showmonth)}>
                                <AntDesign name="down" size={15} color="#3E3E3E" />
                            </TouchableOpacity>
                        </View>
                        <View style={tw`w-[31%] flex flex-row rounded-[10px] pl-4 py-5 bg-[#F5F5F5]`}>
                            <TextInput
                                placeholderTextColor="#80808070"
                                onChangeText={(text: string): void => {
                                    setyear(text);
                                }}
                                placeholder="YYYY"
                                style={tw`text-[#000]`}
                                value={year}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                    {showmonth && 
                    <ScrollView showsVerticalScrollIndicator={true} style={tw`h-[250px] mx-auto rounded-2 border px-5 mt-2 border-[#00000010]`}>
                        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"].map((data)=> 
                        
                            <TouchableOpacity onPress={()=>setmonthtype(data)} key={data}><Text style={tw`font-bold mt-1 mb-2 text-[#0B66FF] text-[16px]`}>{data}</Text></TouchableOpacity>                        
                        
                        )}
                    </ScrollView>
                    }
                    {/* Gender */}
                    <Text style={tw`text-[#808080] mb-2 text-[16px] w-[80%] mt-5`}>Gender</Text>
                    <View style={tw` flex flex-row justify-between `}>
                        <TouchableOpacity
                            onPress={() => setgender("Male")}
                            style={tw`flex flex-row h-[64px] w-[48%] text-center border border-[#0B66FF] rounded-[8px] justify-center items-center bg-[${gender === "Male" ? "#0B66FF" : "#fff"}] `}
                        >
                            <Text style={tw`flex-1 text-lg text-center text-[${gender === "Male" ? "#fff" : "#0B66FF"}]`}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setgender("Female")}
                            style={tw`flex flex-row h-[64px] w-[48%] border border-[#0B66FF]  text-center rounded-[8px] justify-center items-center bg-[${gender === "Female" ? "#0B66FF" : "#fff"}]`}
                        >
                            <Text style={tw`flex-1 text-lg text-center text-[${gender === "Female" ? "#fff" : "#0B66FF"}]`}>Female</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={tw`text-[#808080] mb-2 mt-5 text-[16px] w-[80%]`}>Create password</Text>
                    <View style={tw`flex flex-row py-5 pl-4 rounded-[10px] w-full items-center bg-[#F5F5F5]`}>
                        <TextInput
                            style={tw` text-[#000]`}
                            onChangeText={(text: string): void => {
                                setpassword(text);
                            }}
                            value={password}
                            placeholderTextColor="#35377B"                            
                            secureTextEntry={showPassword}
                        />

                        <View style={tw`underline text-[13px] font-semibold text-[#fff] ml-auto mr-4`}>
                            <FontAwesome name="eye-slash" size={24} color={password.length > 0 ? (!showPassword ? "#fff" : "#0B66FF") : "#808080"} onPress={() => setShowPassword(!showPassword)} />
                        </View>
                    </View>
                    <Text style={tw`text-[#808080] mb-2 mt-5 text-[16px] w-[80%]`}>Confirm password</Text>
                    <View style={tw`flex flex-row py-5 pl-4 rounded-[10px] w-full items-center bg-[#F5F5F5]`}>
                        <TextInput
                            style={tw` text-[#000]`}
                            onChangeText={(text: string): void => {
                                setcpassword(text);
                            }}
                            value={cpassword}
                            placeholderTextColor="#35377B"                            
                            secureTextEntry={showPassword}
                        />

                        <View style={tw`underline text-[13px] font-semibold text-[#fff] ml-auto mr-4`}>
                            <FontAwesome name="eye-slash" size={24} color={password.length > 0 ? (!showPassword ? "#fff" : "#0B66FF") : "#808080"} onPress={() => setShowPassword(!showPassword)} />
                        </View>
                    </View>

                    <View style={tw`flex flex-row my-7`}>
                        <Checkbox shadow={0} value="test" accessibilityLabel="This is a dummy checkbox" bgColor={"#030F3A"} style={tw`bg-transparent`}>
                            <Text style={tw`text-[14px] text-black`}>
                                By continuing you agree to <Text style={tw`text-[#0B66FF]`}>terms & conditions</Text>
                            </Text>
                        </Checkbox>
                    </View>
                    <TouchableOpacity
                        disabled={isLoading}
                        onPress={()=>navigation.navigate("BottomTabs")}
                        style={tw`mb-5 flex flex-row h-[64px] border-0 text-center rounded-[8px] justify-center items-center bg-[${!isLoading ? "#0B66FF" : "#0B66FF3a"}]`}
                    >
                        {isLoading ? <ActivityIndicator /> : <Text style={tw`flex-1 text-lg text-[#fff] text-center`}>Next</Text>}
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Social Icons */}
            <View style={tw`mb-4`}>
                <View style={tw`flex flex-row items-center m-4`}>
                    <View style={tw`flex-1 h-[1px] bg-[#1D3177]`} />
                    <View style={tw`px-2`}>
                        <Text style={tw``}>or continue with</Text>
                    </View>
                    <View style={tw`flex-1 h-[1px] bg-[#1D3177]`} />
                </View>

                <View style={tw`w-[80%] mx-auto justify-between flex flex-row `}>
                    <TouchableOpacity style={tw`px-3 py-3 flex flex-row justify-center rounded-full items-center bg-[#EAEAEA]`}>
                        <Image source={require("../assets/google.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`px-4 py-3 flex flex-row justify-center rounded-full items-center bg-[#EAEAEA]`}>
                        <Image source={require("../assets/facebook.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`px-4 py-3 flex flex-row justify-center rounded-full items-center bg-[#EAEAEA]`}>
                        <Image source={require("../assets/twitter.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
