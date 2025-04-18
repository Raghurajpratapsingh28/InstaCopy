import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { act } from 'react'
import { styles } from '@/styles/auth.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/Constants/theme'
import { useSSO } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

export default function login() {
    const {startSSOFlow} = useSSO();
    const router = useRouter();

const  handleGoogleSignIn = async () => { 
try {
 const {createdSessionId,setActive} =  await startSSOFlow({strategy:"oauth_google"})

 if(setActive&&createdSessionId){
     setActive({session:createdSessionId})
        router.replace('/(tabs)')
 }
} catch (error) {
    console.log(error);  
}
}



  return <View style={styles.container}>
    <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>InstaCopy</Text>
        <Text style={styles.tagline}>dont miss anything</Text>
    </View>

    <View style={styles.illustrationContainer}>
    <Image
    source={require('@/assets/images/login.svg')}
    style={styles.illustration}
    resizeMode='cover'
    />
    </View>

    <View style={styles.loginSection}>
        <TouchableOpacity style={styles.googleButton}
        onPress={handleGoogleSignIn}
        activeOpacity={0.9}
        >
            <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={24} color={COLORS.surface} />
            </View>
         
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          
        </TouchableOpacity>
        <Text style={styles.termsText}>by continuing you afree all terms and condition</Text>

    </View>
    </View>
  
}