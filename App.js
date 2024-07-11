import { StyleSheet, Text, View ,Button } from 'react-native';
import * as Speech from "expo-speech";

export default function App() {
  const thingsToSay = "एक समय में एक काम करो , और ऐसा करते समय अपनी पूरी आत्मा उसमे डाल दो और बाकी सब कुछ भूल जाओ .";

  const speak = () => {
    Speech.speak(thingsToSay);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
         {thingsToSay}
      </Text>
      <Button 
        title='Start Listening'
        onPress={speak}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text : {
    marginTop: 10,
    color : "black",
    padding:10,
  }
});
