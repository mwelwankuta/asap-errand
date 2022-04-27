import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableWithoutFeedback } from 'react-native';
import { Authenticate, VerifyCode, Welcome } from '../routes';
import { SvgXml as Svg } from 'react-native-svg';

import arrow_back from '../assets/icons/arrow_back.svg'

const AuthStack = createNativeStackNavigator();

export default function AuthScreen() {
  return (
    <AuthStack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: route.name != 'Welcome' ? true : false,
        headerBackVisible: false,
        title: '',
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableWithoutFeedback
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <Svg xml={arrow_back} height={16} width={24} />
          </TouchableWithoutFeedback>
        ),
      })}>
      <AuthStack.Screen name='Welcome' component={Welcome} />
      <AuthStack.Screen name='Login' component={Authenticate} />
      <AuthStack.Screen name='VerifyCode' component={VerifyCode} />
    </AuthStack.Navigator>
  );
}
