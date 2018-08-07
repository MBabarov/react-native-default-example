import React, {Component} from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Platform, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
// import { Button,  Input, Icon } from 'react-native-elements'
// import { Col, Row, Grid } from 'react-native-easy-grid';
import { BankAllocationScreen, BankInvestmentScree, BankSettingsScreen } from './index';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  Toast,
  Spinner,
  Icon,
  Footer,
  FooterTab
} from 'native-base';

class BankScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      selectedTab: 'allocation'
    };
  }

  async componentWillReceiveProps(nextProps) {
    const {
      loginData
    } = nextProps;

    if(loginData.isFetching !== this.props.loginData.isFetching){
      this.setState({
        isLoading: loginData.isFetching
      });
    }
    if (loginData.error && !loginData.isFetching && this.props.loginData.isFetching) {
      Toast.show({
        text: loginData.error+'',
        textStyle: { color: "#ffffff" },
        buttonText: "Okay",
        duration: 2500,
        type: "danger"
      })
    }

    if (!loginData.error && !loginData.isFetching && this.props.loginData.isFetching) {
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

  renderSelectedTab () {
    switch (this.state.selectedTab) {
      case 'allocation':
        return (<BankAllocationScreen />);
        break;
      case 'investment':
        return (<BankInvestmentScree />);
        break;
      case 'settings':
        return (<BankSettingsScreen />);
        break;
      default:
    }
  }

  render() {
    return (
      <Container style={styles.baseWrapper}>
        <Header  style={styles.headerWrapper}>
          <Left />
          <Body style={styles.headerBody}>
          <Title style={styles.titleStyle}>Bank</Title>
          </Body>
          <Right />
        </Header>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Content style={styles.content}>
            {this.renderSelectedTab()}
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical active={this.state.selectedTab==='allocation'}
                      onPress={() => this.setState({selectedTab: 'allocation'})} >
                <Icon name="apps" />
                <Text>Funding</Text>
              </Button>
              <Button vertical active={this.state.selectedTab==='investment'}
                      onPress={() => this.setState({selectedTab: 'investment'})} >
                <Icon name="camera" />
                <Text>Bank Link</Text>
              </Button>
              <Button vertical active={this.state.selectedTab==='settings'}
                      onPress={() => this.setState({selectedTab: 'settings'})} >
                <Icon active name="navigate" />
                <Text>Deposit</Text>
              </Button>
              {/*<Button vertical active={this.state.selectedTab===''}*/}
                      {/*onPress={() => this.setState({selectedTab: ''})} >*/}
                {/*<Icon name="person" />*/}
                {/*<Text>Withdrawal</Text>*/}
              {/*</Button>*/}
              {/*<Button vertical active={this.state.selectedTab===''}*/}
                      {/*onPress={() => this.setState({selectedTab: ''})} >*/}
                {/*<Icon name="person" />*/}
                {/*<Text>Transfer</Text>*/}
              {/*</Button>*/}
            </FooterTab>
          </Footer>
        </KeyboardAvoidingView>
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
    padding: 0
  },
  baseWrapper: {
    backgroundColor: '#364E80'
  },
});
export default BankScreen;