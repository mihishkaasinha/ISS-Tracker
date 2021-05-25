import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class MeteorsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Image
            source='https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/801188bc212e661f24c9190aba3f9424'
            style={{ width: 55, height: 50, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Meteors Screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DCDDA'
  },
  text: {
    textAlign: 'center'
  }
});
