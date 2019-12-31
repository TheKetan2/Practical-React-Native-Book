import { Constants } from "expo";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  StatusBar,
  NetInfo
} from "react-native";
import React from "react";

const statusHeight = Platform.OS === "ios" ? StatusBar.height : 0;

class Status extends React.Component {
  state = {
    info: null
  };

  render() {
    const { info } = this.state;
    const isConnected = info !== "none";
    const backgroundColor = isConnected ? "white" : "red";
    if (Platform.OS === "ios") {
      return <View style={[styles.status, { backgroundColor }]}></View>;
    }
    return (
      <View>
        <Text>{"akakak"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight
  }
});

export default Status;
