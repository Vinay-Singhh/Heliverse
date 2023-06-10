import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const Screen3 = ({ navigation }) => { 
  const [count, setCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < 40000) {
          return prevCount + 1000;
        }
        return prevCount;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleArrowPress = () => {
    navigation.navigate('Screen1');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/award_bg.png')} style={styles.backgroundImage} />
      <Image source={require('./assets/awardPlatform.png')} style={styles.platformImage} />

      <Text style={styles.centerText}>4 Friends Gave U Some Love</Text>
      <Image source={require('./assets/main-heart.png')} style={styles.heart} />
      <Text style={styles.heartText}>{count}</Text>
      <Image source={require('./assets/girlClap.png')} style={styles.girlImage} />

      <TouchableOpacity onPress={handleArrowPress}>
        <Image source={require('./assets/arrow.png')} style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    ...StyleSheet.absoluteFillObject,
  },
  platformImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  centerText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    color: 'lightyellow',
  },
  girlImage: {
    position: 'absolute',
    bottom : 30,
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  heart: {
    position: 'absolute',
    width: '45%',
    height: '23%',
    alignSelf: 'center',
    top: 150,
  },
  heartText: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    top: '33%',
    left: 0,
    right: 0,
  },
  arrow: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 50,
    bottom: 150,
  },
});

export default Screen3;
