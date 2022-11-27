import {View} from './View';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ErrorHandler} from '../handlers/errors';

export const Screen = ({children}: {children: React.ReactNode}) => {
	return (
		<ErrorHandler>
			<SafeAreaView>
				<View>{children}</View>
			</SafeAreaView>
		</ErrorHandler>
	);
};
