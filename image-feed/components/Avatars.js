import React from "react";
import {
  ColorPropType,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from "react-native";
import PropTypes from "prop-types";

export default function Avatar({ size, backgroundColor, initials }) {
  Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: ColorPropType.isRequired
  };

  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor
  };

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});
