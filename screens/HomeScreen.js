import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8881f3cc8954db9da4ec27b345266e85"
          style={styles.backgroundImage}
        >
          <Text style={styles.text}>ISS Tracker App</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Location')}
          >
            <Text style={styles.buttonText}>ISS Location</Text>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'light',
                  textAlign: 'left',
                  fontSize: 13,
                  marginTop: 5
                }}
              >
                Know More
              </Text>
              <Image
                source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1b4f29584e3b19f6d495fd913071885d"
                style={{ width: 55, height: 50, marginLeft: 5 }}
              />
            </View>
            <Image
              source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0358c80c6baa311e6e9e72523420c0ab"
              style={styles.iconImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Meteors')}
          >
            <Text style={styles.buttonText}>Meteors</Text>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'light',
                  textAlign: 'left',
                  fontSize: 13,
                  marginTop: 5
                }}
              >
                Know More
              </Text>
              <Image
                source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1b4f29584e3b19f6d495fd913071885d"
                style={{ width: 55, height: 50, marginLeft: 5 }}
              />
            </View>
            <Image
              source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/7004f8ed42a74db37faf268b1b47bfe6"
              style={styles.iconImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Updates')}
          >
            <Text style={styles.buttonText}>Updates</Text>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'light',
                  textAlign: 'left',
                  fontSize: 13,
                  marginTop: 5
                }}
              >
                Know More
              </Text>
              <Image
                source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1b4f29584e3b19f6d495fd913071885d"
                style={{ width: 55, height: 50, marginLeft: 5 }}
              />
            </View>
            <Image
              source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/88e16a95c27124470a855e107b5f627e"
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <Image
            style={{ width: '100%', height: '50%', marginTop: 60 }}
            source={{
              uri:
                'https://media.gettyimages.com/videos/cartoon-rocket-ship-flying-on-blue-background-loopable-animation-video-id1177608201?s=640x640'
            }}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 35
  },
  buttonText: {
    color: '#81D8F7',
    fontSize: 23,
    fontWeight: 'semibold',
    fontFamily: 'Open Sans',
    textAlign: 'left'
  },
  button: {
    width: '95%',
    height: '20%',
    backgroundColor: '#03247C',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 50,
    borderRadius: 15
  },
  iconImage: {
    position: 'absolute',
    width: 150,
    height: 100,
    resizeMode: 'contain',
    right: -3,
    top: 'center'
  }
});
