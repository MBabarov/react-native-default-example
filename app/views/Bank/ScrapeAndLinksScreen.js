import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class FirstScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> Bank Scrape & Bank Links Page</Text>
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