import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../tabs/tabs';

const RootStackNavigator = createNativeStackNavigator();

const RootStack = () => {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        name="Tabs"
        component={TabNavigation}
        options={({route}) => ({
          animationEnabled: false,
          headerShown: false,
        })}
      />
    </RootStackNavigator.Navigator>
  );
};

export default RootStack;
