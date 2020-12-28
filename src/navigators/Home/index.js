/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Size,
  gradientColors,
  itemsCenter,
  roundMediumSizeButtonStyle,
} from 'src/styles'
import { Text, View } from 'react-native';

import Feeds from './Feeds';
import Footer from 'src/components/Footer';
import GradientButton from 'src/components/GradientButton';
import React from 'react';
import styles from './styles';

const Home = ({ navigation }) => {
  const handleViewMore = () => {
    
  };

  return (
    <View>
      <Feeds />
      {/* <GradientButton 
        onPress={handleViewMore}
        gradientColors={gradientColors}
        buttonStyle={roundMediumSizeButtonStyle}
        text="View More Post"
        textColor="white"
        fontSize={Size()}
        style={styles.gradientButton}
      /> */}
      <Footer style={styles.footer} />
    </View>
  );
};

export default Home;
