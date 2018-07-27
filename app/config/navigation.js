import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../views/LoginScreen';
import DashboardScreen from '../views/DashboardScreen';
import SignUpScreen from '../views/SignUpScreen';
import AccountScreen from '../views/Account/AccountScreen';
import InitialQuestionsScreen from '../views/Portfolio/InitialQuestionsScreen';
import InitialVisualizationScreen from '../views/Portfolio/InitialVisualizationScreen';
import RecommendationScreen from '../views/Portfolio/RecommendationScreen';
import ScrapeAndLinksScreen from '../views/Bank/ScrapeAndLinksScreen';
import RiskAssessmentScreen from '../views/RiskAssessmentScreen';
import PredictorScreen from '../views/PredictorScreen';

export const Navigate = createStackNavigator({
  Login: LoginScreen,
  Dashboard: DashboardScreen,
  SignUp: SignUpScreen,
  Account: AccountScreen,
  PortfolioInitialQuestions: InitialQuestionsScreen,
  PortfolioInitialVisualization: InitialVisualizationScreen,
  PortfolioRecommendation: RecommendationScreen,
  ScrapeAndLinks: ScrapeAndLinksScreen,
  RiskAssessment: RiskAssessmentScreen,
  Predictor: PredictorScreen,
});