import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";
import uuidv4 from "uuid/v4";
export default class App extends React.Component {
  state = {
    timers: [
      {
        title: "Mow the",
        project: "House Chores",
        id: uuidv4(),
        elapsed: "2323232",
        isRunning: true
      },
      {
        title: "Bake Cake",
        project: "Kitche Chores",
        id: uuidv4(),
        elapsed: "3323232",
        isRunning: false
      }
    ]
  };
  render() {
    const { timers } = this.state;
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timeList}>
          <ToggleableTimerForm isOpen={false} />
          {timers.map(({ title, project, id, elapsed, isRunning }) => (
            <EditableTimer
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignContent: "center"
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
