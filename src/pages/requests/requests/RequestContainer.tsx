import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import imageStyles from '../../../styles/imageStyles';
import textStyles from '../../../styles/textStyles';

const imageLink = require('../../../assets/pexels-chevanon-323503.jpg');

export default class RequestContainer extends Component {
  render() {
    return (
      <View style={styles.requestContainer}>
        <Text style={textStyles.heading}>Requests</Text>
        <View style={styles.requestCard}>
          <Image
            source={imageLink}
            style={[imageStyles.avatarImage, styles.image]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  requestContainer: {
    padding: 8,
  },
  requestCard: {},
  image: {
    height: 80,
    width: 80,
  },
});
