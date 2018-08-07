<script src="http://192.168.18.167:8097"></script>
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Input, Label, Button, Text, Spinner } from 'native-base';
import Display from 'react-native-display';

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: ''
    }
  }

  login = () => {
    this.props.loginUser(this.state.email, this.state.password)
  };


  async componentDidUpdate() {
    console.log('state', this.state);
  }

  async componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    const {
      isLoading
    } = nextProps;
    if(isLoading!==this.props.isLoading) {
      this.setState({
        isLoading
      });
    }
  }

    render() {
    return (
      <Form >

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
        <Display enable={this.state.isLoading}>
          <View style={styles.loading}>
            <Spinner color='#ffffff' style={styles.spinner} />
          </View>
        </Display>
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
    top: -280,
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    paddingTop: 65
  }
});
export default LoginForm;