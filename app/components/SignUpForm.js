import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Input, Label, Button, Text, Spinner } from 'native-base';
import Display from 'react-native-display';

class SignUpForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      firstName: '',
      secondName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  signUp = () => {
    this.props.signUpUser(
      this.state.firstName,
      this.state.secondName,
      this.state.email,
      this.state.password,
      this.state.confirmPassword
    )
  };


  async componentWillReceiveProps(nextProps) {
    const {
      isLoading
    } = nextProps;

    if(isLoading!==this.props.isLoading) {
      this.setState({
        isLoading
      })
    }
  }

  render() {
    return (
      <Form >
        <Display enable={this.state.isLoading}>
          <View style={styles.loading}>
            <Spinner color='#ffffff' style={styles.spinner} />
          </View>
        </Display>
        <Item floatingLabel last>
          <Label style={styles.label}>First name</Label>
          <Input style={styles.input} onChangeText={(text) => this.setState({firstName: text})}
                 value={this.state.firstName} />
        </Item>
        <Item floatingLabel last>
          <Label style={styles.label}>Second name</Label>
          <Input style={styles.input} onChangeText={(text) => this.setState({secondName: text})}
                 value={this.state.secondName} />
        </Item>
        <Item floatingLabel last>
          <Label style={styles.label}>Email</Label>
          <Input style={styles.input} onChangeText={(text) => this.setState({email: text})}
                 value={this.state.email} />
        </Item>
        <Item floatingLabel last>
          <Label style={styles.label}>Password</Label>
          <Input style={styles.input} onChangeText={(text) => this.setState({password: text})}
                 value={this.state.password}
                 secureTextEntry={true} />
        </Item>
        <Item floatingLabel last>
          <Label style={styles.label}>Confirm password</Label>
          <Input style={styles.input} onChangeText={(text) => this.setState({confirmPassword: text})}
                 value={this.state.confirmPassword}
                 secureTextEntry={true} />
        </Item>
        <Button style={styles.button} onPress={this.signUp} full>
          <Text>Sign up</Text>
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: '#ffffff'
  },
  input: {
    color: '#ffffff'
  },
  baseWrapper: {
    backgroundColor: '#364E80'
  },
  button: {
    marginTop: 20
  },
  loading: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    paddingTop: 65
  }
});
export default SignUpForm;