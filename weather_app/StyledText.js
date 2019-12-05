import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class StyledText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontWeight: "bold"
  }
});
