import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.text}>Projected Portfolio (Initial Questions) page</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default HomeScreen;