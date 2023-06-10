import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Screen1 = ({ navigation }) => {
    const [time, setTime] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Screen2');
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigation]);

    useEffect(() => {
        const interval = setInterval(() => {
            updateTime();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const updateTime = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        setTime({ hours, minutes, seconds });
    };
    return (
        <View style={styles.container}>
            <Image source={require('./assets/award_bg.png')} style={styles.backgroundImage} />
            <Image source={require('./assets/castingLogo.png')} style={styles.logo} />
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{`${time.hours}:${time.minutes}:${time.seconds}`}</Text>
            </View>
            <Text style={styles.castingText}>Casting Call</Text>
            <Text style={styles.centerText}>The Results R In!</Text>
            <Image source={require('./assets/awardPlatform.png')} style={styles.platformImage} />
            <Image source={require('./assets/girlClap.png')} style={styles.girlImage} />
        </View>
    );
};


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// const platformImageHeight = 50; // Set the desired height of the platform image


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    backgroundImage: {
        width: windowWidth,
        height: windowHeight,
        // resizeMode: 'cover',
        ...StyleSheet.absoluteFillObject,
    },
    logo: {
        position: 'absolute',
        width: 100,
        height: 100,
        top: 50,
        alignSelf: 'center',
    },
    centerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        top: 230,
        left: 0,
        right: 0,
        color: 'lightyellow', // Adjust the text color as needed
    },
    timerContainer: {
        position: 'absolute',
        top: 105, // Adjust the top position as needed
        left: 0,
        right: -5,
        alignItems: 'center',
    },
    timerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#BEBEBE',
        transform: [{ rotate: '-15deg' }], // Rotate the timerContainer by -30 degrees

    },
    castingText: {
        position: 'absolute',
        top: 150,
        left: 0,
        right: 0,
        color: '#F535AA',
        fontSize: 24,
        textAlign: 'center',
        transform: [{ rotate: '-13deg' }], // Rotate the timerContainer by -30 degrees
    },
    platformImage: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        left: 0,
        right: 0,
    },
    girlImage: {
        position: 'absolute',
        bottom: 30,
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});

export default Screen1;
