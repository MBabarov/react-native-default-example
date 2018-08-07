import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class DashboardScreen extends React.Component {
  render() {
    return (
    <Container style={styles.page}>
      <Header  style={styles.header}>
        <Left>
          <Button transparent onPress={() =>{ this.props.navigation.goBack() }}>
            <Icon style={styles.backIcon} name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Dashboard</Title>
        </Body>
        <Right />
      </Header>
      <Content style={styles.content}>
        <Button
          style={styles.contentButton}
          onPress={() => this.props.navigation.navigate('Account')}>
          <Text>Account Details</Text>
        </Button>
        <Button
          style={styles.contentButton}
          onPress={() => this.props.navigation.navigate('PortfolioInitialQuestions')}>
          <Text>Portfolio Initial Questions</Text>
        </Button>
        <Button
          style={styles.contentButton}
          onPress={() => this.props.navigation.navigate('PortfolioInitialVisualization')}>
          <Text>Portfolio Initial Visualization</Text>
        </Button>
        <Button
          style={styles.contentButton}
          onPress={() => this.props.navigation.navigate('PortfolioRecommendation')}>
          <Text>Portfolio Recommendation</Text>
        </Button>
        <Button
          style={styles.contentButton}
          onPress={() => this.props.navigation.navigate('Bank')}>
          <Text>Bank</Text>
        </Button>
        <Button
          style={styles.contentButton}
          onPress={() => this.props.navigation.navigate('RiskAssessment')}>
          <Text>Risk Assessment</Text>
       </Button>
      </Content>
    </Container>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#364E80'
  },
  header: {
    backgroundColor: '#364E80',
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
  },
  title: {
    color: '#ffffff'
  },
  content: {
    alignSelf: 'center',
    padding: 20
  },
  contentButton: {
    marginBottom: 20
  },
});
export default DashboardScreen;