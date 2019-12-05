import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  ActivityIndicator,
  StatusBar
} from "react-native";
import SearchInputs from "./components/SearchInputs";
import getImageForWeather from "./utils/getImageForWeather";
import { fetchLocationId, fetchWeather } from "./utils/api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Mumbai",
      loading: false,
      error: false,
      temperature: 0,
      weather: ""
    };
  }

  componentDidMount() {
    this.handleUpdateLocation("San Fransisco");
    // console.log("Component mounted");
  }
  handleUpdateLocation = async city => {
    if (!city) return;
    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(
          locationId
        );
        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true
        });
      }
    });
  };
  render() {
    const { location, weather, temperature, loading, error } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="dark-content" />
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color="pink" size="large" />

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}></Text>
                )}
                {!error && (
                  <View>
                    <Text style={[styles.textStyle, styles.largeText]}>
                      {location}
                    </Text>
                    <Text style={[styles.textStyle, styles.smallText]}>
                      {weather}
                    </Text>
                    <Text style={[styles.textStyle, styles.largeText]}>
                      {`${Math.round(temperature)}`}
                    </Text>
                  </View>
                )}
                <SearchInputs
                  placeholder="Enter city"
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495E",
    alignItems: "center",
    justifyContent: "center"
  },
  red: {
    color: "red"
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: "white"
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18,
    opacity: 0.5
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "stretch"
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  }
});
