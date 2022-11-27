import {Screen, View, Text} from '../../components';
import {TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';

export const ErrorFallback = ({resetBoundary}: any) => {
	const reset = () => {
		resetBoundary();
		RNRestart.Restart();
	};

	return (
		<Screen>
			<Text>Error</Text>
			<TouchableOpacity onPress={() => reset()}>
				<Text>Reload</Text>
			</TouchableOpacity>
		</Screen>
	);
};
