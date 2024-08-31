import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as AuthSession from 'expo-auth-session';
export default function Login() {
WebBrowser.maybeCompleteAuthSession();
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '926298109819-8bk0jn89g8oq9j13dhoe99pl1ns6snhv.apps.googleusercontent.com',
        webClientId: '926298109819-4hl68v8hac37klbv60pijp2g6b3tosiu.apps.googleusercontent.com', 
    });

    return (
        <View>
            <Image source={require('../../assets/images/login.png')} />
            <View style={style.container}>
                <Text style={style.welcomeText}>Welcome to EduDon</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 80, fontWeight: '400' }}>Login/Sign Up</Text>
                <TouchableOpacity style={style.button} onPress={() => promptAsync()}>
                    <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
                    <Text style={{ color: Colors.white }}>Sign In With Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -25,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    welcomeText: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});
