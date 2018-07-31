import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Input, Label, Button, Text, Spinner } from 'native-base';
import Display from 'react-native-display';

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  login = () => {
    // this.setState({
    //   loading: true
    // });
    this.props.loginUser(this.state.email, this.state.password)
  };


  async componentWillReceiveProps(nextProps) {
    const {
      isLoading
    } = nextProps;
    if(isLoading!==this.props.isLoading) {

    }
  }

    render() {
    return (
      <Form >
        <Display enable={this.state.loading}>
          <View style={styles.loading}>
            <Spinner color='#ffffff' style={styles.spinner} />
          </View>
        </Display>
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
        <Button style={styles.button} onPress={this.login} full>
          <Text>Login</Text>
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
export default LoginForm;