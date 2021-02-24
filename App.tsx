import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const [isStart, setIsStart] = useState(false);
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/pixa.mp3")
    );
    setSound(sound);

    await sound.playAsync();
    await sound.setIsLoopingAsync(true);
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const onButtonPress = () => {
    setIsStart(true);
    playSound();
  };

  return (
    <View style={styles.container}>
      {isStart ? (
        <View style={{ width: "100%" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("./assets/daniel.gif")}
          />
        </View>
      ) : (
        <>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Image source={require("./assets/logo.jpeg")} />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.button}>
              <TouchableOpacity onPress={onButtonPress}>
                <Text style={styles.label}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002639",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 0.6,
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f6303f",
    padding: 10,
    minWidth: 150,
    borderRadius: 25,
  },
  label: {
    fontSize: 20,
  },
});
