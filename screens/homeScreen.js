import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/header";
import MyCarousel from "../components/carousel.js";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { ProgressChart } from "react-native-chart-kit";
import styles from "../styles";
import theme from "../theme";
import { hexToRgba } from "../functions/common";
import { BlurView } from "@react-native-community/blur";
import Swiper from "react-native-swiper";
const screenWidth = Dimensions.get("window").width - 100;
const data = {
  // labels: [
  //     "Mieszkanie",
  //     "Jedzenie",
  //     "Inne",
  // ], // optional
  data: [0.2, 0.6, 0.8],
  colors: ["#880015", "#038E00", "#FFC90E"],
};

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleNavigation = (id) => {
    navigation.navigate({ id });
  };
  const chartTitles = [
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
  ];
  const buttons = [
    { id: 1, key: "1", title: "DODAJ WYDATKI", icon: "cash-minus" },
    { id: 2, key: "2", title: "ZAPLANUJ BUDŻET", icon: "chart-timeline" },
    { id: 3, key: "3", title: "TABLICA ZADAŃ", icon: "table-clock" },
    { id: 4, key: "4", title: "ZWIERZĘTA", icon: "cat" },
    { id: 5, key: "5", title: "SAMOCHODY", icon: "car-info" },
    { id: 6, key: "6", title: "LISTY", icon: "clipboard-list-outline" },
  ];

  return (
    <SafeAreaView style={styles.flex1}>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
      {/* <View style={{ flex: 1 }}> */}
      <LinearGradient
        style={styles.linearGradient}
        colors={theme.light.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Header title="DOM" backButton={false}></Header>
        <View>
          <MyCarousel></MyCarousel>
        </View>
        <View style={styles.pressableTopNav}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? hexToRgba(theme.light.linearGradient[0], 0.9)
                  : hexToRgba(theme.light.linearGradient[0], 0.8),
              },
              styles.pressableNewSpending,
            ]}
            onPress={() => handleNavigation()}
          >
            <Icon name="cash-minus" size={32} color={theme.light.primary} />
            {/* <Text numberOfLines={1} style={[styles.textCenter, styles.textBold, styles.textColorPrimary, styles.textSize20]}>NOWY</Text> */}
          </Pressable>
        </View>
        <FlatList
          data={buttons}
          renderItem={({ item }) => (
            <View style={styles.spendingItem}>
              <View style={styles.spendingItemHeader}>
                <Icon name="cat" size={32} color={theme.light.primary} />
                <Text style={[styles.textColorPrimary, styles.textBold]}>
                  Zwierzęta {item.id}
                </Text>
              </View>
              <View style={styles.spendingItemBody}>
                <View style={styles.spendingItemHeader}>
                  <Icon
                    name="cash-plus"
                    color={theme.light.success}
                    size={32}
                  />
                  <Text style={[styles.textColorSuccess, styles.textBold]}>
                    937,53 zł
                  </Text>
                </View>
                <View style={styles.spendingItemHeader}>
                  <Icon name="cash-minus" color={theme.light.error} size={32} />
                  <Text style={[styles.textColorError, styles.textBold]}>
                    62,47 zł
                  </Text>
                </View>
                <View style={styles.spendingItemHeader}>
                  <Icon
                    name="cash-lock"
                    color={theme.light.warning}
                    size={32}
                  />
                  <Text style={[styles.textColorWarning, styles.textBold]}>
                    1000,00 zł
                  </Text>
                </View>
              </View>
              <View>
                <FlatList
                  style={{ marginTop: 8 }}
                  data={buttons}
                  renderItem={({ item }) => (
                    <View style={styles.spendingItemFooter}>
                      <Text style={[styles.textColorPrimary, styles.textBold]}>
                        17.03
                      </Text>
                      <Text style={[styles.textColorPrimary, styles.textBold]}>
                        Zwierzęta
                      </Text>
                      <Text style={[styles.textColorPrimary, styles.textBold]}>
                        62,47 zł
                      </Text>
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                ></FlatList>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </LinearGradient>
      {/* </View> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
