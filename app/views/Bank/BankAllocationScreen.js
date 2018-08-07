import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Tabs, Tab } from 'native-base';

class BankAllocationScreen extends React.Component {
  render() {
    return (
      <Tabs style={styles.tabs}>
        <Tab heading="Tab1" style={styles.tab}>
         <Text>Tab1</Text>
        </Tab>
        <Tab heading="Tab2" style={styles.tab}>
          <Text>Tab2</Text>
        </Tab>
        <Tab heading="Tab3" style={styles.tab}>
          <Text>Tab3</Text>
        </Tab>
      </Tabs>
    );
  }
}
const styles = StyleSheet.create({
  tabs: {
    backgroundColor: '#364E80'
  },
  tab: {
    backgroundColor: '#364E80',
    padding: 20,
  },
});
export default BankAllocationScreen;