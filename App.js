import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/loginScreen";
import HomeScreen from "./screens/homeScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthProvider } from "./contexts/AuthContext"; // Importuj AuthProvider
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import styles from "./styles";
import theme from "./theme";

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Wydatki") {
            iconName = focused ? "cash-multiple" : "cash";
          } else if (route.name === "Harmonogram") {
            iconName = focused ? "calendar-multiple" : "calendar";
          } else if (route.name === "Listy") {
            iconName = focused ? "text-box-multiple" : "text-box";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.light.accent,
        tabBarInactiveTintColor: theme.light.primary,
        tabBarActiveBackgroundColor: theme.light.linearGradient[1], // gradien jest z 5 kolorów
        tabBarInactiveBackgroundColor: theme.light.linearGradient[0],
      })}
    >
      <Tab.Screen
        name="Wydatki"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Harmonogram"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Listy"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        >
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
