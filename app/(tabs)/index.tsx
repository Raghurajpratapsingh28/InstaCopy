import { Text, View, StyleSheet, TouchableOpacity, Pressable, Image } from "react-native";
import {styles} from "@/styles/auth.styles"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      
      <Link href={"./notifications"} > go to notifications</Link>
      <Link href={"./profile"} > go to profile</Link>
    </View>
  );
}


