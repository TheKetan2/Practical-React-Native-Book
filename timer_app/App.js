import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <Scrollview style={styles.timeList}>
          <ToggleableTimerForm isOpen={false} />
          <EditableTimer
            id="1"
            title="Mow the lawn"
            project="House Chores"
            elapsed="8986300"
            isRunning
          />
          <EditableTimer
            id="2"
            title="Bake squash"
            project="Kitchen Chores"
            elapsed="3232323"
            editFormOpen
          />
        </Scrollview>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d6d7da"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  timeList: {
    paddingBottom: 15
  }
});
