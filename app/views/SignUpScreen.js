import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class FirstScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> Sign up page </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textFirst: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});
export default FirstScreen;