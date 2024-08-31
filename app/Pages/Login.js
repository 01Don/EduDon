import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login() {
  return (
    <View>
        <Image source={require('../../assets/images/login.png')}/>
     <View style={style.container}>
     <Text style={style.welcomeText
      }>Welcome to EduDon</Text>
      <Text style={{textAlign:'center', 
        fontSize:20, marginTop:80, 
        fontWeight:400}}>Login/SiginUp</Text>
        <View style={style.button}>
        <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}}/>
            <Text style={{color:Colors.white}}>Sigin In With Google</Text>
        </View>
     </View>
    
    </View>
  )
}

const style = StyleSheet.create({
   container:{
    paddingTop: 40,
    marginTop:-25,
    backgroundColor:'#fff',
    borderTopRightRadius:30,
    borderTopLeftRadius:30
   },
   
    welcomeText:{
        fontSize:35,
        textAlign:'center',
        fontWeight:'bold'
    },
    button:{
        backgroundColor:Colors.primary,
        padding:10,
        margin:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})