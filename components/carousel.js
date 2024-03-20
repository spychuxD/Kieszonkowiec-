import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const { width, height } = Dimensions.get('window');

const data = {
    data: [0.2, 0.6, 0.8],
    colors: [
        "#880015",
        "#038E00",
        "#FFC90E",
    ],
};
const styles = StyleSheet.create({
    carouselContainer: {
        height: height/4, // Możesz dostosować wysokość karuzeli
    },
    itemText: {
        fontSize: 24, // Wielkość czcionki tekstu w elemencie
    },
    dotStyle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#595959',
        marginHorizontal: 5,
    },
    activeDotStyle: {
        backgroundColor: '#ffffff',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
});

const CarouselItem = ({ text }) => (
    <ProgressChart
            data={data}
            width={width}
            height={height/4}
            strokeWidth={16}
            radius={32}
            withCustomBarColorFromData={false}
            chartConfig={{
                backgroundGradientFrom: "#0F2027",
                backgroundGradientTo: "#2C5364",
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                decimalPlaces: 2,
                useShadowColorFromDataset: false // optional
            }}
            hideLegend={true}
            style={{ borderRadius: 10}}
        />
);

const MyCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef();

    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        setActiveIndex(selectedIndex);
    };

    return (
        <SafeAreaView>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={handleScroll}
                scrollEventThrottle={16} // Optymalizacja wydajności
                ref={scrollViewRef}
                style={styles.carouselContainer}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </ScrollView>
            <View style={styles.dotsContainer}>
                {[...Array(3).keys()].map((_, index) => (
                    <View key={index} style={[styles.dotStyle, activeIndex === index && styles.activeDotStyle]} />
                ))}
            </View>
        </SafeAreaView>
    );
};

export default MyCarousel;
