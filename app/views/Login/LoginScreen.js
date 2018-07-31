import React, {Component} from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Platform, StyleSheet, Image } from 'react-native';
// import { Button,  Input, Icon } from 'react-native-elements'
// import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Title, Content, Button, Left, Right, Body, Text, Toast, Spinner, Segment } from 'native-base';
import LoginForm from '../../components/LoginForm';



class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  async componentWillReceiveProps(nextProps) {
    const {
      loginData
    } = nextProps;


    if (loginData.error && !loginData.isFetching && !this.props.isFetching) {
      Toast.show({
        text: loginData.error+'',
        textStyle: { color: "#ffffff" },
        buttonText: "Okay",
        duration: 2500,
        type: "danger"
      })
    }

    if (!loginData.error && !loginData.isFetching && !this.props.isFetching) {
      Toast.show({
        text: 'Login was successful',
        textStyle: { color: "#ffffff" },
        buttonText: "Okay",
        duration: 2500,
        type: "success"
      });
      this.props.navigation.navigate('Dashboard')
    }
  }

  render() {
    return (
      <Container style={styles.baseWrapper}>
        <Header  style={styles.headerWrapper}>
          <Left />
          <Body style={styles.headerBody}>
            <Title style={styles.titleStyle}>Login</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
          <LoginForm loginUser={this.props.loginUser} isLoading="this.props.loginData.isFetching"/>
          <Button
            full
            style={styles.button}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>Sign up</Text>
          </Button>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#364E80',
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff'
  },
  titleStyle: {
    color: '#ffffff'
  },
  headerBody: {
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-end'
  },
  content: {
    padding: 40
  },
  logo: {
    width: 200,
    height: 97,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  baseWrapper: {
    backgroundColor: '#364E80'
  },
  button: {
    marginTop: 20
  }
});
export default LoginScreen;