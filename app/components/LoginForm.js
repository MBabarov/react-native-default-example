<script src="http://192.168.18.167:8097"></script>
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Form, Item, Input, Label, Button, Text, Spinner, Content } from 'native-base';
import Display from 'react-native-display';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  console.log('values', values);
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 3) {
    errors.password = 'Must be 3 characters or more'
  }
  console.log('errors', errors);
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.password < 3) {
    warnings.password = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderButton = ({input, label, onPress, disabled, meta: { touched, error, warning }}) => {
  return(
    <Button style={styles.button} onPress={onPress} disabled={disabled}>
      <Text>Login</Text>
    </Button>
  )
};

const renderField = ({input, label, secureTextEntry, meta: { touched, error, warning }}) => {
  let hasError= false;
  console.log('renderField error', error, touched);
  if(error !== undefined && touched){
    hasError= true;
  }
  return(
    <View>
      <Item floatingLabel error= {hasError}>
        <Label style={styles.label}>{label}</Label>
        <Input {...input} style={styles.input} secureTextEntry={secureTextEntry}/>
      </Item>
      {hasError ? <Text  style={styles.errorMessage}>{error}</Text> : <Text />}
    </View>
  )
}

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
      isFirstTimeLogin: true
    }
  }

  login = () => {
    console.log('loginMethod', this.props);
    if (this.props.valid) {
      this.props.reset();
      this.props.loginUser(this.state.email, this.state.password)
    }
    this.setState({
      isFirstTimeLogin: false
    })
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
    const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
      'submitSucceeded', 'submitFailed'];
    const { handleSubmit, reset } = this.props;
    console.log('this.props', this.props);
    return (
      <Content >
        <Field
          name="email"
          component={renderField}
          label="Email"
        />
        <Field
          name={'password'}
          component={renderField}
          label="Password"
          secureTextEntry={true}
        />
        <Field
          name={'Login'}
          component={renderButton}
          onPress={this.login}
          disabled={this.props.invalid && this.props.dirty}
        />
        <Text>{this.state.isFirstTimeLogin}</Text>
        <Button style={styles.button} onPress={this.login} full disabled={this.props.invalid}>
          <Text>Login</Text>
        </Button>
        <Text>The form is:</Text>
        {
          formStates.filter((state) => this.props[state]).map((state) => {
            return <Text key={state}> - { state }</Text>
          })
        }
        <Display enable={this.state.isLoading}>
          <View style={styles.loading}>
            <Spinner color='#ffffff' style={styles.spinner} />
          </View>
        </Display>
      </Content>
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
  errorMessage: {
    color: '#ffffff',
    marginLeft: 5,
    fontSize: 14
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
export default reduxForm({
  form: 'Login',
  validate
})(LoginForm);