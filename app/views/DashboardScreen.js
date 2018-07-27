import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

class FirstScreen extends React.Component {
  render() {
    return (
      <View>
        <Button
          style={styles.text}
          title="Account Details"
          onPress={() => this.props.navigation.navigate('Account')} />
        <Button
          style={styles.text}
          title="Portfolio Initial Questions"
          onPress={() => this.props.navigation.navigate('PortfolioInitialQuestions')} />
        <Button
          style={styles.text}
          title="Portfolio Initial Visualization"
          onPress={() => this.props.navigation.navigate('PortfolioInitialVisualization')} />
        <Button
          style={styles.text}
          title="Portfolio Recommendation"
          onPress={() => this.props.navigation.navigate('PortfolioRecommendation')} />
        <Button
          style={styles.text}
          title="Bank Scrape & Bank Links"
          onPress={() => this.props.navigation.navigate('ScrapeAndLinks')} />
        <Button
          style={styles.text}
          title="Risk Assessment"
          onPress={() => this.props.navigation.navigate('RiskAssessment')} />
      </View>
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
export default FirstScreen;