import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Wizard from '../../components/Wizard';
import Step from '../../components/Step';

class BankScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}>Bank Setting</Text>
        <Wizard onChangeValue={()=>{}} values="values">
          <Step onChangeValue={()=>{alert(1)}} values="values">
            {() => <Text>1</Text>}
          </Step>
          <Step onChangeValue={()=>{alert(2)}} values="values">
            {() => <Text>2</Text>}
          </Step>
        </Wizard>
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
export default BankScreen;