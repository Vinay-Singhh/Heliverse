import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const Screen2 = ({ navigation }) => {
  const userProfileAnimation = useRef(new Animated.Value(0)).current;

  const curtainPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateUserProfile();

    animateCurtain();

    const timeout = setTimeout(() => {
      navigation.navigate('Screen3');
    }, 8000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  const animateUserProfile = () => {
    Animated.timing(userProfileAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 500,
    }).start();
  };

  const animateCurtain = () => {
    Animated.timing(curtainPosition, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const handleArrowPress = () => {
    Animated.timing(userProfileAnimation, {
      toValue: windowWidth,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      userProfileAnimation.setValue(0); // Reset the animation value
      animateUserProfile(); // Trigger the animation again
      // navigation.navigate('Screen3');
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/curtain.png')}
        style={[
          styles.leftCurtain,
          {
            transform: [
              {
                translateX: curtainPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-windowWidth, 0],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.Image
        source={require('./assets/curtain.png')}
        style={[
          styles.rightCurtain,
          {
            transform: [
              {
                translateX: curtainPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: [windowWidth / 2, 0],
                }),
              },
            ],
          },
        ]}
      />
      {/* <Image source={require('./assets/curtain.png')} style={styles.leftCurtain} />
      <Image source={require('./assets/curtain.png')} style={styles.rightCurtain} /> */}
      <Image source={require('./assets/award_bg.png')} style={styles.backgroundImage} />
      <Image source={require('./assets/awardPlatform.png')} style={styles.platformImage} />
      <Animated.View
        style={[
          styles.avatarContainer,
          {
            transform: [
              {
                translateX: userProfileAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [windowWidth, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Image source={require('./assets/avtar2.png')} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.dListerText}>D-Lister</Text>
          <Text style={styles.nameText}>Sally</Text>
        </View>

      </Animated.View>

      <Text style={styles.centerText}>Gave U Some Love</Text>
      <Image source={require('./assets/main-heart.png')} style={styles.heart} />
      <Text style={styles.heartText}>15000</Text>
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
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 40,
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: 'yellow',
    borderRadius: 30,
  },
  textContainer: {
    alignItems: 'center',
  },
  dListerText: {
    fontSize: 30,
    color: 'lightyellow',
    marginLeft: 25,
  },
  nameText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    marginTop: 8,
  },
  centerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: windowHeight / 2 - 200,
    left: 0,
    right: 0,
    color: 'lightyellow',
  },
  girlImage: {
    position: 'absolute',
    bottom: 38,
    width: '42%',
    height: '42%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  heart: {
    position: 'absolute',
    width: '45%',
    height: '23%',
    alignSelf: 'center',
    top: 180,
  },
  heartText: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    top: '38%',
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
  leftCurtain: {
    position: 'absolute',
    left: 0,
    height: '100%',
    resizeMode: 'cover',
  },
  rightCurtain: {
    position: 'absolute',
    right: 0,
    height: '100%',
    resizeMode: 'cover',
  },
});


export default Screen2;