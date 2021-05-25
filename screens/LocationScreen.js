import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Platform
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default class LocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      isRefresh: false
    };
  }

  componentDidMount() {
    this.getIssLocation();
  }

  getIssLocation = () => {
    axios
      .get('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => {
        this.setState({ location: response.data });
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView
            style={{
              marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
            }}
          >
            <ImageBackground
              source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8881f3cc8954db9da4ec27b345266e85"
              style={styles.backgroundImage}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={styles.title}>ISS Location</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={{ width: 100, height: '100%', alignItems: 'center' }}
                  onPress={() => {
                    this.setState({});
                  }}
                >
                  <Image
                    source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/88e16a95c27124470a855e107b5f627e"
                    style={{ width: 50, height: 50 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.mapContainer}>
                <MapView
                  style={styles.map}
                  region={{
                    latitude: this.state.location.latitude,
                    longitude: this.state.location.longitude,
                    latitudeDelta: 100,
                    longitudeDelta: 100
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: this.state.location.latitude,
                      longitude: this.state.location.longitude
                    }}
                  >
                    <Image
                      source="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0358c80c6baa311e6e9e72523420c0ab"
                      style={{ height: 50, width: 50 }}
                    />
                  </Marker>
                </MapView>
              </View>
            </ImageBackground>
          </SafeAreaView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }
});
