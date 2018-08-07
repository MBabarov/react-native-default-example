import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../views/Login/index';
import SignUpScreen from '../views/SignUp/index';
import { BankScreen } from '../views/Bank/index';
import DashboardScreen from '../views/Dashboard/DashboardScreen.js';
import AccountScreen from '../views/Account/AccountScreen.js';
// import InitialQuestionsScreen from '../views/Portfolio/InitialQuestionsScreen.js';
// import InitialVisualizationScreen from '../views/Portfolio/InitialVisualizationScreen.js';
// import RecommendationScreen from '../views/Portfolio/RecommendationScreen.js';
// import ScrapeAndLinksScreen from '../views/Bank/ScrapeAndLinksScreen.js';
// import RiskAssessmentScreen from '../views/RiskAssessment/RiskAssessmentScreen.js';
// import PredictorScreen from '../views/Predictor/PredictorScreen.js';

export const Navigate = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Bank: BankScreen,
  Dashboard: DashboardScreen,
  Account: AccountScreen,
  // PortfolioInitialQuestions: InitialQuestionsScreen,
  // PortfolioInitialVisualization: InitialVisualizationScreen,
  // PortfolioRecommendation: RecommendationScreen,
  // ScrapeAndLinks: ScrapeAndLinksScreen,
  // RiskAssessment: RiskAssessmentScreen,
  // Predictor: PredictorScreen,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
);