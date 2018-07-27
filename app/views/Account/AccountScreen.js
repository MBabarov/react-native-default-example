import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class SecondScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textSecond}> Account details page </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textSecond: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});
export default SecondScreen;