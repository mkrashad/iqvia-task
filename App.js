import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountryList from './src/Components/CountryList';
import CountryDetail from './src/Components/CountryDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CountryList" component={CountryList} options={{ title: 'Countries' }} />
        <Stack.Screen name="CountryDetail" component={CountryDetail} options={{ title: 'Country Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
