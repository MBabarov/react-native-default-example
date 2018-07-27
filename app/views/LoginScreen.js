import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button,  Input, Icon } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";


class LoginScreen extends React.Component {
  render() {
    return (
    <Grid>

      <Input
        placeholder='INPUT WITH CUSTOM ICON'
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />

      <Row>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')} />
      </Row>
      <Row>
        <Button
          title="Sign up"
          onPress={() => this.props.navigation.navigate('SignUp')} />
      </Row>
    </Grid>
    );
  }
}

export default LoginScreen;