import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login} from '../screens/login';
import NavigationContainer from './NavigationContainer';

type RootNavigatorParamList = {
	login: undefined;
	home: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootStack: React.FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="login" component={Login} options={{headerShown: false}} />
		</Stack.Navigator>
	);
};

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}
