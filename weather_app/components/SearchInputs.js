import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class SearchInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: ""
    };
  }

  handleChangeText = newLocation => {
    this.setState({ text: newLocation });
    // console.log(newLocation);
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;
    onSubmit(text);
    this.setState({ text: "" });
  };

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          placeholdtranserTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          //   value={this.props.location}
          //   value={newLocation}
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "80%",
    backgroundColor: "#666",
    marginHorizontal: "10%",
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
    alignContent: "center"
  },
  textInput: {
    flex: 1,
    color: "white",
    alignSelf: "center"
  }
});
