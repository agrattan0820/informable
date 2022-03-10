import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Leaderboards from "./Leaderboards";
import Settings from "./Settings";

import OpacityButton from "../components/OpacityButton";

import InformableLogo from "../assets/Informable_Logo.png";
import NLPLogo from "../assets/NLP_Logo.png";
import { colors } from "../styles/base";

const Tab = createBottomTabNavigator();

const DashboardHome = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#014E6F", "#223054"]}
        style={styles.gradientBackground}
      />
      <Text style={styles.title}>Select a Mode</Text>
      <Text style={styles.subtitle}>Lorem ipsum dolor amit.</Text>
      <TouchableOpacity
        style={[styles.modeButton, { backgroundColor: "#A038B1" }]}
      >
        <Text style={styles.modeButtonText}>Fact</Text>
        <View
          style={{
            width: 32,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: colors.secondary.purple,
            marginHorizontal: 8,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            Or
          </Text>
        </View>
        <Text style={styles.modeButtonText}>Opinion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modeButton,
          { backgroundColor: "#2068B7", marginTop: 8 },
        ]}
      >
        <Text style={styles.modeButtonText}>Evidence</Text>
        <View
          style={{
            width: 32,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: colors.secondary.purple,
            marginHorizontal: 8,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            Or
          </Text>
        </View>
        <Text style={styles.modeButtonText}>Not</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modeButton,
          { backgroundColor: "#35C3E9", marginTop: 8 },
        ]}
      >
        <Text style={styles.modeButtonText}>Ad</Text>
        <View
          style={{
            width: 32,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: colors.secondary.purple,
            marginHorizontal: 8,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            Or
          </Text>
        </View>
        <Text style={styles.modeButtonText}>Not</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modeButton,
          { backgroundColor: "#6932EB", marginTop: 8 },
        ]}
      >
        <Text style={styles.modeButtonText}>News</Text>
        <View
          style={{
            width: 32,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: colors.secondary.purple,
            marginHorizontal: 8,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            Or
          </Text>
        </View>
        <Text style={styles.modeButtonText}>Opinion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.mixUpMode, { marginTop: 8 }]}>
        <FontAwesome
          name="lock"
          size={32}
          color="#164F66"
          style={{ marginTop: -32, marginBottom: 4 }}
        />
        <Text style={styles.mixUpModeText}>Mix-Up {"\n"} Mode</Text>
      </TouchableOpacity>
      <OpacityButton
        buttonType="custom"
        buttonStyles={styles.forgotPassword}
        buttonText={styles.forgotPasswordText}
      >
        Want more Checkology?
      </OpacityButton>
      <StatusBar style="light" />
    </View>
  );
};

export default function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "gear";
          } else if (route.name === "Leaderboards") {
            iconName = "trophy";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary.teal,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Leaderboards" component={Leaderboards} />
      <Tab.Screen
        name="Home"
        component={DashboardHome}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  informableLogo: {
    width: 118,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    marginBottom: 32,
  },
  modeButton: {
    backgroundColor: colors.tertiary,
    width: "100%",
    maxWidth: 308,
    borderRadius: 8,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modeButtonText: {
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
  },
  mixUpMode: {
    backgroundColor: colors.primary.teal,
    width: "100%",
    maxWidth: 308,
    height: 220,
    borderRadius: 8,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  mixUpModeText: {
    fontSize: 28,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 308,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.secondary.slateBlue,
    borderStyle: "solid",
    color: colors.secondary.slateBlue,
    fontSize: 16,
    textAlign: "center",
  },
  createAccountButton: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 308,
    padding: 8,
    borderWidth: 1,
    borderColor: "#004F71",
    borderStyle: "solid",
    marginTop: 16,
    fontSize: 16,
  },
  createAccountButtonText: {
    textAlign: "center",
    color: "#004F71",
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 16,
  },
  forgotPasswordText: {
    textAlign: "center",
    color: "white",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  dontHaveAnAccount: {
    position: "absolute",
    bottom: 100,
  },
  dontHaveAnAccountText: {
    textAlign: "center",
    color: "white",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  newsLitImage: {
    width: 97,
    height: 82,
    marginTop: 32,
  },
});